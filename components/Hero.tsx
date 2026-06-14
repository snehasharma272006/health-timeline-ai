"use client";

import Link from "next/link";

const stats = [
  { num: "10k+", label: "RECORDS PROCESSED" },
  { num: "98%",  label: "ACCURACY RATE" },
  { num: "3s",   label: "AVG ANALYSIS TIME" },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[88vh] text-center px-6 pt-16 pb-8">

      <div className="hero-badge fade-up">
        <span className="badge-dot" />
        AI-POWERED HEALTH INTELLIGENCE
      </div>

      <div
        className="glass fade-up-1 w-full max-w-3xl"
        style={{ borderRadius: "28px", padding: "3.5rem 4rem" }}
      >
        <h1
          className="text-glow font-extrabold tracking-[0.12em] leading-none"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
          }}
        >
          PULSE AI
        </h1>

        <p
          className="mt-5 leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            color: "rgba(248,250,252,0.48)",
          }}
        >
          Transforming medical records into{" "}
          <span style={{ color: "rgba(125,211,252,0.75)" }}>
            living health timelines
          </span>
          <br />
          with the power of artificial intelligence.
        </p>

        <div className="flex gap-4 justify-center mt-10">
          <Link href="/upload" className="btn-primary cursor-pointer">
            ↑ Upload Report
          </Link>
          <button className="btn-secondary">View Demo →</button>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}