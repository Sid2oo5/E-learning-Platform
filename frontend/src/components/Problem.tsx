import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PointerHighlightDemo } from "./PointerHighlightDemo";

type Problem = {
  id: string;
  title: string;
  subject: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

const sampleProblems: Problem[] = [
  { id: "p1", title: "Quadratic Equation Roots", subject: "Maths", difficulty: "Easy" },
  { id: "p2", title: "Newton's Laws MCQ", subject: "Physics", difficulty: "Medium" },
  { id: "p3", title: "Organic Chemistry Basics", subject: "Chemistry", difficulty: "Hard" },
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
      {/* Search Bar */}
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

      <PointerHighlightDemo />

      {/* Problem List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProblems.length > 0 ? (
          filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="p-4 bg-gray-800 rounded-2xl border border-gray-700 hover:bg-gray-700 transition cursor-pointer"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm text-gray-400">{problem.subject}</div>
                <div className="px-2 py-0.5 text-xs rounded-full bg-cyan-500 text-black font-semibold">
                  {problem.difficulty}
                </div>
              </div>
              <div className="text-lg font-semibold">{problem.title}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-400 col-span-full text-center mt-10">
            No problems found.
          </div>
        )}
      </div>
    </div>
  );
}
