// server.js  — ES Module version
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import doubtRoutes from "./routes/doubtRoutes.js"; // 👈 note the .js extension

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.json({ message: "AI Doubt Solver Backend Running ✅" });
});

// ✅ Mount the routes
app.use("/api/doubts", doubtRoutes);

// ✅ Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
