"use client";

import { useEffect, useRef } from "react";
import { Gift, Wrench, Sparkles, Package, ClipboardList, HeartHandshake } from "lucide-react";
import type { Dict } from "@/lib/i18n";

interface Props { t: Dict; }
const icons = [Gift, Wrench, Sparkles, Package, ClipboardList, HeartHandshake];

export default function Servizi({ t }: Props) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Stagger: ogni card appare 150ms dopo la precedente
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 150);
            obs.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    });
  }, []);

  return (
    <section id="servizi" style={{ padding:"8rem 2rem", background:"#f5f0e8" }}>
      <style>{`
        .servizi-grid {
          display:grid; grid-template-columns:repeat(3,1fr);
          border:1px solid rgba(184,144,42,0.18);
          max-width:1100px; margin:0 auto;
        }
        @media (max-width:768px) { .servizi-grid { grid-template-columns:1fr 1fr; } }
        @media (max-width:480px) { .servizi-grid { grid-template-columns:1fr; } }
        .servizi-item {
          padding:2.5rem 2rem;
          border-right:1px solid rgba(184,144,42,0.18);
          border-bottom:1px solid rgba(184,144,42,0.18);
          transition: background 0.3s ease;
          /* Start hidden */
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease, background 0.3s ease;
        }
        .servizi-item:hover { background:rgba(184,144,42,0.04); }
        .serv-title {
          font-family:var(--font-cormorant);
          font-size:1.35rem; font-weight:400;
          letter-spacing:0.02em; color:var(--charcoal);
          margin-bottom:0.625rem;
        }
        .serv-desc {
          font-family:var(--font-jost);
          font-size:0.9375rem; font-weight:300;
          line-height:1.75; letter-spacing:0.02em;
          color:var(--charcoal-mid);
        }
      `}</style>

      <div style={{ textAlign:"center", marginBottom:"5rem" }}>
        <p className="eyebrow" style={{ marginBottom:"1.25rem" }}>{t.servizi.eyebrow}</p>
        <div className="gold-line" style={{ marginBottom:"1.5rem" }} />
        <h2 className="section-title">{t.servizi.title}</h2>
      </div>

      <div className="servizi-grid">
        {t.servizi.items.map((item, i) => {
          const Icon = icons[i] || Gift;
          return (
            <div
              key={i}
              ref={el => { refs.current[i] = el; }}
              className="servizi-item"
            >
              <div style={{ color:"var(--gold)", marginBottom:"1.25rem" }}>
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <p className="serv-title">{item.title}</p>
              <p className="serv-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}