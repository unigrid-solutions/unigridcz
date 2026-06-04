import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unigrid Solutions - Automatizace, FVE a zabezpečení",
  description:
    "Průmyslová automatizace, chytré řízení FVE, zabezpečení objektů. Vodohospodářství, MaR, telemetrie, PLC, EZS Jablotron.",
  keywords: [
    "PLC",
    "automatizace",
    "telemetrie",
    "MaR",
    "EZS",
    "Jablotron",
    "fotovoltaika",
    "vodohospodářství",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-body text-neutral-700 bg-white">
        {children}
      </body>
    </html>
  );
}
