"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">

      {/* Spline Scene */}
      <Spline scene="https://prod.spline.design/tqFj7duPUFhpYHaL/scene.splinecode" />

      {/* Login Button */}
      <div className="absolute top-[60%] left-[23%]">
        <Link href="/login">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-8 py-3 text-white font-semibold rounded-xl
            bg-gradient-to-r from-orange-500 via-red-500 to-pink-500
            shadow-lg shadow-orange-500/40"
          >
            Login
          </motion.button>
        </Link>
      </div>

    </main>
  );
}