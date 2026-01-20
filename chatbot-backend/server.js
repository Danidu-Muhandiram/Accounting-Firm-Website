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
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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
You are an AI assistant for an accounting firm.

Rules:
- You may explain general accounting concepts.
- Do NOT calculate taxes.
- Do NOT give legal or financial advice.
- If asked for exact tax amounts, deductions, penalties, or legal advice,
  politely refuse and suggest speaking with an accountant.
- Always be professional and calm.
- Support English and Sinhala.

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
