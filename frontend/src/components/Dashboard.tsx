import React, { useState } from "react";

// Dashboard.tsx
// Dark transparent theme with rounded-4xl components.
// Tailwind CSS is used for styling (assumes Tailwind is configured in the project).

type Course = {
  id: string;
  title: string;
  subject: string;
  progress: number;
  lastVisitedAt?: string;
};

type Stat = {
  label: string;
  value: number | string;
  suffix?: string;
};

const sampleCourses: Course[] = [
  { id: "c1", title: "Algebra: Quadratic Equations", subject: "Maths", progress: 72, lastVisitedAt: "2025-09-22" },
  { id: "c2", title: "Physics: Mechanics - Kinematics", subject: "Science", progress: 45, lastVisitedAt: "2025-09-24" },
  { id: "c3", title: "Modern History: World Wars", subject: "History", progress: 12 },
  { id: "c4", title: "NEET Biology: Cell Biology", subject: "NEET", progress: 88, lastVisitedAt: "2025-09-23" },
];

const recommendedCourses: Course[] = [
  { id: "r1", title: "Calculus Essentials", subject: "Maths", progress: 0 },
  { id: "r2", title: "Organic Chemistry Intro", subject: "NEET", progress: 0 },
  { id: "r3", title: "Essay Writing for UPSC", subject: "UPSC", progress: 0 },
];

const dailyPractice = [
  { id: "p1", type: "MCQ", title: "Quadratic Roots — Easy", timeMin: 10 },
  { id: "p2", type: "Coding", title: "Two Sum - Practice", timeMin: 20 },
  { id: "p3", type: "MCQ", title: "Newton's Laws - Medium", timeMin: 12 },
];

