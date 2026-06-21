"use client";

import { useEffect, useRef } from "react";
import type { Dict } from "@/lib/i18n";

interface Props { t: Dict; }

export default function Collezioni({ t }: Props) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setTimeout(() => el.classList.add("visible"), i * 60); },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    });
  }, []);

  return (
    <section id="collezioni" style={{ background: "#ffffff", padding: "7rem 0 6rem" }}>
      <style>{`
        /* Header */
        .col-header { padding: 0 4rem 3.5rem; text-align: center; }

        /* Ornament */
        .col-ornament { display:flex; align-items:center; justify-content:center; gap:0.75rem; margin: 0.75rem auto 0; }
        .col-orn-line { width:48px; height:1px; background: linear-gradient(to right, transparent, var(--gold)); }
        .col-orn-line.r { background: linear-gradient(to left, transparent, var(--gold)); }
        .col-orn-diamond { width:6px; height:6px; background:var(--gold); transform:rotate(45deg); }

        /* Scroll container */
        .col-scroll { overflow-x:auto; padding: 0 4rem 1rem; scrollbar-width:none; }
        .col-scroll::-webkit-scrollbar { display:none; }

        .col-row { display:flex; gap:1.25rem; width:max-content; }

        @media (min-width:1100px) {
          .col-scroll { overflow-x:visible; padding:0 4rem 1rem; }
          .col-row { width:100%; flex-wrap:nowrap; }
          .col-card { flex:1; min-width:0; }
        }
        @media (max-width:768px) {
          .col-header { padding: 0 1.5rem 2.5rem; }
          .col-scroll  { padding: 0 1.5rem 1rem; }
        }

        /* Card */
        .col-card {
          position:relative; width:185px; height:260px; flex-shrink:0;
          overflow:hidden; cursor:pointer;
          background:#ede7d9;
          border:1px solid rgba(184,144,42,0.12);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .col-card:hover {
          border-color: rgba(184,144,42,0.35);
          box-shadow: 0 6px 28px rgba(184,144,42,0.12);
        }

        .col-card img {
          position:absolute; inset:0; width:100%; height:100%;
          object-fit:cover; object-position:center;
          transition: transform 0.5s ease;
          filter: brightness(0.82);
        }
        .col-card:hover img { transform:scale(1.05); filter:brightness(0.92); }

        /* Label */
        .col-label {
          position:absolute; bottom:0; left:0; right:0;
          padding:1rem 1.125rem 0.875rem;
          background: linear-gradient(to top, rgba(28,26,23,0.78) 0%, transparent 100%);
        }
        .col-label-text {
          font-family: var(--font-jost);
          font-size:0.6875rem; font-weight:400;
          letter-spacing:0.22em; text-transform:uppercase;
          color:rgba(245,240,232,0.92);
          display:block;
        }
        @media (max-width:768px) { .col-card { width:155px; height:220px; } }
      `}</style>

      <div className="col-header">
        <p className="eyebrow">{t.collezioni.eyebrow}</p>
        <div className="col-ornament">
          <div className="col-orn-line" />
          <div className="col-orn-diamond" />
          <div className="col-orn-line r" />
        </div>
      </div>

      <div className="col-scroll">
        <div className="col-row">
          {t.collezioni.items.map((item, i) => (
            <div key={i} ref={el => { refs.current[i] = el; }} className="col-card reveal">
              <img src={`/${item.img}`} alt={item.name} loading="lazy" />
              <div className="col-label">
                <span className="col-label-text">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}