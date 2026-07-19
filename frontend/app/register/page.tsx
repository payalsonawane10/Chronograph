"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 flex items-center justify-center px-6">

      <div className="w-full max-w-2xl bg-slate-900/70 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-10 shadow-[0_0_50px_rgba(34,211,238,0.25)]">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl shadow-lg">
            🧠
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-8">
          Join ChronoGraph AI Platform
        </p>

        <form className="space-y-5">

          <div>
            <label className="text-gray-300">Full Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-2 w-full rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-300">Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-2 w-full rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="text-gray-300">Password</label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="mt-2 w-full rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-300">Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="mt-2 w-full rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>

          </div>

          <div className="flex items-center gap-3 mt-2">
            <input type="checkbox" className="w-5 h-5 accent-cyan-500" />

            <p className="text-gray-400 text-sm">
              I agree to the Terms & Conditions
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-lg font-bold text-white hover:scale-[1.02] transition duration-300 shadow-lg"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-400 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}