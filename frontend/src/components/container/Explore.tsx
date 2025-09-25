"use client";
import React, { useState } from "react";
import { Search, Star, BookOpen, TrendingUp } from "lucide-react";

// Sample Data with images
const topics = [
  {
    id: 1,
    title: "Algebra Basics",
    category: "Maths",
    rating: 4.5,
    enrolled: 1200,
    img: "https://i.ytimg.com/vi/vMJYlFIn_l0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC78jQP77xweKfjSm9YgiIDk_qyAw",
  },
  {
    id: 2,
    title: "Organic Chemistry Intro",
    category: "NEET",
    rating: 4.7,
    enrolled: 980,
    img: "https://m.media-amazon.com/images/I/91k-V79KEEL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "Modern Indian History",
    category: "UPSC",
    rating: 4.2,
    enrolled: 700,
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    title: "Kinematics - Motion",
    category: "Science",
    rating: 4.8,
    enrolled: 1450,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FhII5KFS5CDvpf4jnIoag_kFCKNkbMLH8pdSBzH_ZcBGUyyIFar1HLxNouL4x7g94PY&usqp=CAU",
  },
  {
    id: 5,
    title: "Essay Writing Mastery",
    category: "UPSC",
    rating: 4.6,
    enrolled: 540,
    img: "https://m.media-amazon.com/images/I/71c8YowkhML._UF1000,1000_QL80_.jpg",
  },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");

  const filtered = topics.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Explore Courses</h1>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2 pl-10 pr-4 rounded-2xl bg-black/40 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((topic) => (
            <div
              key={topic.id}
              className="bg-black/40 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col hover:border-cyan-500 transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={topic.img}
                alt={topic.title}
                className="h-80 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                    {topic.category}
                  </span>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <Star className="w-4 h-4 mr-1" /> {topic.rating}
                  </div>
                </div>

                <h2 className="text-lg font-semibold mb-2">{topic.title}</h2>
                <p className="text-xs text-gray-400 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> {topic.enrolled} enrolled
                </p>

                <div className="mt-auto flex gap-3">
                  <button className="flex-1 py-2 rounded-lg bg-gradient-to-r bg-blue-600 text-black font-semibold">
                    Enroll
                  </button>
                  <button className="py-2 px-3 rounded-lg border border-gray-700 text-sm">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" /> Trending Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 text-sm rounded-full bg-purple-700/20 text-purple-400">
              AI in Education
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-cyan-700/20 text-cyan-400">
              UPSC Current Affairs
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-yellow-700/20 text-yellow-400">
              JEE Mock Tests
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-green-700/20 text-green-400">
              NEET Biology
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
