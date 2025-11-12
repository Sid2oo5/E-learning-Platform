import express from "express";
import { GoogleGenAI } from "@google/genai"; // ✅ ESM import

const router = express.Router();

// ✅ Log environment key (optional, remove in production)
console.log("API Key loaded:", process.env.GEMINI_API_KEY);

// ✅ Initialize Gemini API client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "AIzaSyDm3AkluQ8AQnAB5z3-UQh1GeGe8Rqr4yg", // fallback for testing
});

console.log("✅ Gemini client initialized");

// ✅ POST /api/doubt/ask
router.post("/ask", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // ✅ Generate AI response
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    console.log("🎯 Gemini raw result:", JSON.stringify(result, null, 2));

    // ✅ Send JSON back to frontend
    res.json({
      text: result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response",
    });
  } catch (error) {
    console.error("❌ Gemini API Error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

export default router;
