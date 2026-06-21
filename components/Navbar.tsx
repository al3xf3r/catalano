"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import type { Dict, Lang } from "@/lib/i18n";

interface NavbarProps { t: Dict; lang: Lang; }

export default function Navbar({ t, lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(true); // always solid = always readable
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

  const otherLang = lang === "it" ? "en" : "it";

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
          /* Always solid and readable */
          background: rgba(245,240,232,0.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(184,144,42,0.12);
          transition: box-shadow 0.3s ease;
        }
        .nav-root.scrolled {
          box-shadow: 0 2px 16px rgba(28,26,23,0.06);
        }
        .nav-inner {
          width: 100%; max-width: 1400px; margin: 0 auto;
          padding: 0 2.5rem;
          display: flex; align-items: center; justify-content: space-between;
        }
        /* Links always dark */
        .nav-link {
          font-family: var(--font-jost);
          font-size: 0.6875rem; font-weight: 400;
          letter-spacing: 0.18em; text-transform: uppercase;
          text-decoration: none; color: var(--charcoal);
          opacity: 0.6; transition: opacity 0.2s, color 0.2s;
        }
        .nav-link:hover { opacity: 1; color: var(--gold); }
        .nav-lang {
          font-family: var(--font-jost); font-size: 0.6875rem; font-weight: 400;
          letter-spacing: 0.18em; text-transform: uppercase;
          text-decoration: none; color: var(--gold);
        }
        .nav-ham {
          background: none; border: none; cursor: pointer;
          color: var(--charcoal); display: flex; align-items: center; padding: 6px;
        }
        .nav-wa {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.625rem 1.375rem;
          background: var(--gold); color: #fff;
          font-family: var(--font-jost); font-size: 0.625rem; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none; transition: background 0.2s; white-space: nowrap;
        }
        .nav-wa:hover { background: var(--gold-champagne); }

        /* Mobile overlay */
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
          <Link href={`/${lang}`} style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <img src="/logo.webp" alt="Gioielleria Catalano" style={{ height: "34px", width: "auto" }} />
          </Link>

          <div className="hidden lg:flex" style={{ gap: "1.75rem", alignItems: "center" }}>
            {navLinks.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexShrink: 0 }}>
            <Link href={`/${otherLang}`} className="nav-lang">{otherLang.toUpperCase()}</Link>
            <a href="https://wa.me/393245574398" target="_blank" rel="noopener noreferrer" className="nav-wa hidden lg:inline-flex">
              <MessageCircle size={13} /> WhatsApp
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
          className="btn-primary" style={{ fontSize: "0.6875rem", padding: "0.875rem 2rem" }}
          onClick={() => setMenuOpen(false)}>
          <MessageCircle size={13} /> WhatsApp
        </a>
      </div>
    </>
  );
}