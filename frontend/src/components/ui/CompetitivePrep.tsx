import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineRobot } from "react-icons/ai";
import { MdTranslate } from "react-icons/md";

const CompetitivePrep: React.FC = () => {
  const [language, setLanguage] = useState("English");
  const [showPopup, setShowPopup] = useState(false);

  const exams = [
    {
      title: "NEET Preparation",
      description:
        "Master Biology, Chemistry, and Physics with AI-guided mock tests and topic-wise analysis.",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.8XKyyFSv1vA8kZ0yZshJ3wHaEo?pid=Api&P=0&h=180",
    },
    {
      title: "JEE Advanced Practice",
      description:
        "Crack JEE with smart question-solving like LeetCode and AI-based difficulty tuning.",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.1Vgk5mJbWg7yWqTrBQjW3AHaE8?pid=Api&P=0&h=180",
    },
    {
      title: "UPSC Study Schedule",
      description:
        "Structured GS, Current Affairs, and Essay plans with AI-generated personalized timetables.",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.1eUycLj3vxECAbA7I6VqRgHaEK?pid=Api&P=0&h=180",
    },
    {
      title: "MPSC Smart Prep",
      description:
        "Simplify MPSC preparation with bilingual content, mock tests, and progress tracking.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.Dx5E2mM7uXHThZL7ml3ahAHaEK?pid=Api&P=0&h=180",
    },
    {
      title: "Mock Tests",
      description:
        "Timed mock tests with instant AI feedback and solution explanations for better retention.",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.W2nXQjE9NfJ2Vlo96mUZ1QHaEo?pid=Api&P=0&h=180",
    },
    {
      title: "AI Study Plan",
      description:
        "Get daily and weekly AI-generated study schedules tailored to your exam goals.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.Gac1j0YBYwRO9Afz7S_CQwHaE8?pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center px-6 py-10">
      {/* Top Right Language Switcher */}
      <div className="absolute top-5 right-5 flex items-center space-x-3">
        <MdTranslate className="text-2xl text-blue-400" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-1 focus:outline-none"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Marathi</option>
          <option>Tamil</option>
          <option>Telugu</option>
        </select>
      </div>

      {/* Header */}
      <div className="text-center mb-10 max-w-3xl">
        <h1 className="text-5xl font-bold text-white mb-3">
          Crack Competitive Exams with Confidence
        </h1>
        <h2 className="text-2xl text-blue-400 mb-4">
          NEET • JEE • UPSC • MPSC
        </h2>
        <p className="text-gray-300">
          Get structured preparation with mock tests, problem-solving practice,
          and AI-generated personalized study schedules designed to boost your
          performance.
        </p>
      </div>

      {/* Exam Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {exams.map((exam, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl bg-gray-900/70 border border-gray-700 p-6 shadow-lg text-center backdrop-blur-md"
          >
            <img
              src={exam.image}
              alt={exam.title}
              className="w-full h-40 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">
              {exam.title}
            </h3>
            <p className="text-gray-300 text-base">{exam.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Floating AI Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white p-5 rounded-4xl shadow-[0_0_25px_rgba(59,130,246,0.6)] flex items-center justify-center transition-all duration-300"
      >
        <AiOutlineRobot className="text-3xl" />
      </motion.button>

      {/* AI Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-gray-900/80 border border-gray-700 rounded-4xl p-8 max-w-md w-full text-white shadow-2xl text-center">
              <h2 className="text-2xl font-semibold mb-3 text-blue-400">
                Ask the AI Tutor
              </h2>
              <p className="text-gray-300 mb-6">
                Need help solving a problem or creating a study plan?  
                Ask your AI tutor for instant guidance and step-by-step solutions.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-4xl transition"
                >
                  Close
                </button>
                <button
                  onClick={() => alert('AI Tutor Coming Soon!')}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-4xl transition"
                >
                  Chat Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompetitivePrep;
