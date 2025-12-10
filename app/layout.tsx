import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unigrid Solutions - Automatizace a zabezpečení",
  description: "Programování PLC, chytré řízení, telemetrie, MaR, EZS Jablotron a kamerové systémy",
  keywords: ["PLC", "automatizace", "telemetrie", "MaR", "EZS", "Jablotron", "kamerové systémy"],
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
    <html lang="cs">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
