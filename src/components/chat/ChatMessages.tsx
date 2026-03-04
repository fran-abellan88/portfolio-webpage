"use client";

import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import type { ChatMessage } from "@/lib/chat/types";

interface ChatMessagesProps {
  messages: ChatMessage[];
  isStreaming: boolean;
}

const WELCOME_MESSAGE =
  "Hi! I'm an AI assistant for Fran's portfolio. Ask me about his experience, skills, education, or projects.";

export default function ChatMessages({ messages, isStreaming }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="flex-1 overflow-y-auto p-4 space-y-3"
      role="log"
      aria-live="polite"
      aria-label="Chat messages"
    >
      <ChatBubble role="assistant" content={WELCOME_MESSAGE} />
      {messages.map((msg, i) => (
        <ChatBubble key={i} role={msg.role} content={msg.content} />
      ))}
      {isStreaming && messages[messages.length - 1]?.role === "user" && (
        <div className="flex justify-start">
          <div className="bg-bg-card rounded-xl px-3.5 py-2.5 text-text-muted text-sm">
            <span className="animate-pulse">Thinking...</span>
          </div>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
