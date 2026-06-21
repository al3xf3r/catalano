import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import type { Dict, Lang } from "@/lib/i18n";

interface Props { t: Dict; lang: Lang; }

const year = new Date().getFullYear();

export default function Footer({ t, lang }: Props) {
  const navLinks = [
    { href:"#gioielleria", label:t.nav.gioielleria },
    { href:"#brand",       label:t.nav.brand },
    { href:"#casati",      label:t.nav.casati },
    { href:"#collezioni",  label:t.nav.collezioni },
    { href:"#servizi",     label:t.nav.servizi },
    { href:"#contatti",    label:t.nav.contatti },
  ];

  return (
    <footer style={{ background:"#ffffff", color:"var(--charcoal)", padding:"5rem 2rem 0" }}>
      <style>{`
        .ft-inner { max-width:1100px; margin:0 auto; }
        .ft-grid {
          display:grid; grid-template-columns:2fr 1fr 1fr 1fr;
          gap:4rem; padding-bottom:4rem;
          border-bottom:1px solid rgba(184,144,42,0.25);
        }
        @media (max-width:900px) { .ft-grid { grid-template-columns:1fr 1fr; gap:3rem; } }
        @media (max-width:560px) { .ft-grid { grid-template-columns:1fr; gap:2.5rem; } }

        .ft-heading {
          font-family:var(--font-jost); font-size:0.6875rem; font-weight:500;
          letter-spacing:0.28em; text-transform:uppercase;
          color:var(--gold); margin-bottom:1.5rem;
        }
        .ft-link {
          display:block;
          font-family:var(--font-jost); font-size:0.9375rem; font-weight:300;
          letter-spacing:0.02em; line-height:1.5;
          text-decoration:none; color:var(--charcoal-mid);
          margin-bottom:0.75rem;
          transition:color 0.2s;
        }
        .ft-link:hover { color:var(--gold); }

        .ft-bottom {
          display:flex; align-items:center; justify-content:space-between;
          flex-wrap:wrap; gap:1rem; padding:1.75rem 0;
        }
        .ft-copy {
          font-family:var(--font-jost); font-size:0.875rem; font-weight:300;
          letter-spacing:0.03em; color:var(--charcoal-mid); opacity:0.7;
        }
        /* Hash42 Labs — prominente su sfondo chiaro */
        .ft-made {
          font-family:var(--font-jost); font-size:0.875rem; font-weight:400;
          letter-spacing:0.04em; color:var(--charcoal-mid);
        }
        .ft-made a {
          color:var(--gold);
          text-decoration:none; font-weight:500;
          border-bottom:1px solid rgba(184,144,42,0.5);
          padding-bottom:1px;
          transition:color 0.2s, border-color 0.2s;
        }
        .ft-made a:hover { color:var(--gold-champagne); border-color:var(--gold-champagne); }
      `}</style>

      <div className="ft-inner">
        <div className="ft-grid">
          {/* Brand */}
          <div>
            <img src="/logo.webp" alt="Gioielleria Catalano" style={{ height:"40px", width:"auto", marginBottom:"1.5rem" }} />
            <p style={{ fontFamily:"var(--font-cormorant)", fontSize:"1.0625rem", fontWeight:400, letterSpacing:"0.04em", color:"var(--charcoal-mid)", lineHeight:1.6 }}>
              Francavilla di Sicilia
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="ft-heading">{t.footer.links}</p>
            {navLinks.map(l => <a key={l.href} href={l.href} className="ft-link">{l.label}</a>)}
          </div>

          {/* Contacts */}
          <div>
            <p className="ft-heading">{t.footer.contacts}</p>
            <a href="tel:+393245574398" className="ft-link">0942 981940</a>
            <p className="ft-link" style={{ cursor:"default" }}>
              Via Regina Margherita, 34<br />98034 Francavilla di Sicilia (ME)
            </p>
          </div>

          {/* Social + lang */}
          <div>
            <p className="ft-heading">{t.footer.social}</p>
            <a href="https://www.instagram.com/catalano_gioielli/" target="_blank" rel="noopener noreferrer" className="ft-link" style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
              <Instagram size={13} strokeWidth={1.5} /> Instagram
            </a>
            <a href="https://www.facebook.com/catalanogioielli/" target="_blank" rel="noopener noreferrer" className="ft-link" style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
              <Facebook size={13} strokeWidth={1.5} /> Facebook
            </a>
            <a href="https://wa.me/393245574398" target="_blank" rel="noopener noreferrer" className="ft-link" style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
              <MessageCircle size={13} strokeWidth={1.5} /> WhatsApp
            </a>
            <div style={{ marginTop:"2rem" }}>
              <p className="ft-heading">Lingua</p>
              <Link href="/it" className="ft-link">Italiano</Link>
              <Link href="/en" className="ft-link">English</Link>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <p className="ft-copy">&copy; {year} Gioielleria Catalano. {t.footer.rights}</p>
          <p className="ft-made">
            {t.footer.made}{" "}
            <a href={lang === "en" ? "https://hash42.xyz" : "https://hash42.xyz/it"} target="_blank" rel="noopener noreferrer">
              Hash42 Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}