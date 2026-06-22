"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import type { Dict, Lang } from "@/lib/i18n";

interface NavbarProps { t: Dict; lang: Lang; }

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.885a.5.5 0 0 0 .638.608l6.223-1.95A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.51-5.158-1.399l-.36-.214-3.742 1.173 1.05-3.644-.234-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function Navbar({ t, lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    setScrolled(window.scrollY > 5);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "#gioielleria", label: t.nav.gioielleria },
    { href: "#brand",       label: t.nav.brand },
    { href: "#casati",      label: t.nav.casati },
    { href: "#collezioni",  label: t.nav.collezioni },
    { href: "#servizi",     label: t.nav.servizi },
    { href: "#contatti",    label: t.nav.contatti },
  ];

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 68px; display: flex; align-items: center;
          background: rgba(245,240,232,0.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(184,144,42,0.12);
          transition: box-shadow 0.3s ease;
        }
        .nav-root.scrolled { box-shadow: 0 2px 16px rgba(28,26,23,0.06); }
        .nav-inner {
          width: 100%; max-width: 1400px; margin: 0 auto;
          padding: 0 2.5rem;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-link {
          font-family: var(--font-jost);
          font-size: 0.6875rem; font-weight: 400;
          letter-spacing: 0.18em; text-transform: uppercase;
          text-decoration: none; color: var(--charcoal);
          opacity: 0.6; transition: opacity 0.2s, color 0.2s;
        }
        .nav-link:hover { opacity: 1; color: var(--gold); }
        .nav-ham {
          background: none; border: none; cursor: pointer;
          color: var(--charcoal); display: flex; align-items: center; padding: 6px;
        }
        /* WhatsApp icon button — just the icon, no label */
        .nav-wa-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px;
          background: #25D366;
          color: #fff;
          border-radius: 50%;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .nav-wa-icon:hover { background: #1ebe5d; transform: scale(1.08); }

        /* Mobile WA button with text */
        .nav-wa-full {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          background: #25D366; color: #fff;
          font-family: var(--font-jost); font-size: 0.6875rem; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none; transition: background 0.2s;
        }
        .nav-wa-full:hover { background: #1ebe5d; }

        .mobile-menu {
          position: fixed; inset: 0; z-index: 99;
          background: rgba(245,240,232,0.98);
          backdrop-filter: blur(16px);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.25rem; padding: 5rem 2rem 3rem;
          overflow-y: auto;
          opacity: 0; pointer-events: none;
          transition: opacity 0.28s ease;
        }
        .mobile-menu.open { opacity: 1; pointer-events: all; }
        .mob-link {
          font-family: var(--font-cormorant);
          font-size: clamp(1.5rem, 4.5vh, 2rem);
          font-weight: 400; letter-spacing: 0.04em;
          text-decoration: none; color: var(--charcoal);
          padding: 0.45rem 0; display: block; text-align: center;
          transition: color 0.2s;
        }
        .mob-link:hover { color: var(--gold); }
        .mob-divider { width: 36px; height: 1px; background: rgba(184,144,42,0.3); margin: 1.25rem auto; }
      `}</style>

      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <img src="/logo.webp" alt="Gioielleria Catalano" style={{ height: "34px", width: "auto" }} />
          </a>

          <div className="hidden lg:flex" style={{ gap: "1.75rem", alignItems: "center" }}>
            {navLinks.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
            {/* Desktop: solo icona WA */}
            <a href="https://wa.me/393245574398" target="_blank" rel="noopener noreferrer"
              className="nav-wa-icon hidden lg:inline-flex" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <button className="nav-ham lg:hidden" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="mob-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <div className="mob-divider" />
        <a href="https://wa.me/393245574398" target="_blank" rel="noopener noreferrer"
          className="nav-wa-full" onClick={() => setMenuOpen(false)}>
          <WhatsAppIcon /> WhatsApp
        </a>
      </div>
    </>
  );
}
