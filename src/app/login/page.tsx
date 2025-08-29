"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // ✅ redirect after login
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-sm rounded-lg border border-gray-800 bg-gray-900 p-8 shadow-2xl">
        <div className="flex flex-col items-center">
          <FaRobot className="mb-4 text-5xl text-blue-500" />
          <h1 className="mb-2 text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mb-6 text-center text-gray-400">
            Sign in to access your ZareaAI dashboard.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-sm text-red-500">{error}</p>
        )}

        <div className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-500 underline hover:text-blue-400"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}