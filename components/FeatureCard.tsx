interface Props {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: Props) {
  return (
    <div
      className="glass card-hover cursor-default"
      style={{ borderRadius: "20px", padding: "1.8rem" }}
    >
      {/* Icon Box */}
      <div
        className="flex items-center justify-center text-xl mb-5"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: "rgba(56,189,248,0.08)",
          border: "1px solid rgba(56,189,248,0.18)",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="font-semibold mb-2"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "1rem",
          color: "#7dd3fc",
          letterSpacing: "0.02em",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.87rem",
          color: "rgba(248,250,252,0.42)",
          lineHeight: "1.65",
        }}
      >
        {description}
      </p>

      {/* Arrow */}
      <span className="card-arrow">Explore →</span>
    </div>
  );
}