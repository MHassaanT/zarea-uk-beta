"use client";

import Link from "next/link";
import { FaRobot } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <FaRobot className="mb-4 text-6xl text-blue-500" />
        <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
          ZareaAI
        </h1>
        <p className="mt-2 max-w-xl text-lg text-gray-400 sm:text-xl">
          Your personal AI assistant, here to serve you.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link href="/login">
          <button className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 shadow-lg">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="rounded-full border border-white bg-transparent px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}