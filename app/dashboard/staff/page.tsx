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
  Users,
  Bell,
  HelpCircle,
  Search,
  User,
  BookOpen
} from "lucide-react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function StaffDashboard() {

  const [active, setActive] = useState("Dashboard");
  const [showNotif, setShowNotif] = useState(false);

  return (
    <main className="relative w-full h-screen overflow-hidden text-white">

      {/* 3D Background */}
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
            <SidebarItem icon={<Users size={18}/>} label="Students" active={active} setActive={setActive}/>
            <SidebarItem icon={<ClipboardCheck size={18}/>} label="Attendance" active={active} setActive={setActive}/>
            <SidebarItem icon={<FileText size={18}/>} label="Results" active={active} setActive={setActive}/>
            <SidebarItem icon={<BookOpen size={18}/>} label="Courses" active={active} setActive={setActive}/>
            <SidebarItem icon={<Bell size={18}/>} label="Announcements" active={active} setActive={setActive}/>
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

              <div className="relative">

                <button onClick={()=>setShowNotif(!showNotif)}>
                  <Bell/>
                </button>

                {showNotif && (
                  <div className="absolute right-0 mt-4 w-72 bg-black/80 border border-white/10 rounded-xl p-4 backdrop-blur-xl">
                    <p className="text-sm mb-2">🔔 Notifications</p>
                    <p className="text-gray-400 text-sm">
                      Faculty meeting at 4PM today.
                    </p>
                  </div>
                )}

              </div>

              <div className="flex items-center gap-2">
                <User/>
                <span>Professor</span>
              </div>

            </div>

          </header>

          {/* Content */}
          <div className="p-10 overflow-y-auto flex-1">

            {/* Dashboard */}
            {active==="Dashboard" && (
              <>
                <h1 className="text-4xl font-bold mb-8">
                  Staff Dashboard
                </h1>

                <div className="grid grid-cols-3 gap-8 mb-10">

                  <StatCard
                    title="Total Students"
                    value="320"
                    color="bg-gradient-to-r from-purple-600 to-indigo-600"
                  />

                  <StatCard
                    title="Classes Today"
                    value="4"
                    color="bg-gradient-to-r from-orange-500 to-pink-500"
                  />

                  <StatCard
                    title="Pending Results"
                    value="12"
                    color="bg-gradient-to-r from-teal-500 to-green-500"
                  />

                </div>

                <motion.div
                  whileHover={{scale:1.02}}
                  className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10"
                >
                  <h2 className="text-xl mb-3">
                    Quick Announcement
                  </h2>

                  <button className="bg-blue-500 px-4 py-2 rounded-lg">
                    Post Announcement
                  </button>

                </motion.div>

              </>
            )}

            {/* Students */}
            {active==="Students" && (
              <>
                <h1 className="text-4xl mb-8">Student List</h1>

                <ul className="space-y-2">
                  <li>Rahul Sharma</li>
                  <li>Ananya Singh</li>
                  <li>Arjun Mehta</li>
                </ul>

              </>
            )}

            {/* Attendance */}
            {active==="Attendance" && (
              <>
                <h1 className="text-4xl mb-8">Mark Attendance</h1>

                <p>Select a class to mark attendance.</p>
              </>
            )}

            {/* Results */}
            {active==="Results" && (
              <>
                <h1 className="text-4xl mb-8">Upload Results</h1>

                <p>Upload exam marks for students.</p>
              </>
            )}

            {/* Courses */}
            {active==="Courses" && (
              <>
                <h1 className="text-4xl mb-8">Courses</h1>

                <ul>
                  <li>Aerospace Structures</li>
                  <li>Fluid Mechanics</li>
                  <li>Thermodynamics</li>
                </ul>
              </>
            )}

            {/* Announcements */}
            {active==="Announcements" && (
              <>
                <h1 className="text-4xl mb-8">Announcements</h1>

                <p>No announcements yet.</p>
              </>
            )}

            {/* Help */}
            {active==="Help" && (
              <>
                <h1 className="text-4xl mb-8">Help</h1>
                <p>Contact admin support.</p>
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