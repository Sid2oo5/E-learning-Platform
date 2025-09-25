import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PointerHighlightDemo } from "./container/PointerHighlightDemo";
import { FollowerPointerCard } from "./ui/following-pointer";

type Problem = {
  id: string;
  title: string;
  subject: string;
  difficulty: "Easy" | "Medium" | "Hard";
  image: string;
};

const sampleProblems: Problem[] = [
  {
    id: "p1",
    title: "Quadratic Equation Roots",
    subject: "Maths",
    difficulty: "Easy",
    image: "https://thumbs.dreamstime.com/b/general-quadratic-equation-its-roots-solution-formula-162296263.jpg",
  },
  {
    id: "p2",
    title: "Newton's Laws MCQ",
    subject: "Physics",
    difficulty: "Medium",
    image: "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/3e534993-b6af-4cfe-87e0-7635088bdc61",
  },
  {
    id: "p3",
    title: "Organic Chemistry Basics",
    subject: "Chemistry",
    difficulty: "Hard",
    image: "https://m.media-amazon.com/images/I/61nCopezACL._UF1000,1000_QL80_.jpg",
  },
  {
    id: "p4",
    title: "World War II Timeline",
    subject: "History",
    difficulty: "Medium",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240625165018/world-war-2-timeline.webp",
  },
  {
    id: "p5",
    title: "Python Functions",
    subject: "Programming",
    difficulty: "Easy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO65yJyLzXrf5_YGLiuUq33Kz274-ZsllAHw&s",
  },
  {
    id: "p6",
    title: "Photosynthesis Process",
    subject: "Biology",
    difficulty: "Hard",
    image: "https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-scaled.jpg",
  },
];

export default function Problems() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProblems = sampleProblems.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* 🔍 Search Bar */}
      <div className="flex items-center max-w-md mx-auto mb-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for problems, topics, or subjects..."
            className="w-full py-2 pl-10 pr-4 rounded-xl bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* 🔦 Pointer highlight heading */}
      <PointerHighlightDemo />

      {/* 📝 Problem Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-x-8 mb-30">
        {filteredProblems.map((problem) => (
          <FollowerPointerCard
            key={problem.id}
            title={problem.subject}
            className="mx-auto w-full max-w-sm"
          >
            <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-700 bg-white transition duration-200 hover:shadow-xl">
              <div className="p-6 flex flex-col items-start">
                <h2 className="text-lg font-bold text-black mb-2">
                  {problem.title}
                </h2>
                <p className="text-sm text-black mb-4">{problem.subject}</p>
                <span
                  className={`px-3 py-1 mb-4 rounded-full text-xs font-semibold ${
                    problem.difficulty === "Easy"
                      ? "bg-green-600 text-white"
                      : problem.difficulty === "Medium"
                      ? "bg-yellow-500 text-black"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {problem.difficulty}
                </span>

                {/* 🖼️ Problem Image */}
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </FollowerPointerCard>
        ))}
      </div>
    </div>
  );
}
