"use client";

import { useRef, useEffect } from "react";
import type { Dict } from "@/lib/i18n";

interface Props { t: Dict; }

const brands = [
  { logo: "/brands/salvini.png" },
  { logo: "/brands/bliss.png" },
  { logo: "/brands/comete.png" },
  { logo: "/brands/morellato.png" },
  { logo: "/brands/brosway.png" },
  { logo: "/brands/barbieri.png" },
  { logo: "/brands/marlu.png" },
  { logo: "/brands/camurria.png" },
  { logo: "/brands/unoaerre.png" },
  { logo: "/brands/carlacoral.png" },
  { logo: "/brands/dodomariani.png" },
  { logo: "/brands/cluse.png" },
  { logo: "/brands/porschedesign.png" },
];

const duplicated = [...brands, ...brands];

export default function Brands({ t }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused"; };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

  return (
    <section id="brand" ref={sectionRef as React.RefObject<HTMLElement>} className="reveal"
      style={{ padding:"7rem 0", background:"#ede7d9", overflow:"hidden" }}>
      <style>{`
        @keyframes scrollBrands {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brands-track {
          display:flex; align-items:center; gap:1.75rem;
          animation: scrollBrands 45s linear infinite;
          width:max-content; padding:0.5rem 0;
        }
        .brand-card {
          flex-shrink:0; width:190px; height:84px;
          display:flex; align-items:center; justify-content:center;
          border:1px solid rgba(184,144,42,0.18);
          padding:0.625rem 1rem;
          background:#f5f0e8;
          transition: box-shadow 0.3s, border-color 0.3s;
          cursor:default;
        }
        .brand-card:hover {
          box-shadow:0 4px 20px rgba(184,144,42,0.15);
          border-color:rgba(184,144,42,0.45);
        }
        .brand-logo {
          width: auto;
          height: 282px;
          max-width: 135px;
          object-fit: contain;
          filter:brightness(0); opacity:0.6;
          transition:opacity 0.3s, filter 0.3s;
        }
        .brand-card:hover .brand-logo {
          filter:brightness(0) sepia(1) saturate(4) hue-rotate(3deg);
          opacity:1;
        }
      `}</style>

      <div style={{ textAlign:"center", padding:"0 2rem", marginBottom:"4rem" }}>
        <p className="eyebrow" style={{ marginBottom:"1.25rem" }}>{t.brands.eyebrow}</p>
        <div className="gold-line" style={{ marginBottom:"1.5rem" }} />
        <h2 className="section-title">{t.brands.title}</h2>
        <p className="body-luxury" style={{ marginTop:"0.875rem" }}>{t.brands.subtitle}</p>
      </div>

      <div style={{ overflow:"hidden" }} onMouseEnter={pause} onMouseLeave={resume}>
        <div ref={trackRef} className="brands-track">
          {duplicated.map((b, i) => (
            <div key={i} className="brand-card">
              <img src={b.logo} alt="" className="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}