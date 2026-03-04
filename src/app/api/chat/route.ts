import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildSystemPrompt } from "@/lib/chat/system-prompt";
import { checkRateLimit } from "@/lib/chat/rate-limit";
import type { ChatMessage } from "@/lib/chat/types";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");

export async function POST(req: Request): Promise<Response> {
  if (!process.env.GEMINI_API_KEY) {
    return Response.json({ error: "AI assistant is not configured" }, { status: 500 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const { allowed, remaining } = checkRateLimit(ip);

  if (!allowed) {
    return Response.json(
      { error: "Daily limit reached. Please try again tomorrow or contact Fran directly." },
      { status: 429, headers: { "Retry-After": "86400" } }
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "Messages array is required" }, { status: 400 });
  }

  const lastMessage = messages[messages.length - 1];
  if (lastMessage.role !== "user" || !lastMessage.content.trim()) {
    return Response.json({ error: "Last message must be a non-empty user message" }, { status: 400 });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: buildSystemPrompt(),
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({ history });
    const result = await chat.sendMessageStream(lastMessage.content);

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(new TextEncoder().encode(text));
            }
          }
        } catch {
          controller.enqueue(new TextEncoder().encode("\n\n[Error: response interrupted]"));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-RateLimit-Remaining": String(remaining),
      },
    });
  } catch {
    return Response.json(
      { error: "Something went wrong. You can reach Fran at contact@franabellan.com" },
      { status: 502 }
    );
  }
}
