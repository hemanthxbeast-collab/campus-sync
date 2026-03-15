"use client";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-black/40 backdrop-blur-xl border-b border-white/10 px-8 py-4">

      <input
        placeholder="Search..."
        className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-72"
      />

      <div className="flex items-center gap-6">

        <button className="hover:scale-110 transition">
          🔔
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
          <span>Student</span>
        </div>

      </div>

    </div>
  );
}