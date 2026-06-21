"use client";

import { useEffect, useRef } from "react";
import { MapPin, Phone, Clock, Instagram, Facebook, ExternalLink, MessageCircle } from "lucide-react";
import type { Dict } from "@/lib/i18n";

interface Props { t: Dict; }

export default function VisitaInNegozio({ t }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="visita" style={{ padding:"8rem 2rem", background:"#ffffff" }}>
      <style>{`
        .visita-grid { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; max-width:1100px; margin:0 auto; }
        @media (max-width:768px) { .visita-grid { grid-template-columns:1fr; gap:3rem; } }
        .visita-row { display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.5rem; }
        .v-icon { color:var(--gold); flex-shrink:0; margin-top:2px; }
        .v-text { font-family:var(--font-jost); font-size:1rem; font-weight:300; line-height:1.7; color:var(--charcoal); letter-spacing:0.02em; }
        .v-link { color:var(--gold); text-decoration:none; transition:opacity 0.2s; }
        .v-link:hover { opacity:0.75; }
        .visita-map-wrap { position:relative; }
        .visita-map-img { width:100%; aspect-ratio:1/1; object-fit:cover; display:block; border:1px solid rgba(184,144,42,0.2); transition: transform 0.5s ease, filter 0.4s ease; }
        .visita-map-wrap:hover .visita-map-img { transform: scale(1.02); filter: brightness(0.92); }
        .visita-map-badge {
          position:absolute; bottom:1rem; left:1rem;
          background:var(--gold); color:#fff;
          font-family:var(--font-jost); font-size:0.625rem; font-weight:400;
          letter-spacing:0.2em; text-transform:uppercase;
          padding:0.5rem 1rem; display:flex; align-items:center; gap:0.4rem;
          pointer-events:none;
          transition: background 0.25s ease;
        }
        .visita-map-wrap:hover .visita-map-badge { background: var(--gold-champagne); }
        /* Subtle gold shimmer on hover */
        .visita-map-wrap::after {
          content: '';
          position: absolute; inset: 0;
          border: 2px solid rgba(184,144,42,0);
          transition: border-color 0.35s ease;
          pointer-events: none;
        }
        .visita-map-wrap:hover::after { border-color: rgba(184,144,42,0.4); }
      `}</style>

      <div ref={ref} className="visita-grid reveal">
        <div>
          <p className="eyebrow" style={{ marginBottom:"1.25rem" }}>{t.visita.eyebrow}</p>
          <div className="gold-line" style={{ margin:"0 0 2rem 0" }} />
          <h2 className="section-title" style={{ marginBottom:"2.5rem" }}>{t.visita.title}</h2>

          <div className="visita-row">
            <MapPin size={17} strokeWidth={1.5} className="v-icon" />
            <p className="v-text">{t.visita.address}</p>
          </div>
          <div className="visita-row">
            <Phone size={17} strokeWidth={1.5} className="v-icon" />
            <a href="tel:+393245574398" className="v-text" style={{ textDecoration:"none" }}>0942 981940</a>
          </div>
          <div className="visita-row">
            <Clock size={17} strokeWidth={1.5} className="v-icon" />
            <p className="v-text">{t.visita.hours}</p>
          </div>
          <div className="visita-row">
            <Instagram size={17} strokeWidth={1.5} className="v-icon" />
            <a href="https://www.instagram.com/catalano_gioielli/" target="_blank" rel="noopener noreferrer" className="v-text v-link">@catalano_gioielli</a>
          </div>
          <div className="visita-row">
            <Facebook size={17} strokeWidth={1.5} className="v-icon" />
            <a href="https://www.facebook.com/catalanogioielli/" target="_blank" rel="noopener noreferrer" className="v-text v-link">catalanogioielli</a>
          </div>

          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginTop:"2.5rem" }}>
            <a href="https://maps.app.goo.gl/pYWRNxE2EMwmjgt29" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={13} /> {t.visita.cta1}
            </a>
            <a href="https://wa.me/393245574398" target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              <MessageCircle size={13} /> {t.visita.cta2}
            </a>
          </div>
        </div>

        <div className="visita-map-wrap">
          <a href="https://maps.app.goo.gl/pYWRNxE2EMwmjgt29" target="_blank" rel="noopener noreferrer">
            <img src="/mappa.webp" alt="Mappa Gioielleria Catalano" className="visita-map-img" />
            <div className="visita-map-badge"><ExternalLink size={10} /> Google Maps</div>
          </a>
        </div>
      </div>
    </section>
  );
}