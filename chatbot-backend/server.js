// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

// Health check
app.get("/", (req, res) => {
  res.send("Chatbot backend running");
});

// AI Chat Route
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({ reply: "Message is required." });
    }

    // SAFETY PROMPT (Accounting Guardrail)
    const prompt = `
You are an assistant for an accounting firm.

Hard rules:
- Only answer accounting firm topics (accounting, bookkeeping, payroll, audit support, compliance, financial reporting, advisory).
- If the user asks about unrelated topics (general knowledge, math, sexual content, or anything outside accounting), refuse briefly and invite them to ask an accounting-related question.
- Do NOT calculate taxes.
- Do NOT give legal or financial advice.
- Only include a disclaimer when the user asks for exact tax amounts, deductions, penalties, or legal advice.
- No phrases like "As an AI" or "I am an AI".

Output format:
- 3 to 6 short sentences.
- Then exactly 3 bullet points.
- Then 1 CTA line.
- Total length 180 to 220 words.

Language:
- Reply in the user's language.
- Only include Sinhala if the user uses Sinhala or explicitly asks for it.

User message:
"${userMessage}"
`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    res.json({ reply });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "Sorry, something went wrong. Please try again later."
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
