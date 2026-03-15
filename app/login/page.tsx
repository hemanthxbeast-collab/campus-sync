"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function LoginPage() {

  const router = useRouter();

  return (
    <main className="relative w-full h-screen overflow-hidden text-white">

      {/* Background Animation */}
      <div className="absolute inset-0 blur-md brightness-50">
        <Spline scene="https://prod.spline.design/tqFj7duPUFhpYHaL/scene.splinecode"/>
      </div>

      {/* Login Box */}
      <div className="relative z-10 flex items-center justify-center h-full">

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-12 rounded-2xl w-96">

          <h1 className="text-3xl font-bold mb-8 text-center">
            CampusSync Login
          </h1>

          <div className="flex flex-col gap-4">

            <button
              onClick={()=>router.push("/dashboard/student")}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg"
            >
              Login as Student
            </button>

            <button
              onClick={()=>router.push("/dashboard/staff")}
              className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-lg"
            >
              Login as Teacher
            </button>

            <button
              onClick={()=>router.push("/dashboard/admin")}
              className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-lg"
            >
              Login as Admin
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}