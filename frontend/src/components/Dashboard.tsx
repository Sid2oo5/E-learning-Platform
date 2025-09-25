"use client";
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";


// Types
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

type Practice = {
  id: string;
  type: string;
  title: string;
  timeMin: number;
};

// Sample Data
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

const dailyPractice: Practice[] = [
  { id: "p1", type: "MCQ", title: "Quadratic Roots — Easy", timeMin: 10 },
  { id: "p2", type: "Coding", title: "Two Sum - Practice", timeMin: 20 },
  { id: "p3", type: "MCQ", title: "Newton's Laws - Medium", timeMin: 12 },
];


// Components
export const ProgressBar: FC<{ progress: number }> = ({ progress }) => (

  <div className="w-full bg-gray-800/60 rounded-full h-3 overflow-hidden">
    <div
      className="h-3 rounded-full transition-all duration-500"
      style={{ width: `${Math.max(0, Math.min(100, progress))}%`, background: "linear-gradient(90deg,#6b21a8,#06b6d4)" }}
    />
  </div>
);

export const StatsCard: FC<{ stat: Stat }> = ({ stat }) => (
  <div className="flex-1 p-3 bg-black/50 rounded-4xl border border-gray-800 backdrop-blur-sm">
    <div className="text-xs text-gray-400">{stat.label}</div>
    <div className="mt-2 text-2xl font-semibold">{stat.value}{stat.suffix ?? ""}</div>
  </div>
);

const ProfileCard: FC<{ overallProgress: number; stats: Stat[] }> = ({ overallProgress, stats }) => (
  <div className="p-4 bg-black/40 rounded-4xl border border-gray-800 backdrop-blur-sm space-y-4">
    {/* Avatar */}
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-cyan-500 flex items-center justify-center overflow-hidden border ring-1 ring-white/5">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="#0ea5a4" />
          <path d="M3 20.5c0-3.866 3.582-7 9-7s9 3.134 9 7v.5H3v-.5z" fill="#7c3aed" />
        </svg>
      </div>
      <div>
        <div className="text-lg font-semibold">Siddhesh Dabbawar</div>
        <div className="text-sm text-gray-400">Grade: 12 · Stream: NEET</div>
      </div>
    </div>

    {/* Overall Progress */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-gray-300">Overall progress</div>
        <div className="text-sm font-medium">{overallProgress}%</div>
      </div>
      <ProgressBar progress={overallProgress} />
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s) => (
        <StatsCard key={s.label} stat={s} />
      ))}
    </div>
  </div>
);

const CoursesList: FC<{ courses: Course[]; onContinue: (id: string) => void }> = ({ courses, onContinue }) => (
  <div className="space-y-4">
    {courses.map((c) => (
      <div key={c.id} className="p-4 bg-black/50 rounded-4xl border border-gray-800 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gray-800/60 flex items-center justify-center text-sm font-semibold text-gray-200">
            {c.subject[0]}
          </div>
          <div>
            <div className="text-sm font-semibold">{c.title}</div>
            <div className="text-xs text-gray-400">{c.subject} • Last visited: {c.lastVisitedAt ?? "—"}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 w-1/3 justify-end">
          <div className="w-3/5">
            <ProgressBar progress={c.progress} />
          </div>
          <div className="text-sm w-12 text-right">{c.progress}%</div>
          <button
            onClick={() => onContinue(c.id)}
            className="py-1 px-3 rounded-lg border border-gray-700 text-sm"
          >
            Continue
          </button>
        </div>
      </div>
    ))}
  </div>
);

const RecommendedCourses: FC<{ recommended: Course[]; enroll: (id: string) => void }> = ({ recommended, enroll }) => {
  const [show, setShow] = useState(true);

  if (!show) return (
    <button onClick={() => setShow(true)} className="text-xs text-gray-400">Show Recommended Courses</button>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {recommended.map((r) => (
        <div key={r.id} className="p-3 bg-black/50 rounded-4xl border border-gray-800 flex flex-col gap-2 backdrop-blur-sm">
          <div className="text-sm font-semibold">{r.title}</div>
          <div className="text-xs text-gray-400">{r.subject}</div>
          <div className="mt-auto flex gap-2">
            <button onClick={() => enroll(r.id)} className="flex-1 py-2 rounded-lg bg-white text-black font-medium">
              Enroll
            </button>
            <button className="py-2 px-3 rounded-lg border border-gray-700 text-sm">Preview</button>
          </div>
        </div>
      ))}
      <button onClick={() => setShow(false)} className="text-xs text-gray-400 mt-2">Hide Recommended Courses</button>
    </div>
  );
};

