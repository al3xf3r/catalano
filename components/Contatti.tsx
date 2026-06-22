"use client";

import { useEffect, useRef } from "react";
import type { Dict } from "@/lib/i18n";

interface Props { t: Dict; }

import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function Contatti({ t }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contatti" style={{ padding:"8rem 2rem", background:"#f5f0e8" }}>
      <div ref={ref} className="reveal" style={{ maxWidth:"520px", margin:"0 auto", textAlign:"center" }}>
        <p className="eyebrow" style={{ marginBottom:"1.25rem" }}>{t.contatti.eyebrow}</p>
        <div className="gold-line" style={{ marginBottom:"1.5rem" }} />
        <h2 className="section-title" style={{ marginBottom:"1.5rem" }}>{t.contatti.title}</h2>
        <p className="body-luxury" style={{ marginBottom:"2.5rem" }}>{t.contatti.whatsappDesc}</p>
        <a
          href="https://wa.me/393245574398"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            padding: "1rem 2.25rem",
            background: "var(--gold)", color: "#fff",
            fontFamily: "var(--font-jost)",
            fontSize: "0.6875rem", fontWeight: 400,
            letterSpacing: "0.22em", textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.25s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-champagne)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}
        >
          <WhatsAppIcon size={16} />
          {t.contatti.whatsapp}
        </a>
      </div>
    </section>
  );
}
