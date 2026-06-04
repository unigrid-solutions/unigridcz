import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EZS a kamerové systémy | Unigrid Solutions",
  description:
    "Profesionální zabezpečení objektů. Instalace EZS Jablotron, kamerových systémů a přístupových systémů. Komplexní ochrana firem i domácností.",
  keywords: [
    "EZS",
    "Jablotron",
    "kamerový systém",
    "zabezpečení",
    "alarmy",
    "CCTV",
    "přístupové systémy",
    "bezpečnostní systémy",
    "IP kamery",
  ],
};

export default function Zabezpeceni() {
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
                  <div className="h-px w-12 bg-neutral-700"></div>
                  <span className="font-mono text-xs tracking-widest uppercase text-neutral-600">
                    Bezpečnostní systémy
                  </span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                  Profesionální{" "}
                  <span className="text-neutral-600">zabezpečení objektů</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-500 mb-8 leading-relaxed">
                  Instalace a servis elektronických zabezpečovacích systémů
                  Jablotron a moderních kamerových systémů. Komplexní ochrana pro
                  firmy i domácnosti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-neutral-700 transition-colors font-heading font-semibold text-center"
                  >
                    Poptat zabezpečení
                  </a>
                  <a
                    href="#sluzby"
                    className="inline-flex items-center justify-center border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-full hover:border-neutral-900 transition-colors font-heading font-semibold text-center"
                  >
                    Naše služby
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-20 md:py-32 bg-white noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-neutral-700"></div>
                <span className="font-mono text-xs tracking-widest uppercase text-neutral-600">
                  Služby
                </span>
                <div className="h-px w-12 bg-neutral-700"></div>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Co nabízíme
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Kompletní řešení zabezpečení od návrhu přes instalaci až po
                pravidelný servis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* EZS */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  EZS Jablotron
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Elektronické zabezpečovací systémy od českého výrobce. Spolehlivá
                  detekce narušení s možností vzdáleného ovládání.
                </p>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Bezdrátové i drátové systémy
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ovládání přes aplikaci MyJablotron
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Napojení na PCO
                  </li>
                </ul>
              </div>

              {/* Kamery */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Kamerové systémy
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Moderní IP kamerové systémy s vysokým rozlišením. Vzdálený přístup
                  k záznamům odkudkoliv.
                </p>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    4K rozlišení
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Noční vidění
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Detekce pohybu a AI analýza
                  </li>
                </ul>
              </div>

              {/* Přístupové systémy */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Přístupové systémy
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Řízení přístupu do objektů pomocí karet a čipů.
                  Evidence vstupů a časová omezení.
                </p>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    RFID karty a čipy
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Kódové klávesnice
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Integrace s docházkovým systémem
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Jablotron Section */}
        <section className="py-20 md:py-32 bg-neutral-50 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-neutral-700"></div>
                  <span className="font-mono text-xs tracking-widest uppercase text-neutral-600">
                    Partner
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                  Proč Jablotron?
                </h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    Jablotron je česká firma s více než 30 lety zkušeností v oblasti
                    zabezpečovací techniky. Jejich systémy patří mezi nejspolehlivější
                    na trhu.
                  </p>
                  <p>
                    Jako certifikovaný partner Jablotron vám garantujeme profesionální
                    instalaci a dlouhodobou podporu.
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-neutral-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="text-neutral-900">Český výrobce</strong> –
                      rychlá dostupnost náhradních dílů a servisu
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-neutral-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="text-neutral-900">Aplikace MyJablotron</strong>{" "}
                      – ovládání a monitoring z mobilu
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-neutral-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="text-neutral-900">Integrace</strong> –
                      propojení s kamerami, požární signalizací a domácí automatizací
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-neutral-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="text-neutral-900">Certifikace</strong> –
                      systémy splňují požadavky pojišťoven
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-2xl font-bold mb-6">Kompletní servis</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Bezplatná konzultace a návrh řešení</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Profesionální montáž a konfigurace</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Zaškolení obsluhy</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Pravidelné revize a údržba</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Rychlý servisní zásah při poruše</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 md:py-32 bg-white noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-neutral-700"></div>
                <span className="font-mono text-xs tracking-widest uppercase text-neutral-600">
                  Využití
                </span>
                <div className="h-px w-12 bg-neutral-700"></div>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Pro koho je zabezpečení vhodné
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-neutral-900 mb-2">Rodinné domy</h3>
                <p className="text-sm text-neutral-500">
                  Ochrana majetku a rodiny s možností vzdáleného ovládání
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-neutral-600"
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
                <h3 className="font-heading font-bold text-neutral-900 mb-2">Kanceláře a firmy</h3>
                <p className="text-sm text-neutral-500">
                  Kontrola přístupu zaměstnanců a ochrana citlivých dat
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-neutral-900 mb-2">Sklady a haly</h3>
                <p className="text-sm text-neutral-500">
                  Rozsáhlé objekty s potřebou pokrytí velkých ploch
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-neutral-900 mb-2">Obchody</h3>
                <p className="text-sm text-neutral-500">
                  Prevence krádeží a monitoring prodejních prostor
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
                Zabezpečte svůj objekt
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Kontaktujte nás pro bezplatnou konzultaci. Připravíme návrh řešení
                na míru vašim potřebám.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@unigrid.cz?subject=Poptávka - Zabezpečení objektu"
                  className="inline-flex items-center justify-center bg-white text-neutral-900 px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors font-heading font-semibold text-center"
                >
                  info@unigrid.cz
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-heading font-semibold text-center"
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
