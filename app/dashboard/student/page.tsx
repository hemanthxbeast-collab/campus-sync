"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import StatCard from "@/app/components/StatCard";
import React from "react";

import {
  Home,
  ClipboardCheck,
  FileText,
  Utensils,
  Star,
  CheckSquare,
  Bell,
  HelpCircle,
  Search,
  User
} from "lucide-react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function StudentDashboard() {

  const [active, setActive] = useState("Dashboard");
  const [delayMessage, setDelayMessage] = useState("");
  const [showNotif, setShowNotif] = useState(false);

  return (
    <main className="relative w-full h-screen overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 blur-md brightness-50">
        <Spline scene="https://prod.spline.design/tqFj7duPUFhpYHaL/scene.splinecode"/>
      </div>

      <div className="relative z-10 flex h-full">

        {/* Sidebar */}
        <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-8">

          <h1 className="text-2xl font-bold mb-10">
            ALLIANCE UNIVERSITY
          </h1>

          <nav className="flex flex-col gap-5">

            <SidebarItem icon={<Home size={18}/>} label="Dashboard" active={active} setActive={setActive}/>
            <SidebarItem icon={<ClipboardCheck size={18}/>} label="Attendance" active={active} setActive={setActive}/>
            <SidebarItem icon={<FileText size={18}/>} label="Results" active={active} setActive={setActive}/>
            <SidebarItem icon={<Utensils size={18}/>} label="Mess Menu" active={active} setActive={setActive}/>
            <SidebarItem icon={<Star size={18}/>} label="Activity Points" active={active} setActive={setActive}/>
            <SidebarItem icon={<CheckSquare size={18}/>} label="ToDo" active={active} setActive={setActive}/>
            <SidebarItem icon={<Bell size={18}/>} label="Notifications" active={active} setActive={setActive}/>
            <SidebarItem icon={<HelpCircle size={18}/>} label="Help" active={active} setActive={setActive}/>

          </nav>

        </aside>

        {/* Main Section */}
        <section className="flex-1 flex flex-col">

          {/* Navbar */}
          <header className="flex justify-between items-center px-8 py-5 border-b border-white/10 bg-black/30 backdrop-blur">

            <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-lg">
              <Search size={18}/>
              <input placeholder="Search..." className="bg-transparent outline-none"/>
            </div>

            <div className="flex items-center gap-6">

              {/* Notification Bell */}
              <div className="relative">

                <button onClick={()=>setShowNotif(!showNotif)}>
                  <Bell/>
                </button>

                {showNotif && (
                  <div className="absolute right-0 mt-4 w-72 bg-black/80 border border-white/10 rounded-xl p-4 backdrop-blur-xl">
                    <p className="text-sm mb-2">🔔 Notifications</p>
                    <p className="text-gray-400 text-sm">
                      Professor Sharma delayed by 15 minutes.
                    </p>
                  </div>
                )}

              </div>

              {/* Profile */}
              <div className="flex items-center gap-2">
                <User/>
                <span>Student</span>
              </div>

            </div>

          </header>

          {/* Content */}
          <div className="p-10 overflow-y-auto flex-1">

            {delayMessage && (
              <div className="bg-yellow-500/20 border border-yellow-400 p-4 rounded-xl mb-6">
                {delayMessage}
              </div>
            )}

            {/* Dashboard */}
            {active==="Dashboard" && (
              <>
                <h1 className="text-4xl font-bold mb-8">
                  Student Dashboard
                </h1>

                <div className="grid grid-cols-3 gap-8 mb-10">

                  <StatCard
                    title="Activity Points"
                    value="120"
                    color="bg-gradient-to-r from-purple-600 to-indigo-600"
                  />

                  <StatCard
                    title="Tasks Today"
                    value="5"
                    color="bg-gradient-to-r from-orange-500 to-pink-500"
                  />

                  <StatCard
                    title="Notifications"
                    value="3"
                    color="bg-gradient-to-r from-teal-500 to-green-500"
                  />

                </div>

                <motion.div
                  whileHover={{scale:1.02}}
                  className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10"
                >
                  <h2 className="text-xl mb-3">
                    Teacher Delay Simulator
                  </h2>

                  <button
                    onClick={()=>setDelayMessage("⚠ Professor will arrive 15 minutes late")}
                    className="bg-orange-500 px-4 py-2 rounded-lg"
                  >
                    Simulate Delay
                  </button>

                </motion.div>

              </>
            )}

            {/* Attendance */}
            {active==="Attendance" && (
              <>
                <h1 className="text-4xl mb-8">Attendance</h1>

                <Progress subject="Mathematics" width="80%"/>
                <Progress subject="Physics" width="65%"/>
                <Progress subject="Chemistry" width="72%"/>

              </>
            )}

            {/* Results */}
            {active==="Results" && (
              <>
                <h1 className="text-4xl mb-8">Results</h1>

                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-400">
                      <th>Subject</th>
                      <th>Grade</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr><td>Math</td><td>A</td></tr>
                    <tr><td>Physics</td><td>B+</td></tr>
                    <tr><td>Chemistry</td><td>A-</td></tr>
                  </tbody>
                </table>

              </>
            )}

            {/* Mess */}
            {active==="Mess Menu" && (
              <>
                <h1 className="text-4xl mb-8">Mess Menu</h1>

                <p>🍳 Breakfast — Idli / Sambar</p>
                <p>🍛 Lunch — Rice / Dal</p>
                <p>🥘 Dinner — Chapati / Paneer</p>
              </>
            )}

            {/* Activity */}
            {active==="Activity Points" && (
              <>
                <h1 className="text-4xl mb-8">Leaderboard</h1>

                <ol className="space-y-2">
                  <li>🥇 Rahul — 220</li>
                  <li>🥈 Arjun — 180</li>
                  <li>🥉 You — 120</li>
                </ol>
              </>
            )}

            {/* ToDo */}
            {active==="ToDo" && (
              <>
                <h1 className="text-4xl mb-8">To-Do List</h1>

                <ul className="space-y-2">
                  <li>☐ Finish assignment</li>
                  <li>☑ Study thermodynamics</li>
                  <li>☐ Gym workout</li>
                </ul>
              </>
            )}

            {/* Help */}
            {active==="Help" && (
              <>
                <h1 className="text-4xl mb-8">Help</h1>
                <p>Contact support or view FAQs.</p>
              </>
            )}

          </div>

        </section>

      </div>

    </main>
  );
}

/* Types */

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active: string;
  setActive: (value: string) => void;
};

type ProgressProps = {
  subject: string;
  width: string;
};

/* Sidebar Item */

function SidebarItem({icon,label,active,setActive}:SidebarItemProps){

  return (
    <button
      onClick={()=>setActive(label)}
      className={`flex items-center gap-3 p-2 rounded-lg transition ${
        active===label ? "bg-white/10 text-white" : "hover:bg-white/5"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

/* Attendance Progress */

function Progress({subject,width}:ProgressProps){

  return (
    <div className="mb-6">
      <p>{subject}</p>

      <div className="bg-white/10 h-3 rounded">
        <div className="bg-green-500 h-3 rounded" style={{width}}/>
      </div>
    </div>
  );
}