import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: "📅",
    title: "Medical Timeline",
    description:
      "Automatically organize years of health records into a single, coherent timeline — no manual sorting needed.",
  },
  {
    icon: "🧠",
    title: "AI Insights",
    description:
      "Identify trends, changes, and key medical events instantly. Let the AI surface what actually matters.",
  },
  {
    icon: "💬",
    title: "Health Chat",
    description:
      "Ask natural language questions about your records and get clear answers — not complex medical jargon.",
  },
];

export default function Home() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", position: "relative", zIndex: 10 }}>
      <Hero />

      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "4rem 2rem 7rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="section-eyebrow fade-up-2">WHAT WE OFFER</p>

        <h2
          className="fade-up-3"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#f8fafc",
            textAlign: "center",
            marginBottom: "0.75rem",
          }}
        >
          Core Features
        </h2>

        <p
          className="fade-up-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.92rem",
            color: "rgba(248,250,252,0.38)",
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          Everything you need to understand your health, at a glance.
        </p>

        <div
          className="fade-up-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.2rem",
            width: "100%",
          }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </main>
  );
}