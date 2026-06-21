"use client";

import { useEffect, useRef } from "react";
import type { Dict } from "@/lib/i18n";

interface Props { t: Dict; }

export default function LaGioielleria({ t }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gioielleria" style={{ overflow: "hidden" }}>
      <style>{`
        .gio-wrap { display:grid; grid-template-columns:1fr 1fr; min-height:70vh; }
        @media (max-width:768px) { .gio-wrap { grid-template-columns:1fr; min-height:auto; } }
      `}</style>
      <div className="gio-wrap">
        <div style={{ position: "relative", minHeight: "480px" }}>
          <img
            src="/gioiellerialight.webp"
            alt="Interno Gioielleria Catalano"
            style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"left center" }}
          />
        </div>
        <div
          ref={ref}
          className="reveal"
          style={{
            display:"flex", flexDirection:"column", justifyContent:"center",
            padding:"6rem 5rem",
            background:"#f5f0e8",
          }}
        >
          <p className="eyebrow" style={{ marginBottom:"1.25rem" }}>{t.gioielleria.eyebrow}</p>
          <div className="gold-line" style={{ margin:"0 0 2rem 0" }} />
          <h2 className="section-title" style={{ marginBottom:"1.75rem" }}>{t.gioielleria.title}</h2>
          <p className="body-luxury">{t.gioielleria.text}</p>
        </div>
      </div>
    </section>
  );
}