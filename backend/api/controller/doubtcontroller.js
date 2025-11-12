// const express = require("express");
// const { GoogleGenAI } = require("@google/genai");

// const router = express.Router();

// console.log("aoi",process.env.GEMINI_API_KEY)
// // Initialize Gemini API client
// const ai = new GoogleGenAI({
//   apiKey: "AIzaSyDsUYknV7TayVY5o35p0EA1BjiVkQMFy3M",
// });
// console.log(ai)
// // POST /api/doubt/ask
// router.post("/ask", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });

//   console.log(JSON.stringify(result, null, 2));

//   // Send the text response back to client
//   res.json({
//     text: result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response",
//   });

//   } catch (error) {
//     console.error("❌ Gemini API Error:", error);
//     res.status(500).json({ error: "Failed to generate response" });
//   }
// });

// module.exports = router;