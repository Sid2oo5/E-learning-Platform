// // server.js or routes/solveDoubt.js
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// app.post("/solve-doubt", async (req, res) => {
//   try {
//     const { question } = req.body;

//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const result = await model.generateContent(question);
//     const answer = result.response.text();

//     res.json({ answer });
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     res.status(500).json({ error: "Failed to fetch AI answer" });
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
