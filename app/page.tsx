import { dict } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CatalanoSignature from "@/components/CatalanoSignature";
import LaGioielleria from "@/components/LaGioielleria";
import Brands from "@/components/Brands";
import Casati from "@/components/Casati";
import Collezioni from "@/components/Collezioni";
import Servizi from "@/components/Servizi";
import VisitaInNegozio from "@/components/VisitaInNegozio";
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";

const t = dict["it"];
const lang = "it" as const;

export default function HomePage() {
  return (
    <main style={{ background: "#f5f0e8" }}>
      <Navbar t={t} lang={lang} />
      <Hero t={t} lang={lang} />
      <CatalanoSignature />
      <LaGioielleria t={t} />
      <Brands t={t} />
      <Casati t={t} />
      <Collezioni t={t} />
      <Servizi t={t} />
      <VisitaInNegozio t={t} />
      <Contatti t={t} />
      <Footer t={t} lang={lang} />
    </main>
  );
}