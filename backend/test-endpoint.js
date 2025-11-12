// Simple test script to verify the endpoint works
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const testEndpoint = async () => {
  try {
    console.log("Testing Gemini API endpoint...");
    
    const response = await fetch("http://localhost:3000/gemini/solve-doubt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: "What is 2+2?",
        subject: "Mathematics",
      }),
    });

    console.log("Status:", response.status, response.statusText);
    const data = await response.json();
    console.log("Response:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error.message);
  }
};

testEndpoint();

