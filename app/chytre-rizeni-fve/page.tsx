import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chytré řízení FVE | Unigrid Solutions",
  description:
    "Inteligentní řízení fotovoltaických elektráren. Maximalizujte výnos z vaší FVE díky chytrému řízení spotřeby, akumulace a přetoků.",
  keywords: [
    "řízení FVE",
    "fotovoltaika",
    "chytrá elektrárna",
    "optimalizace spotřeby",
    "akumulace energie",
    "přetoky",
    "wattrouter",
    "regulace FVE",
  ],
};

export default function ChytreRizeniFVE() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-16 md:pt-20">
          <div className="bg-gradient-to-br from-energy-50 via-primary-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
              <div className="max-w-4xl">
                <div className="inline-block bg-energy-100 text-energy-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Fotovoltaika &amp; Energetika
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                  Chytré řízení{" "}
                  <span className="text-energy-600">fotovoltaických elektráren</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                  Maximalizujte výnos z vaší FVE. Inteligentní systémy pro řízení
                  spotřeby, akumulace a minimalizaci přetoků do sítě.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="inline-block bg-energy-600 text-white px-8 py-4 rounded-lg hover:bg-energy-700 transition-colors font-semibold text-center"
                  >
                    Nezávazná konzultace
                  </a>
                  <a
                    href="#jak-to-funguje"
                    className="inline-block border-2 border-energy-600 text-energy-600 px-8 py-4 rounded-lg hover:bg-energy-50 transition-colors font-semibold text-center"
                  >
                    Jak to funguje
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Nevyužíváte plný potenciál vaší FVE?
              </h2>
              <p className="text-lg text-neutral-600">
                Většina majitelů fotovoltaik ztrácí až 40 % vyrobené energie přetoky
                do sítě za nevýhodnou výkupní cenu.
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
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Nízká výkupní cena
                </h3>
                <p className="text-neutral-600">
                  Přetoky do sítě jsou vykupovány za zlomek běžné ceny elektřiny.
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
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Nesoulad výroby a spotřeby
                </h3>
                <p className="text-neutral-600">
                  FVE vyrábí nejvíce v poledne, kdy jste v práci a spotřeba je
                  minimální.
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
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Chybějící automatizace
                </h3>
                <p className="text-neutral-600">
                  Ruční spínání spotřebičů je nepraktické a nikdy není optimální.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="jak-to-funguje" className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Jak funguje chytré řízení FVE
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Automaticky řídíme spotřebiče podle aktuální výroby a spotřeby,
                abyste využili maximum vlastní energie.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
                    <span className="text-energy-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Měření v reálném čase
                    </h3>
                    <p className="text-neutral-600">
                      Systém průběžně monitoruje výrobu FVE, aktuální spotřebu domu a
                      stav baterie (pokud máte).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
                    <span className="text-energy-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Inteligentní rozhodování
                    </h3>
                    <p className="text-neutral-600">
                      Algoritmus vyhodnocuje přebytky a automaticky určuje, které
                      spotřebiče zapnout a v jakém pořadí.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
                    <span className="text-energy-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Automatické řízení
                    </h3>
                    <p className="text-neutral-600">
                      Bojler, tepelné čerpadlo, bazénová filtrace, nabíjení EV nebo
                      klimatizace se spouští automaticky při přebytcích.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center">
                    <span className="text-energy-600 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Vzdálený monitoring
                    </h3>
                    <p className="text-neutral-600">
                      Přehled o výrobě, spotřebě a úsporách máte vždy po ruce v
                      mobilní aplikaci nebo webovém rozhraní.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Co můžeme řídit
                </h3>
                <ul className="space-y-4">
                  {[
                    "Ohřev vody (bojler, zásobník TČ)",
                    "Tepelná čerpadla",
                    "Klimatizace a chlazení",
                    "Bazénová filtrace a ohřev",
                    "Nabíjení elektromobilu",
                    "Akumulační kamna",
                    "Průmyslové spotřebiče",
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

        {/* Benefits Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Výhody chytrého řízení
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-energy-50 to-white border border-energy-100 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-energy-600 mb-2">
                  až 90 %
                </div>
                <p className="text-neutral-600">
                  vlastní spotřeby z vyrobené energie
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  2-4 roky
                </div>
                <p className="text-neutral-600">návratnost investice do řízení</p>
              </div>

              <div className="bg-gradient-to-br from-energy-50 to-white border border-energy-100 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-energy-600 mb-2">0 Kč</div>
                <p className="text-neutral-600">
                  měsíční poplatky za provoz systému
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <p className="text-neutral-600">automatický provoz bez zásahu</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-20 md:py-32 bg-gradient-to-br from-energy-600 to-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Začněte využívat maximum z vaší FVE
              </h2>
              <p className="text-lg text-energy-100 mb-8">
                Kontaktujte nás pro nezávaznou konzultaci. Zanalyzujeme vaši situaci
                a navrhneme optimální řešení.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@unigrid.cz?subject=Poptávka - Chytré řízení FVE"
                  className="inline-block bg-white text-energy-600 px-8 py-4 rounded-lg hover:bg-energy-50 transition-colors font-semibold text-center"
                >
                  info@unigrid.cz
                </a>
                <Link
                  href="/"
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-center"
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
