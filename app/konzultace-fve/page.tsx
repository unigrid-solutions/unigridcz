import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Konzultace FVE nabídek | Unigrid Solutions",
  description:
    "Nezávislé posouzení nabídek na fotovoltaiku. Zhodnotíme technické řešení, cenu i kvalitu komponentů. Pomůžeme s výběrem realizační firmy.",
  keywords: [
    "konzultace FVE",
    "posouzení nabídky fotovoltaiky",
    "nezávislý poradce FVE",
    "výběr firmy fotovoltaika",
    "kontrola nabídky FVE",
    "fotovoltaická elektrárna",
    "solární panely",
    "střídač",
    "baterie FVE",
  ],
};

export default function KonzultaceFVE() {
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
                  <div className="h-px w-12 bg-energy-600"></div>
                  <span className="font-mono text-xs tracking-widest uppercase text-energy-600">
                    Fotovoltaika &amp; Poradenství
                  </span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                  Nezávislé posouzení{" "}
                  <span className="text-energy-600">nabídek na fotovoltaiku</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-500 mb-8 leading-relaxed">
                  Nejsme realizační firma. Díky tomu vám dokážeme objektivně zhodnotit
                  nabídku na FVE, poradit s technickým řešením a pomoct s výběrem
                  spolehlivé firmy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-energy-600 transition-colors font-heading font-semibold text-center"
                  >
                    Chci konzultaci
                  </a>
                  <a
                    href="#co-resime"
                    className="inline-flex items-center justify-center border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-full hover:border-neutral-900 transition-colors font-heading font-semibold text-center"
                  >
                    Co vše posoudíme
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 md:py-32 bg-white noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                Nevíte, jestli je nabídka na FVE férová?
              </h2>
              <p className="text-lg text-neutral-500">
                Trh s fotovoltaikou je přesycený nabídkami. Ne všechny jsou kvalitní
                a ne všechny firmy dodají to, co slíbí.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                  Předražené nabídky
                </h3>
                <p className="text-neutral-500">
                  Některé firmy účtují výrazně více, než odpovídá rozsahu a kvalitě
                  navrhovaného řešení.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                  Nevhodné komponenty
                </h3>
                <p className="text-neutral-500">
                  Levné panely, poddimenzovaný střídač nebo chybějící ochranné prvky
                  mohou způsobit problémy.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                  Neúplná nabídka
                </h3>
                <p className="text-neutral-500">
                  V nabídce chybí důležité položky a ty se pak objeví jako vícepráce
                  při realizaci.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Review Section */}
        <section id="co-resime" className="py-20 md:py-32 bg-neutral-50 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Co vše v nabídce posoudíme
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Projdeme nabídku bod po bodu a řekneme vám, na co si dát pozor
                a co případně doplnit.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                      Technické řešení
                    </h3>
                    <p className="text-neutral-500">
                      Správný výkon FVE vzhledem ke spotřebě, orientace a sklon panelů,
                      návrh stringů, dimenzování střídače a baterie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                      Kvalita komponentů
                    </h3>
                    <p className="text-neutral-500">
                      Posoudíme konkrétní značky a typy panelů, střídačů, baterií
                      a dalších komponentů. Řekneme, co je kvalitní a co ne.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                      Úplnost nabídky
                    </h3>
                    <p className="text-neutral-500">
                      Zkontrolujeme, zda nabídka obsahuje vše potřebné - od projektu
                      a revize po přepěťové ochrany, kabeláž a konstrukční systém.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                      Cena a návratnost
                    </h3>
                    <p className="text-neutral-500">
                      Posoudíme, zda je cena adekvátní nabízenému řešení a ověříme
                      reálnost uváděné návratnosti investice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                  Na co v nabídce často chybí
                </h3>
                <ul className="space-y-4">
                  {[
                    "Projekt elektro a statický posudek",
                    "Revizní zpráva po instalaci",
                    "Přepěťové ochrany (AC i DC strana)",
                    "Monitoring a vzdálený přístup",
                    "Detailní specifikace komponentů",
                    "Záruční podmínky a servisní podpora",
                    "Vyřízení dotace a připojení k síti",
                    "Řízení přebytků (bojler, TČ, wallbox)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-energy-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-32 bg-white noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Jak konzultace probíhá
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
                  <span className="font-mono text-energy-600 font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                    Pošlete nám nabídku
                  </h3>
                  <p className="text-neutral-500">
                    Zašlete nám nabídku, kterou jste obdrželi od realizační firmy.
                    Ideálně i s údaji o vaší spotřebě a fotkami střechy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
                  <span className="font-mono text-energy-600 font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                    Provedeme analýzu
                  </h3>
                  <p className="text-neutral-500">
                    Důkladně projdeme technické řešení, použité komponenty, cenu
                    a úplnost nabídky. Porovnáme s aktuálními cenami na trhu.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
                  <span className="font-mono text-energy-600 font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                    Dostanete jasné doporučení
                  </h3>
                  <p className="text-neutral-500">
                    Řekneme vám, co je v nabídce v pořádku, co chybí a co byste měli
                    požadovat. Případně pomůžeme s výběrem jiné firmy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 md:py-32 bg-neutral-50 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Proč konzultovat právě s námi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Nezávislost
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  Neinstalujeme FVE, neprodáváme komponenty. Nemáme důvod vám
                  doporučit dražší řešení nebo konkrétní značku.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Technické know-how
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  Rozumíme elektrotechnice, automatizaci a energetice. Posoudíme
                  nabídku do technických detailů, kterým běžný zákazník nerozumí.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  Pomoc s výběrem firmy
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  Pokud stávající nabídka nevyhovuje, pomůžeme vám s výběrem
                  spolehlivé realizační firmy ve vašem regionu.
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
                Nechte si nabídku posoudit
              </h2>
              <p className="text-lg text-energy-100 mb-8">
                Pošlete nám vaši nabídku na FVE a my vám řekneme, jestli je v pořádku.
                Ušetříte si starosti i peníze.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@unigrid.cz?subject=Konzultace nabídky FVE"
                  className="inline-flex items-center justify-center bg-white text-energy-600 px-8 py-4 rounded-full hover:bg-energy-50 transition-colors font-heading font-semibold text-center"
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
