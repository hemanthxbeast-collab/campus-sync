"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

import {
  Home,
  Users,
  Bell,
  Settings,
  Database,
  Search,
  User
} from "lucide-react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function AdminDashboard(){

  const [active,setActive] = useState("Dashboard");

  return(
    <main className="relative w-full h-screen overflow-hidden text-white">

      <div className="absolute inset-0 blur-md brightness-50">
        <Spline scene="https://prod.spline.design/tqFj7duPUFhpYHaL/scene.splinecode"/>
      </div>

      <div className="relative z-10 flex h-full">

        {/* Sidebar */}
        <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-8">

          <h1 className="text-2xl font-bold mb-10">
            ADMIN PANEL
          </h1>

          <nav className="flex flex-col gap-5">

            <SidebarItem icon={<Home size={18}/>} label="Dashboard" active={active} setActive={setActive}/>
            <SidebarItem icon={<Users size={18}/>} label="Manage Users" active={active} setActive={setActive}/>
            <SidebarItem icon={<Database size={18}/>} label="Database" active={active} setActive={setActive}/>
            <SidebarItem icon={<Bell size={18}/>} label="Announcements" active={active} setActive={setActive}/>
            <SidebarItem icon={<Settings size={18}/>} label="Settings" active={active} setActive={setActive}/>

          </nav>

        </aside>

        {/* Main */}
        <section className="flex-1 p-12">

          {active==="Dashboard" && (
            <>
              <h1 className="text-4xl mb-8">Admin Dashboard</h1>
              <p>System overview and controls.</p>
            </>
          )}

          {active==="Manage Users" && (
            <>
              <h1 className="text-4xl mb-8">Manage Users</h1>
              <p>Create or remove students and staff.</p>
            </>
          )}

          {active==="Database" && (
            <>
              <h1 className="text-4xl mb-8">Database</h1>
              <p>Manage system data.</p>
            </>
          )}

          {active==="Announcements" && (
            <>
              <h1 className="text-4xl mb-8">Announcements</h1>
              <p>Post announcements to all users.</p>
            </>
          )}

          {active==="Settings" && (
            <>
              <h1 className="text-4xl mb-8">System Settings</h1>
              <p>Configure portal settings.</p>
            </>
          )}

        </section>

      </div>

    </main>
  )
}

type SidebarItemProps = {
  icon: React.ReactNode
  label: string
  active: string
  setActive: (v:string)=>void
}

function SidebarItem({icon,label,active,setActive}:SidebarItemProps){

  return(
    <button
      onClick={()=>setActive(label)}
      className={`flex items-center gap-3 p-2 rounded-lg ${
        active===label ? "bg-white/10 text-white" : "hover:bg-white/5"
      }`}
    >
      {icon}
      {label}
    </button>
  )
}