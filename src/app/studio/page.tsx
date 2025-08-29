"use client";
import Link from "next/link";

export default function StudioPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          Coming Soon
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-400 sm:text-xl">
          This page is under construction. We are working hard to bring you an
          amazing new experience!
        </p>
        <Link href="/dashboard">
          <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 shadow-lg">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
