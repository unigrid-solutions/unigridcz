import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datové sítě | Unigrid Solutions",
  description:
    "Návrh a realizace datových sítí pro firmy, průmyslové objekty a stavby. Strukturovaná kabeláž, Wi-Fi, dočasné připojení na stavby.",
  keywords: [
    "datové sítě",
    "strukturovaná kabeláž",
    "síťová infrastruktura",
    "Wi-Fi",
    "internet pro firmy",
    "LAN",
    "optické sítě",
    "internet na stavbu",
  ],
};

export default function DatoveSite() {
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
                    Síťová infrastruktura
                  </span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                  Spolehlivé{" "}
                  <span className="text-primary-600">datové sítě</span> pro vaše
                  podnikání
                </h1>
                <p className="text-lg md:text-xl text-neutral-500 mb-8 leading-relaxed">
                  Návrh a realizace síťové infrastruktury pro firmy, průmyslové
                  objekty a stavby. Od kabeláže po aktivní prvky.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-colors font-heading font-semibold text-center"
                  >
                    Poptat řešení
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Co nabízíme
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Komplexní řešení datových sítí od návrhu přes realizaci až po
                správu a servis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Strukturovaná kabeláž */}
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Strukturovaná kabeláž
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Profesionální instalace metalických i optických rozvodů. Certifikované
                  měření a garance parametrů.
                </p>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cat5e, Cat6, Cat6a
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Optické trasy (SM/MM)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Měření a certifikace
                  </li>
                </ul>
              </div>

              {/* Wi-Fi sítě */}
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
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Wi-Fi sítě
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Návrh a realizace bezdrátových sítí pro kanceláře, sklady i
                  venkovní prostory. Pokrytí bez mrtvých míst.
                </p>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Wi-Fi 6 (802.11ax)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Centrální správa
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Guest portál
                  </li>
                </ul>
              </div>

              {/* Internet na stavby */}
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Internet na stavby
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Dočasné připojení k internetu pro staveniště a průmyslové
                  objekty. Rychlé nasazení, flexibilní podmínky.
                </p>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    LTE/5G připojení
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mikrovlnné spoje
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-energy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Krátkodobé i dlouhodobé
                  </li>
                </ul>
              </div>

              {/* Aktivní prvky */}
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
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Aktivní prvky
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Dodávka a konfigurace routerů, switchů a firewallů. Návrh
                  topologie a segmentace sítě.
                </p>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    MikroTik, Ubiquiti
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    VLAN, QoS, VPN
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Redundance a HA
                  </li>
                </ul>
              </div>

              {/* Servis */}
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
                  Správa a servis
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Průběžná správa sítě, monitoring, aktualizace a rychlý servisní
                  zásah při problémech.
                </p>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Automatický monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Vzdálená správa
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SLA smlouvy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 md:py-32 bg-neutral-50 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-primary-600"></div>
                  <span className="font-mono text-xs tracking-widest uppercase text-primary-600">
                    Proč my
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                  Proč řešit síť s námi
                </h2>
                <div className="space-y-4 text-neutral-500 leading-relaxed">
                  <p>
                    Datová síť je páteří moderního podnikání. Špatně navržená nebo
                    realizovaná síť způsobuje problémy, které vás stojí čas i peníze.
                  </p>
                  <p>
                    Navrhujeme sítě s ohledem na budoucí růst a měnící se požadavky.
                    Používáme kvalitní materiály a dodržujeme standardy.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm max-w-xs border-t-2 border-primary-600">
                    <div className="font-mono stat-number text-3xl font-bold text-neutral-900 mb-2">
                      100 %
                    </div>
                    <div className="font-heading text-sm text-neutral-500 uppercase tracking-wide">
                      certifikované trasy
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-2xl font-bold mb-6">Náš přístup</h3>
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
                    <span>Analýza potřeb a návrh řešení</span>
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
                    <span>Projektová dokumentace</span>
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
                    <span>Realizace vlastním týmem</span>
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
                    <span>Měření a certifikace každé trasy</span>
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
                    <span>Předání dokumentace a zaškolení</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-20 md:py-32 bg-neutral-900 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Potřebujete spolehlivou síť?
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Kontaktujte nás pro konzultaci. Připravíme návrh řešení na míru
                vašim potřebám a rozpočtu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@unigrid.cz?subject=Poptávka - Datové sítě"
                  className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-primary-50 transition-colors font-heading font-semibold text-center"
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