const PracticeSection: FC<{ practice: Practice[] }> = ({ practice }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2 p-3 bg-black/50 rounded-4xl border border-gray-800 backdrop-blur-sm">
      <h4 className="text-sm font-semibold mb-3">Daily Practice Problems</h4>
      <div className="space-y-3">
        {practice.map((d) => (
          <div key={d.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
            <div>
              <div className="text-sm font-medium">{d.title}</div>
              <div className="text-xs text-gray-400">{d.type} • {d.timeMin} min</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="py-1 px-3 rounded-lg border border-gray-700 text-sm">Start</button>
              <button className="py-1 px-3 rounded-lg border border-gray-700 text-sm">Skip</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="p-3 bg-black/50 rounded-4xl border border-gray-800 backdrop-blur-sm">
      <h4 className="text-sm font-semibold mb-3">Upcoming Tests</h4>
      <div className="text-sm text-gray-400">No scheduled tests. Try a mock test to track performance.</div>
      <div className="mt-4">
        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-700 to-cyan-500 text-black font-semibold">
          Take Mock Test
        </button>
      </div>
    </div>
  </div>
);

// Dashboard Component
export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>(sampleCourses);

  const [showRecommended, setShowRecommended] = useState(true);
  const [showProfile, setShowProfile] = useState(false);


  const overallProgress = Math.round(
    courses.reduce((acc, c) => acc + c.progress, 0) / (courses.length || 1)
  );

  const stats: Stat[] = [
    { label: "Courses Enrolled", value: courses.length },
    { label: "Tests Attempted", value: 18 },
    { label: "Doubts Asked", value: 6 },
    { label: "Streak (days)", value: 14 },
  ];


  const pieData = courses.map((c, index) => ({
    title: c.subject,
    value: c.progress,
    color: ["#6b21a8", "#06b6d4", "#f59e0b", "#22c55e"][index % 4],
  }));

  const handleContinue = (courseId: string) => {
    const c = courses.find((x) => x.id === courseId);
    if (!c) return;
    alert(`Continue learning: ${c.title} (progress: ${c.progress}%)`);
  };

  const enrollRecommended = (id: string) => {
    const rc = recommendedCourses.find((r) => r.id === id);
    if (!rc) return;

    setCourses(prev => [{ ...rc, progress: 0, id: `c-${Date.now()}` }, ...prev]);
    setShowRecommended(false);

  };

  return (
    <div className="min-h-screen p-6 bg-black text-gray-100 relative">
      {/* Profile Icon */}
      <div className="absolute top-4 right-4">
        <div
          onClick={() => setShowProfile(!showProfile)}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-cyan-500 flex items-center justify-center cursor-pointer border ring-1 ring-white/10"
        >
          <div className="text-white font-bold">S</div>
        </div>
      </div>


      {/* Profile Overlay (like previous dashboard style) */}
      {showProfile && (
        <div className="absolute top-16 right-4 bg-black/50 border border-gray-800 rounded-4xl backdrop-blur-sm p-4 w-72 shadow-lg z-50">
          <h2 className="text-lg font-semibold mb-3">Profile Overview</h2>
          <div className="grid grid-cols-2 gap-2">
            {stats.map(s => (
              <div key={s.label} className="p-2 bg-black/30 rounded-2xl flex flex-col items-center justify-center border border-gray-700">
                <div className="text-xs text-gray-400">{s.label}</div>
                <div className="text-lg font-semibold">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left 50% */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Courses */}
          <div className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm flex-1 flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Courses & Subjects</h2>
            <div className="space-y-4 flex-1 overflow-y-auto">
              {courses.map(c => (
                <div key={c.id} className="p-4 bg-black/50 rounded-4xl border border-gray-800 flex items-center justify-between backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-800/60 flex items-center justify-center text-sm font-semibold text-gray-200">{c.subject[0]}</div>
                    <div>
                      <div className="text-sm font-semibold">{c.title}</div>
                      <div className="text-xs text-gray-400">{c.subject} • Last visited: {c.lastVisitedAt ?? "—"}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-1/3 justify-end">
                    <div className="w-3/5"><ProgressBar progress={c.progress} /></div>
                    <div className="text-sm w-12 text-right">{c.progress}%</div>
                    <button onClick={() => handleContinue(c.id)} className="py-1 px-3 rounded-lg border border-gray-700 text-sm">Continue</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pie Chart */}
          <div className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm flex-1 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold mb-4">Overall Subject Progress</h3>
            <div className="w-full h-64 flex items-center justify-center">
              <PieChart
                data={pieData}
                lineWidth={25}
                rounded
                label={({ dataEntry }) => `${Math.round(dataEntry.value)}%`}
                labelStyle={{ fontSize: "5px", fill: "#fff" }}
                animate
                labelPosition={0.5}
              />
            </div>
          </div>
        </div>

        {/* Right 50% */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Recommended Courses */}
          <div className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm flex-1 flex flex-col gap-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Recommended</h2>
              <button onClick={() => setShowRecommended(s => !s)} className="text-xs text-gray-400">{showRecommended ? "Hide" : "Show"}</button>
            </div>
            {showRecommended && (
              <div className="space-y-3 flex-1 overflow-y-auto">
                {recommendedCourses.map(r => (
                  <div key={r.id} className="p-3 bg-black/50 rounded-4xl border border-gray-800 flex flex-col gap-2 backdrop-blur-sm">
                    <div className="text-sm font-semibold">{r.title}</div>
                    <div className="text-xs text-gray-400">{r.subject}</div>
                    <div className="mt-auto flex gap-2">
                      <button
                        onClick={() => enrollRecommended(r.id)}
                        className="py-1 px-2 rounded-lg bg-gradient-to-r from-purple-700 to-cyan-500 text-black font-medium text-xs"
                      >
                        Enroll
                      </button>
                      <button className="py-1 px-2 rounded-lg border border-gray-700 text-xs">Preview</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Practice & Tests */}
          <div className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm flex-1 flex flex-col gap-4">
            <h2 className="text-lg font-semibold mb-3">Practice & Tests</h2>
            <div className="space-y-3 flex-1 overflow-y-auto">
              {dailyPractice.map(d => (
                <div key={d.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <div>
                    <div className="text-sm font-medium">{d.title}</div>
                    <div className="text-xs text-gray-400">{d.type} • {d.timeMin} min</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="py-1 px-3 rounded-lg border border-gray-700 text-sm">Start</button>
                    <button className="py-1 px-3 rounded-lg border border-gray-700 text-sm">Skip</button>
                  </div>
                </div>
              ))}
              <div className="p-3 bg-black/50 rounded-4xl border border-gray-800">
                <h4 className="text-sm font-semibold mb-3">Upcoming Tests</h4>
                <div className="text-sm text-gray-400">No scheduled tests. Try a mock test to track performance.</div>
                <div className="mt-4">
                  <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-700 to-cyan-500 text-black font-semibold">Take Mock Test</button>
                </div>
              </div>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <aside className="space-y-6 lg:col-span-1">
            <ProfileCard overallProgress={overallProgress} stats={stats} />

            <div className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-sm font-semibold mb-2">Today's Goal</h3>
              <p className="text-sm text-gray-300">Solve 3 practice problems & complete 1 lesson</p>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-cyan-500 text-black font-semibold">Start Practice</button>
                <button className="py-2 px-3 rounded-lg border border-gray-700 text-sm">Later</button>
              </div>
            </div>
          </aside>

          {/* Right Column */}
          <main className="lg:col-span-2 space-y-6">
            {/* Courses */}
            <section className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Courses & Subjects</h2>
                <div className="text-sm text-gray-400">Enrolled: {courses.length}</div>
              </div>
              <CoursesList courses={courses} onContinue={handleContinue} />
              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-3">Recommended for you</h3>
                <RecommendedCourses recommended={recommendedCourses} enroll={enrollRecommended} />
              </div>
            </section>

            {/* Practice & Tests */}
            <section className="p-4 bg-black/30 rounded-4xl border border-gray-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Practice & Tests</h2>
                <div className="text-sm text-gray-400">Daily bite-sized practice</div>
              </div>
              <PracticeSection practice={dailyPractice} />
            </section>

            {/* Recent Activity */}
            <section className="p-3 bg-black/20 rounded-4xl border border-gray-800 text-sm text-gray-400 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>Recent activity</div>
                <div className="text-xs text-gray-500">Clear</div>
              </div>
              <ul className="mt-3 space-y-2">
                <li>Completed "Algebra: Quadratic Equations" lesson 4 • 2 days ago</li>
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
