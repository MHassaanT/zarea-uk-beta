"use client";

import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { useRouter } from "next/navigation";

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
        router.push("/login"); // redirect if not logged in
      }
    };

    fetchBusinessName();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <h2 className="text-xl font-bold mb-6">ZareaAI</h2>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Leads</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">AI Agent</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Content Generation</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Integrations</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {businessName}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Dashboard content will appear here.</p>
        </div>
      </main>
    </div>
  );
}
