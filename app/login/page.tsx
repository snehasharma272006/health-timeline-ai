"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({ email });
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      {sent ? (
        <p className="text-green-400">Check your email for the login link!</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Login</h1>
          <input
            className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 w-72 text-white"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-sky-500 hover:bg-sky-600 px-6 py-2 rounded-lg font-medium"
          >
            Send Magic Link
          </button>
        </>
      )}
    </main>
  );
}