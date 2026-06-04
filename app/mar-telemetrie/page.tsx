import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MaR a Telemetrie | Unigrid Solutions",
  description:
    "Měření, regulace a vzdálený monitoring technologických systémů. Sběr dat, vizualizace a automatické řízení procesů.",
  keywords: [
    "MaR",
    "měření a regulace",
    "telemetrie",
    "SCADA",
    "monitoring",
    "vzdálený dohled",
    "automatizace",
    "průmyslové měření",
    "IoT",
  ],
};

export default function MarTelemetrie() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 md:pt-24 noise-bg">
          <div className="dot-grid">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-primary-600"></div>
                  <span className="font-mono text-xs tracking-widest uppercase text-primary-600">
                    Průmyslová automatizace
                  </span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                  <span className="text-primary-600">MaR a Telemetrie</span> pro
                  efektivní řízení
                </h1>
                <p className="text-lg md:text-xl text-neutral-500 mb-8 leading-relaxed">
                  Měření, regulace a vzdálený monitoring technologických systémů.
                  Získejte přehled o svých procesech kdykoliv a odkudkoliv.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-colors font-heading font-semibold text-center"
                  >
                    Poptat řešení
                  </a>
                  <a
                    href="#moznosti"
                    className="inline-flex items-center justify-center border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-colors font-heading font-semibold text-center"
                  >
                    Co nabízíme
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is MaR Section */}
        <section className="py-20 md:py-32 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                  Co je MaR a telemetrie?
                </h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    <strong className="text-neutral-900">MaR (Měření a regulace)</strong>{" "}
                    je obor, který se zabývá automatickým řízením technologických
                    procesů na základě měřených veličin – teploty, tlaku, průtoku,
                    vlhkosti a dalších.
                  </p>
                  <p>
                    <strong className="text-neutral-900">Telemetrie</strong> umožňuje
                    vzdálený sběr dat a monitoring systémů přes internet. Díky ní
                    máte přehled o stavu technologií bez nutnosti fyzické přítomnosti.
                  </p>
                  <p>
                    Kombinace obou přístupů vám dává nástroje pro efektivní řízení,
                    úsporu energií a včasnou detekci problémů.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-neutral-900 mb-2">Měření</h3>
                  <p className="text-sm text-neutral-600">
                    Přesné snímání fyzikálních veličin
                  </p>
                </div>

                <div className="bg-energy-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-energy-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-neutral-900 mb-2">Regulace</h3>
                  <p className="text-sm text-neutral-600">
                    Automatické udržování požadovaných hodnot
                  </p>
                </div>

                <div className="bg-energy-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-energy-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-neutral-900 mb-2">Telemetrie</h3>
                  <p className="text-sm text-neutral-600">
                    Vzdálený přenos dat a monitoring
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-neutral-900 mb-2">Vizualizace</h3>
                  <p className="text-sm text-neutral-600">
                    Přehledné zobrazení dat a alarmů
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="moznosti" className="py-20 md:py-32 bg-neutral-50 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Co nabízíme
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Komplexní řešení pro měření, regulaci a vzdálený monitoring vašich
                technologií.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Průmyslové měření */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Průmyslové měření
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Dodávka a instalace snímačů pro měření teploty, tlaku, průtoku,
                  hladiny, vlhkosti a dalších veličin.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Teplotní čidla (Pt100, termočlánky)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Tlakové snímače
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Průtokoměry a hladinoměry
                  </li>
                </ul>
              </div>

              {/* Regulace a řízení */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-energy-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-energy-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Regulace a řízení
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Návrh a realizace regulačních smyček pro automatické udržování
                  požadovaných parametrů procesu.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    PID regulátory
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Frekvenční měniče
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Regulační ventily a pohony
                  </li>
                </ul>
              </div>

              {/* SCADA a vizualizace */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  SCADA a vizualizace
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Vytváříme přehledné vizualizace technologických procesů s možností
                  vzdáleného přístupu a ovládání.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Webové rozhraní
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Grafy a trendy
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Alarmový systém
                  </li>
                </ul>
              </div>

              {/* Vzdálený monitoring */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-energy-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-energy-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Vzdálený monitoring
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Telemetrická řešení pro sledování zařízení na vzdálených
                  lokalitách bez trvalé obsluhy.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    LTE/NB-IoT komunikace
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Bateriové napájení
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SMS/email notifikace
                  </li>
                </ul>
              </div>

              {/* Průmyslová komunikace */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Průmyslová komunikace
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Propojení zařízení a sběr dat pomocí průmyslových sběrnic
                  i moderních IoT technologií.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Modbus RTU/TCP
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    RS-485
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ethernet/IP
                  </li>
                </ul>
              </div>

              {/* Energetický management */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-energy-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-energy-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Energetický management
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Měření a analýza spotřeby energií pro identifikaci úspor a
                  optimalizaci provozu.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Elektroměry a podružné měření
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Analýza spotřeby
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Reporty a statistiky
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 md:py-32 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Kde MaR a telemetrii využijete
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-neutral-900 mb-2">Vodohospodářství</h3>
                <p className="text-sm text-neutral-600">
                  ČOV, čerpací stanice, vodojemy, kanalizace
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-energy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-energy-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-neutral-900 mb-2">Energetika</h3>
                <p className="text-sm text-neutral-600">
                  Monitoring výroben, trafostanic a distribučních sítí
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-neutral-900 mb-2">Průmysl</h3>
                <p className="text-sm text-neutral-600">
                  Výrobní linky, technologické procesy, sklady
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-energy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-energy-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-neutral-900 mb-2">Budovy</h3>
                <p className="text-sm text-neutral-600">
                  Řízení vytápění, monitoring spotřeby energií
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-20 md:py-32 bg-neutral-900 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Získejte přehled o svých technologiích
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Kontaktujte nás pro konzultaci. Navrhneme řešení měření a
                monitoringu přesně podle vašich potřeb.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@unigrid.cz?subject=Poptávka - MaR a telemetrie"
                  className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors font-heading font-semibold text-center"
                >
                  info@unigrid.cz
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center border-2 border-neutral-600 text-neutral-300 px-8 py-4 rounded-full hover:border-neutral-400 hover:text-white transition-colors font-heading font-semibold text-center"
                >
                  Zpět na hlavní stránku
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
