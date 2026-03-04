import type { ChatRole } from "@/lib/chat/types";

interface ChatBubbleProps {
  role: ChatRole;
  content: string;
}

export default function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-accent/10 text-text-primary rounded-br-sm"
            : "bg-bg-card text-text-secondary rounded-bl-sm"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
