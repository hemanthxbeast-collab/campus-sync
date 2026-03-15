"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  color: string;
}

export default function StatCard({ title, value, color }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-2xl text-white shadow-xl ${color}`}
    >
      <h3 className="text-lg opacity-80">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-3">
        {value}
      </p>
    </motion.div>
  );
}