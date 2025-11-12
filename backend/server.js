// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import authRoutes from "./routes/authRoutes.js";
// import { connectDB } from "./config/db.js";
// import surveyRoutes from "./routes/surveyRoutes.js";
// import recommendationRoutes from "./utils/recommendationEngine.js";
// import problemRoutes from "./routes/Problem.js";
// import geminiRoutes from "./api/routes/geminiRoutes.js";

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// connectDB();

// app.use("/api/auth", authRoutes);
// app.use("/api/survey", surveyRoutes);
// app.use("/api/problem", problemRoutes);
// app.use("/gemini", geminiRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`✅ Server Running at port ${PORT}`));
