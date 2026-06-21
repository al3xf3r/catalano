"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import type { Dict } from "@/lib/i18n";

interface Props { t: Dict; }

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
        <a href="https://wa.me/393245574398" target="_blank" rel="noopener noreferrer" className="btn-primary">
          <MessageCircle size={14} />
          {t.contatti.whatsapp}
        </a>
      </div>
    </section>
  );
}