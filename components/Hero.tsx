"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Dict, Lang } from "@/lib/i18n";

interface HeroProps { t: Dict; lang: Lang; }

export default function Hero({ t, lang }: HeroProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const isIT = lang === "it";

  // Load image via JS — handles browser cache correctly
  useEffect(() => {
    // Fixed delay — animazione parte sempre dopo 500ms indipendentemente dalla cache
    const timer = setTimeout(() => setImgLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Reveal text on scroll
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTextVisible(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" style={{ position: "relative" }}>
      <style>{`
        .hero-img-wrap {
          position: relative;
          height: 100svh;
          min-height: 600px;
          overflow: hidden;
        }
        .hero-img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center center;
          display: block;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 1.2s cubic-bezier(0.22,1,0.36,1),
                      transform 1.6s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        @media (max-width: 640px) {
          .hero-img { object-position: right center; }
        }
        .hero-img.loaded {
          opacity: 1;
          transform: scale(1);
        }
        .hero-text-block {
          padding: 4rem 5rem 5rem;
          background: #f5f0e8;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
        }
        .hero-cta-col {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          flex-shrink: 0;
        }
        .hero-btn-gold {
          display: inline-flex; align-items: center; gap: 0.625rem;
          padding: 1rem 2rem;
          background: var(--gold); color: #fff;
          font-family: var(--font-jost);
          font-size: 0.6875rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none; border: none; cursor: pointer;
          white-space: nowrap;
          transition: background 0.25s ease;
        }
        .hero-btn-gold:hover { background: var(--gold-champagne); }
        .hero-btn-outline {
          display: inline-flex; align-items: center; gap: 0.625rem;
          padding: 1rem 2rem;
          background: transparent; color: var(--charcoal);
          font-family: var(--font-jost);
          font-size: 0.6875rem; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none;
          border: 1px solid rgba(28,26,23,0.35);
          white-space: nowrap;
          transition: border-color 0.25s, color 0.25s;
        }
        .hero-btn-outline:hover { border-color: var(--gold); color: var(--gold); }

        @media (max-width: 768px) {
          .hero-text-block {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 3rem 1.75rem 4rem !important;
          }
          .hero-cta-col { flex-direction: row; flex-wrap: wrap; }
        }
      `}</style>

      {/* Full-screen image with zoom-in reveal */}
      <div className="hero-img-wrap">
        <img
          src="/herolight.webp"
          alt="Gioielleria Catalano"
          className={`hero-img${imgLoaded ? " loaded" : ""}`}
        />
      </div>

      {/* Text + CTAs below image — appears on scroll */}
      <div
        ref={textRef}
        className="hero-text-block"
        style={{
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <h1 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(2.25rem, 4vw, 4rem)",
          fontWeight: 400, lineHeight: 1.1, letterSpacing: "0.01em",
          color: "var(--charcoal)",
        }}>
          {isIT
            ? <>L&apos;eleganza che accompagna ogni{" "}<em style={{ fontStyle: "italic", color: "var(--gold)" }}>momento speciale.</em></>
            : <>Elegance for every{" "}<em style={{ fontStyle: "italic", color: "var(--gold)" }}>special moment.</em></>
          }
        </h1>

        <div className="hero-cta-col">
          <button onClick={() => scrollTo("gioielleria")} className="hero-btn-gold">
            <ArrowRight size={14} />
            {t.hero.cta1}
          </button>
          <a href="https://wa.me/393245574398" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "0.625rem",
            padding: "1rem 2rem",
            background: "#fff", color: "var(--gold)",
            fontFamily: "var(--font-jost)",
            fontSize: "0.6875rem", fontWeight: 400,
            letterSpacing: "0.2em", textTransform: "uppercase",
            textDecoration: "none", border: "none",
            whiteSpace: "nowrap",
            transition: "background 0.25s ease, color 0.25s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--ivory)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}
          >
            <WhatsAppIcon size={15} />
            {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
