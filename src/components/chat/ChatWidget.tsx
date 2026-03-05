"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import type { ChatMessage } from "@/lib/chat/types";
import { getPostHogClient } from "@/lib/posthog";
import { ANALYTICS_EVENTS } from "@/lib/analytics-events";

const MAX_MESSAGES = 10;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userMessageCount >= MAX_MESSAGES;

  useEffect(() => {
    if (limitReached) {
      getPostHogClient()?.capture(ANALYTICS_EVENTS.CHAT_LIMIT_REACHED);
    }
  }, [limitReached]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (isStreaming || limitReached) return;

      getPostHogClient()?.capture(ANALYTICS_EVENTS.CHAT_MESSAGE_SENT, {
        message_index: userMessageCount + 1,
      });

      const userMsg: ChatMessage = { role: "user", content };
      const newMessages = [...messages, userMsg];
      setMessages(newMessages);
      setIsStreaming(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newMessages }),
          signal: controller.signal,
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: "Something went wrong" }));
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: err.error ?? "Something went wrong. Please try again." },
          ]);
          setIsStreaming(false);
          return;
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error("No stream");

        const decoder = new TextDecoder();
        let assistantContent = "";

        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantContent += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: "assistant", content: assistantContent };
            return updated;
          });
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant" && last.content) return prev;
          return [
            ...prev.filter((m) => !(m.role === "assistant" && !m.content)),
            { role: "assistant", content: "Something went wrong. You can reach Fran at contact@franabellan.com" },
          ];
        });
      } finally {
        setIsStreaming(false);
        abortRef.current = null;
      }
    },
    [messages, isStreaming, limitReached, userMessageCount]
  );

  const limitPlaceholder = limitReached
    ? "Message limit reached — contact Fran directly!"
    : undefined;

  return (
    <>
      {/* Floating button */}
      <button
        ref={buttonRef}
        onClick={() => {
          const next = !open;
          setOpen(next);
          getPostHogClient()?.capture(next ? ANALYTICS_EVENTS.CHAT_OPEN : ANALYTICS_EVENTS.CHAT_CLOSE);
        }}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent text-bg-primary shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 transition-all flex items-center justify-center"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-[min(400px,calc(100vw-3rem))] h-[min(520px,calc(100vh-8rem))] rounded-2xl border border-border-default bg-bg-surface shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-bg-card border-b border-border-default">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-text-primary">Ask my AI</span>
              </div>
              <button
                onClick={() => {
                  setOpen(false);
                  getPostHogClient()?.capture(ANALYTICS_EVENTS.CHAT_CLOSE);
                }}
                aria-label="Close chat"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <ChatMessages messages={messages} isStreaming={isStreaming} />

            {/* Disclaimer */}
            <p className="px-4 py-1 text-text-muted text-[11px] text-center border-t border-border-subtle">
              AI-generated responses — may not be fully accurate
            </p>

            {/* Input */}
            <ChatInput
              onSend={sendMessage}
              disabled={isStreaming || limitReached}
              placeholder={limitPlaceholder}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
