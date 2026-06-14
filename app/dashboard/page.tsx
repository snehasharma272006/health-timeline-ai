"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Report = {
  id: string;
  file_name: string;
  created_at: string;
};

export default function DashboardPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("reports")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (data) setReports(data);
      setLoading(false);
    };

    fetchReports();
  }, []);

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHrs = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHrs / 24);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHrs < 24) return `${diffHrs} hr ago`;
    if (diffDays === 1) return "Yesterday";
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  };

  const metrics = [
    {
      label: "Reports Uploaded",
      value: loading ? "..." : String(reports.length),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
      accent: "rgba(56,189,248,0.08)",
      accentStroke: "rgba(56,189,248,0.18)",
      accentText: "#7dd3fc",
    },
    {
      label: "Medical Events",
      value: "—",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      accent: "rgba(167,139,250,0.12)",
      accentStroke: "rgba(167,139,250,0.2)",
      accentText: "#c4b5fd",
    },
    {
      label: "Conditions Tracked",
      value: "—",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.8">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      accent: "rgba(52,211,153,0.12)",
      accentStroke: "rgba(52,211,153,0.2)",
      accentText: "#6ee7b7",
    },
    {
      label: "Insights Generated",
      value: "—",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.8">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      accent: "rgba(251,191,36,0.12)",
      accentStroke: "rgba(251,191,36,0.2)",
      accentText: "#fcd34d",
    },
  ];

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-10 py-12 w-full max-w-7xl mx-auto">
      <div className="mb-10">
        <p className="text-slate-500 text-sm mb-1 font-light tracking-wide">
          {today}
        </p>
        <h1
          className="text-3xl font-bold text-white"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}
        >
          Welcome back
        </h1>
        <p className="text-slate-400 mt-1 text-sm font-light">
          Here's what's happening with your health records.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10 w-full">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl p-5 flex flex-col justify-between gap-3 transition-all duration-200"
            style={{
              minHeight: "140px",
              background: m.accent,
              border: `1px solid ${m.accentStroke}`,
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              {m.icon}
            </div>
            <div>
              <p
                className="text-3xl font-bold"
                style={{ color: m.accentText, letterSpacing: "-0.02em" }}
              >
                {m.value}
              </p>
              <p className="text-sm text-slate-400 mt-1">{m.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">
        <h2 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4">
          Recent Activity
        </h2>
        <div
          className="rounded-2xl overflow-hidden w-full"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {loading ? (
            <p className="text-slate-600 text-sm px-5 py-4">Loading...</p>
          ) : reports.length === 0 ? (
            <p className="text-slate-600 text-sm px-5 py-4">No activity yet. Upload a report!</p>
          ) : (
            reports.slice(0, 5).map((report, i) => (
              <div
                key={report.id}
                className="flex items-center gap-4 px-5 py-4 hover:bg-sky-500/5 transition-colors"
                style={{
                  borderBottom:
                    i < Math.min(reports.length, 5) - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">Report Uploaded</p>
                  <p className="text-xs text-slate-500 mt-1 truncate">{report.file_name}</p>
                </div>
                <p className="text-xs text-slate-600 flex-shrink-0">{formatTime(report.created_at)}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}