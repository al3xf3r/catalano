"use client";

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/lib/i18n";

interface Props { t: Dict; }

export default function Casati({ t }: Props) {
  const textRef = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTextVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="casati">

      {/* Full-width image — protagonist */}
      <div style={{ overflow: "hidden", maxHeight: "85vh" }}>
        <img
          src="/casatilight.webp"
          alt="Gioielleria Casati"
          style={{
            width: "100%",
            height: "85vh",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />
      </div>

      {/* Text below image — minimal, dark, on scroll */}
      <div
        ref={textRef}
        style={{
          padding: "3.5rem 5rem 4.5rem",
          background: "#f5f0e8",
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.75s ease, transform 0.75s ease",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>{t.casati.eyebrow}</p>
        <div style={{ width: "36px", height: "1px", background: "var(--gold)", marginBottom: "1.25rem" }} />
        <h2 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
          fontWeight: 400, lineHeight: 1.1,
          letterSpacing: "0.03em",
          color: "var(--charcoal)",
          marginBottom: "1rem",
        }}>
          {t.casati.title}
        </h2>
        <p style={{
          fontFamily: "var(--font-jost)",
          fontSize: "1rem", fontWeight: 300,
          lineHeight: 1.75, letterSpacing: "0.02em",
          color: "var(--charcoal-mid)",
          maxWidth: "480px",
        }}>
          {t.casati.text}
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #casati > div:first-child { max-height: 65vw !important; }
          #casati > div:first-child img { height: 65vw !important; }
          #casati > div:last-child { padding: 2.5rem 1.75rem 3.5rem !important; }
        }
      `}</style>
    </section>
  );
}