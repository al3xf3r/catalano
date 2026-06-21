import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gioielleria Catalano | Gioielli e Orologi a Francavilla di Sicilia",
  description: "Gioielleria Catalano a Francavilla di Sicilia. Gioielli, orologi, brand prestigiosi e la linea proprietaria Gioielleria Casati.",
  openGraph: {
    title: "Gioielleria Catalano | Gioielli e Orologi a Francavilla di Sicilia",
    description: "Gioielleria Catalano a Francavilla di Sicilia. Gioielli, orologi, brand prestigiosi e la linea proprietaria Gioielleria Casati.",
    type: "website",
    locale: "it_IT",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}