const StatsCard: React.FC<{ stat: Stat }> = ({ stat }) => (
  <div className="flex-1 p-3 bg-black/50 rounded-4xl border border-gray-800 backdrop-blur-sm">
    <div className="text-xs text-gray-400">{stat.label}</div>
    <div className="mt-2 text-2xl font-semibold">
      {stat.value}
      {stat.suffix ?? ""}
    </div>
  </div>
);

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full bg-gray-800/60 rounded-full h-3 overflow-hidden">
    <div
      className="h-3 rounded-full transition-all duration-500"
      style={{
        width: `${Math.max(0, Math.min(100, progress))}%`,
        background: "linear-gradient(90deg,#6b21a8,#06b6d4)",
      }}
    />
  </div>
);

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>(sampleCourses);
  const [showRecommended, setShowRecommended] = useState(true);

  const overallProgress = Math.round(
    courses.reduce((acc, c) => acc + c.progress, 0) / (courses.length || 1)
  );

  const stats: Stat[] = [
    { label: "Courses Enrolled", value: courses.length },
    { label: "Tests Attempted", value: 18 },
    { label: "Doubts Asked", value: 6 },
    { label: "Streak (days)", value: 14 },
  ];

  function handleContinue(courseId: string) {
    const c = courses.find((x) => x.id === courseId);
    if (!c) return;
    alert(`Continue learning: ${c.title} (progress: ${c.progress}%)`);
  }

  function enrollRecommended(id: string) {
    const rc = recommendedCourses.find((r) => r.id === id);
    if (!rc) return;
    setCourses((prev) => [
      { ...rc, progress: 0, id: `c-${Date.now()}` },
      ...prev,
    ]);
    setShowRecommended(false);
  }

  return (
    <div className="min-h-screen p-6 bg-black text-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          <div className="text-sm text-gray-400">Last sync: Sept 25, 2025</div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <aside className="space-y-6 lg:col-span-1">
            {/* Profile + Stats */}
            <div className="p-4 bg-black/40 rounded-4xl border border-gray-800 backdrop-blur-sm">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-cyan-500 flex items-center justify-center overflow-hidden border ring-1 ring-white/5">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
                      fill="#0ea5a4"
                    />
                    <path
                      d="M3 20.5c0-3.866 3.582-7 9-7s9 3.134 9 7v.5H3v-.5z"
                      fill="#7c3aed"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold">Siddhesh Dabbawar</div>
                  <div className="text-sm text-gray-400">
                    Grade: 12 · Stream: NEET
                  </div>
                </div>
              </div>

              {/* Overall Progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-300">Overall progress</div>
                  <div className="text-sm font-medium">{overallProgress}%</div>
                </div>
                <ProgressBar progress={overallProgress} />
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <StatsCard key={s.label} stat={s} />
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-sm font-semibold mb-2">Today's Goal</h3>
              <p className="text-sm text-gray-300">
                Solve 3 practice problems & complete 1 lesson
              </p>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-cyan-500 text-black font-semibold">
                  Start Practice
                </button>
                <button className="py-2 px-3 rounded-lg border border-gray-700 text-sm">
                  Later
                </button>
              </div>
            </div>
          </aside>

          {/* Right column */}
          <main className="lg:col-span-2 space-y-6">
            {/* Courses */}
            <section className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Courses & Subjects</h2>
                <div className="text-sm text-gray-400">
                  Enrolled: {courses.length}
                </div>
              </div>

              <div className="space-y-4">
                {courses.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 bg-black/50 rounded-4xl border border-gray-800 flex items-center justify-between backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-800/60 flex items-center justify-center text-sm font-semibold text-gray-200">
                        {c.subject[0]}
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{c.title}</div>
                        <div className="text-xs text-gray-400">
                          {c.subject} • Last visited: {c.lastVisitedAt ?? "—"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-1/3 justify-end">
                      <div className="w-3/5">
                        <ProgressBar progress={c.progress} />
                      </div>
                      <div className="text-sm w-12 text-right">
                        {c.progress}%
                      </div>
                      <button
                        onClick={() => handleContinue(c.id)}
                        className="py-1 px-3 rounded-lg border border-gray-700 text-sm"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommended */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold">Recommended for you</h3>
                  <button
                    onClick={() => setShowRecommended((s) => !s)}
                    className="text-xs text-gray-400"
                  >
                    {showRecommended ? "Hide" : "Show"}
                  </button>
                </div>
                {showRecommended && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {recommendedCourses.map((r) => (
                      <div
                        key={r.id}
                        className="p-3 bg-black/50 rounded-4xl border border-gray-800 flex flex-col gap-2 backdrop-blur-sm"
                      >
                        <div className="text-sm font-semibold">{r.title}</div>
                        <div className="text-xs text-gray-400">{r.subject}</div>
                        <div className="mt-auto flex gap-2">
                          <button
                            onClick={() => enrollRecommended(r.id)}
                            className="flex-1 py-2 rounded-lg bg-white text-black font-medium"
                          >
                            Enroll
                          </button>
                          <button className="py-2 px-3 rounded-lg border border-gray-700 text-sm">
                            Preview
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Practice & Tests */}
            <section className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Practice & Tests</h2>
                <div className="text-sm text-gray-400">
                  Daily bite-sized practice
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 p-3 bg-black/50 rounded-4xl border border-gray-800 backdrop-blur-sm">
                  <h4 className="text-sm font-semibold mb-3">
                    Daily Practice Problems
                  </h4>
                  <div className="space-y-3">
                    {dailyPractice.map((d) => (
                      <div
                        key={d.id}
                        className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg"
                      >
                        <div>
                          <div className="text-sm font-medium">{d.title}</div>
                          <div className="text-xs text-gray-400">
                            {d.type} • {d.timeMin} min
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="py-1 px-3 rounded-lg border border-gray-700 text-sm">
                            Start
                          </button>
                          <button className="py-1 px-3 rounded-lg border border-gray-700 text-sm">
                            Skip
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-black/50 rounded-4xl border border-gray-800 backdrop-blur-sm">
                  <h4 className="text-sm font-semibold mb-3">Upcoming Tests</h4>
                  <div className="text-sm text-gray-400">
                    No scheduled tests. Try a mock test to track performance.
                  </div>
                  <div className="mt-4">
                    <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-700 to-cyan-500 text-black font-semibold">
                      Take Mock Test
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Activity */}
            <section className="p-3 bg-black/20 rounded-4xl border border-gray-800 text-sm text-gray-400 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>Recent activity</div>
                <div className="text-xs text-gray-500">Clear</div>
              </div>
              <ul className="mt-3 space-y-2">
                <li>
                  Completed "Algebra: Quadratic Equations" lesson 4 • 2 days ago
                </li>
                <li>Asked a doubt in "Mechanics" • 1 day ago</li>
                <li>Scored 78% on Physics practice test • 3 days ago</li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
