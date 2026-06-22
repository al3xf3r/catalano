"use client";

import { useEffect, useRef } from "react";
import type { Dict } from "@/lib/i18n";

interface Props { t: Dict; }

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.885a.5.5 0 0 0 .638.608l6.223-1.95A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.51-5.158-1.399l-.36-.214-3.742 1.173 1.05-3.644-.234-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

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
            background: "#25D366", color: "#fff",
            fontFamily: "var(--font-jost)",
            fontSize: "0.6875rem", fontWeight: 400,
            letterSpacing: "0.22em", textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.25s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#1ebe5d")}
          onMouseLeave={e => (e.currentTarget.style.background = "#25D366")}
        >
          <WhatsAppIcon />
          {t.contatti.whatsapp}
        </a>
      </div>
    </section>
  );
}
