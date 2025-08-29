"use client";

import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { useRouter } from "next/navigation";
import {
  FaSignOutAlt,
  FaRobot,
  FaUsers,
  FaChartBar,
  FaFileAlt,
  FaCogs,
  FaPuzzlePiece,
} from "react-icons/fa";

export default function Dashboard() {
  const [businessName, setBusinessName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchBusinessName = async () => {
      const user = auth.currentUser;
      if (user) {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setBusinessName(snap.data().businessName || "User");
        }
      } else {
        router.push("/login");
      }
    };

    fetchBusinessName();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col bg-gray-950 p-6 md:flex">
        <div className="flex items-center mb-8">
          <FaRobot className="text-4xl text-blue-500" />
          <h2 className="ml-3 text-2xl font-bold">ZareaAI</h2>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center rounded-md p-3 font-medium transition-colors hover:bg-gray-800 hover:text-blue-500"
              >
                <FaChartBar className="mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-md p-3 font-medium transition-colors hover:bg-gray-800 hover:text-blue-500"
              >
                <FaUsers className="mr-3" />
                Leads
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-md p-3 font-medium transition-colors hover:bg-gray-800 hover:text-blue-500"
              >
                <FaRobot className="mr-3" />
                AI Agent
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-md p-3 font-medium transition-colors hover:bg-gray-800 hover:text-blue-500"
              >
                <FaFileAlt className="mr-3" />
                Content Generation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-md p-3 font-medium transition-colors hover:bg-gray-800 hover:text-blue-500"
              >
                <FaPuzzlePiece className="mr-3" />
                Integrations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-md p-3 font-medium transition-colors hover:bg-gray-800 hover:text-blue-500"
              >
                <FaCogs className="mr-3" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-2 font-semibold transition-colors hover:bg-red-700"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col p-6 md:ml-64">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Welcome, {businessName}
          </h1>
          <button
            onClick={handleLogout}
            className="rounded-md bg-red-600 px-4 py-2 font-semibold transition-colors hover:bg-red-700 md:hidden"
          >
            <FaSignOutAlt />
          </button>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-blue-500">
              Today's Leads
            </h3>
            <p className="text-4xl font-bold text-white">45</p>
            <p className="text-sm text-gray-400">
              <span className="text-green-400">+12%</span> from yesterday
            </p>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-blue-500">
              AI Agent Status
            </h3>
            <p className="text-white">
              The AI Agent is currently online and running smoothly.
            </p>
            <span className="mt-2 inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-semibold uppercase text-white">
              Active
            </span>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-blue-500">
              Content Generated
            </h3>
            <p className="text-4xl font-bold text-white">21</p>
            <p className="text-sm text-gray-400">
              <span className="text-orange-400">5 new articles</span> this week
            </p>
          </div>
        </section>

        <div className="mt-6 flex-1 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Activity Overview
          </h3>
          <p className="text-gray-400">
            This area will display a detailed chart of your recent activity, lead
            conversion rates, and other key metrics.
          </p>
        </div>
      </main>
    </div>
  );
}
