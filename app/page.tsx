import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-20 md:pt-24 noise-bg">
          <div className="dot-grid">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
              <div className="max-w-5xl">
                <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in">
                  <div className="h-px w-12 bg-primary-600"></div>
                  <span className="font-mono text-xs tracking-widest uppercase text-primary-600">
                    Unigrid Solutions
                  </span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold text-neutral-900 leading-[0.95] tracking-tight mb-8 opacity-0 animate-fade-in-up stagger-1">
                  Automatizace,
                  <br />
                  fotovoltaika
                  <br />
                  <span className="text-primary-600">&amp; zabezpečení</span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-2">
                  Navrhujeme a realizujeme systémy řízení, měření a zabezpečení
                  pro průmysl i fotovoltaiku. Od prvního návrhu po dlouhodobý
                  servis.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up stagger-3">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-colors font-heading font-semibold text-center"
                  >
                    Poptat projekt
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#pilire"
                    className="inline-flex items-center justify-center border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-colors font-heading font-semibold text-center"
                  >
                    Co děláme
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pilire" className="py-24 md:py-32 bg-neutral-50 noise-bg relative overflow-hidden">
          {/* Decorative grid lines */}
          <div className="absolute inset-0 line-grid"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary-600"></div>
              <span className="font-mono text-xs tracking-widest uppercase text-primary-600">
                Naše oblasti
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-16">
              Čím se zabýváme
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pillar 1 - Průmyslová automatizace */}
              <a
                href="/mar-telemetrie"
                className="pillar-card group relative bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary-500/10 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-500 rounded-l-2xl"></div>
                <div className="absolute -top-6 -right-6 font-heading text-[120px] font-bold text-neutral-100 leading-none select-none">
                  01
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary-50 border border-primary-200 rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                    Průmyslová automatizace
                  </h3>
                  <p className="text-neutral-500 leading-relaxed mb-6">
                    Měření, regulace, telemetrie a programování PLC. Zaměřujeme
                    se na vodohospodářství a průmyslové objekty.
                  </p>

                  <ul className="space-y-2 text-sm text-neutral-400 mb-8">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                      ČOV, čerpací stanice, vodojemy
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                      Programování PLC
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                      SCADA a vizualizace
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                      Vzdálený monitoring
                    </li>
                  </ul>

                  <div className="flex items-center text-primary-600 font-heading font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                    Více o automatizaci
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Pillar 2 - Fotovoltaika */}
              <div
                className="pillar-card relative bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-energy-500/10 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-energy-500 rounded-l-2xl"></div>
                <div className="absolute -top-6 -right-6 font-heading text-[120px] font-bold text-neutral-100 leading-none select-none">
                  02
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-energy-50 border border-energy-200 rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-energy-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                    Fotovoltaika
                  </h3>
                  <p className="text-neutral-500 leading-relaxed mb-6">
                    Chytré řízení FVE a nezávislé konzultace. Pomůžeme vám
                    vytěžit maximum z vaší elektrárny.
                  </p>

                  <ul className="space-y-2 text-sm text-neutral-400 mb-8">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-energy-500 rounded-full mr-3 flex-shrink-0"></span>
                      Chytré řízení spotřebičů
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-energy-500 rounded-full mr-3 flex-shrink-0"></span>
                      Maximalizace vlastní spotřeby
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-energy-500 rounded-full mr-3 flex-shrink-0"></span>
                      Nezávislé posouzení nabídek
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-energy-500 rounded-full mr-3 flex-shrink-0"></span>
                      Vzdálený monitoring výroby
                    </li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/chytre-rizeni-fve"
                      className="group flex items-center text-energy-600 font-heading font-medium text-sm hover:gap-3 gap-2 transition-all"
                    >
                      Chytré řízení FVE
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                    <a
                      href="/konzultace-fve"
                      className="group flex items-center text-energy-600 font-heading font-medium text-sm hover:gap-3 gap-2 transition-all"
                    >
                      Konzultace nabídek
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Pillar 3 - Zabezpečení */}
              <a
                href="/zabezpeceni"
                className="pillar-card group relative bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-neutral-500/10 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-neutral-700 rounded-l-2xl"></div>
                <div className="absolute -top-6 -right-6 font-heading text-[120px] font-bold text-neutral-100 leading-none select-none">
                  03
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-neutral-100 border border-neutral-200 rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-neutral-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                    Zabezpečení
                  </h3>
                  <p className="text-neutral-500 leading-relaxed mb-6">
                    EZS Jablotron, kamerové systémy a přístupové systémy.
                    Komplexní ochrana objektů.
                  </p>

                  <ul className="space-y-2 text-sm text-neutral-400 mb-8">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-neutral-500 rounded-full mr-3 flex-shrink-0"></span>
                      EZS Jablotron
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-neutral-500 rounded-full mr-3 flex-shrink-0"></span>
                      IP kamerové systémy
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-neutral-500 rounded-full mr-3 flex-shrink-0"></span>
                      Přístupové systémy
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-neutral-500 rounded-full mr-3 flex-shrink-0"></span>
                      Servis a údržba
                    </li>
                  </ul>

                  <div className="flex items-center text-neutral-600 font-heading font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                    Více o zabezpečení
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* IT infrastruktura - info */}
            <div className="mt-8 max-w-2xl">
              <div className="flex items-center bg-neutral-100 rounded-xl p-6">
                <div className="w-10 h-10 bg-white border border-neutral-200 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-neutral-900 mb-0.5">
                    IT infrastruktura a datové sítě
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Strukturovaná kabeláž, Wi-Fi, aktivní prvky a konektivita
                    pro firmy i stavby.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="o-nas" className="py-24 md:py-32 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-primary-600"></div>
                  <span className="font-mono text-xs tracking-widest uppercase text-primary-600">
                    O nás
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-8">
                  O společnosti
                  <br />
                  Unigrid Solutions
                </h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed text-lg">
                  <p>
                    Specializujeme se na automatizaci, fotovoltaiku a zabezpečení
                    průmyslových i komerčních objektů. Kombinujeme praktické
                    zkušenosti s moderními technologiemi.
                  </p>
                  <p>
                    Hledáme řešení šitá na míru. Věnujeme se každému projektu
                    osobně a zaměřujeme se na dlouhodobou spolupráci s klienty.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-8">
                  <div className="border-t-2 border-primary-600 pt-4">
                    <div className="font-mono stat-number text-4xl md:text-5xl font-bold text-neutral-900 mb-1">
                      8+
                    </div>
                    <div className="font-heading text-sm text-neutral-500 uppercase tracking-wide">
                      Let zkušeností
                    </div>
                  </div>
                  <div className="border-t-2 border-energy-500 pt-4">
                    <div className="font-mono stat-number text-4xl md:text-5xl font-bold text-neutral-900 mb-1">
                      15+
                    </div>
                    <div className="font-heading text-sm text-neutral-500 uppercase tracking-wide">
                      Úspěšných projektů
                    </div>
                  </div>
                  <div className="border-t-2 border-primary-300 pt-4">
                    <div className="font-mono stat-number text-4xl md:text-5xl font-bold text-neutral-900 mb-1">
                      100%
                    </div>
                    <div className="font-heading text-sm text-neutral-500 uppercase tracking-wide">
                      Osobní přístup
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-neutral-900 rounded-2xl p-8 md:p-10 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-8">
                    Proč zvolit
                    <br />
                    Unigrid Solutions?
                  </h3>
                  <ul className="space-y-5">
                    {[
                      'Praktické zkušenosti z reálných projektů',
                      'Osobní přístup ke každému projektu',
                      'Používáme osvědčené technologie',
                      'Transparentní komunikace a dodržování termínů',
                      'Dlouhodobá podpora a servis realizovaných řešení',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 text-primary-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-neutral-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-24 md:py-32 bg-neutral-50 noise-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-12 bg-primary-600"></div>
                  <span className="font-mono text-xs tracking-widest uppercase text-primary-600">
                    Kontakt
                  </span>
                  <div className="h-px w-12 bg-primary-600"></div>
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                  Kontaktujte nás
                </h2>
                <p className="text-lg text-neutral-500 max-w-xl mx-auto">
                  Máte dotaz nebo zájem o naše služby? Rádi vám pomůžeme.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Phone */}
                <div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all text-center">
                  <div className="w-14 h-14 bg-neutral-100 group-hover:bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-5 transition-colors">
                    <svg
                      className="w-7 h-7 text-neutral-400 group-hover:text-primary-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="font-heading text-sm font-medium text-neutral-400 uppercase tracking-wide mb-2">
                    Telefon
                  </div>
                  <a
                    href="tel:+420733348366"
                    className="font-heading text-lg font-bold text-neutral-900 hover:text-primary-600 transition-colors"
                  >
                    +420 733 348 366
                  </a>
                </div>

                {/* Email */}
                <div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-energy-200 hover:shadow-lg hover:shadow-energy-500/5 transition-all text-center">
                  <div className="w-14 h-14 bg-neutral-100 group-hover:bg-energy-50 rounded-xl flex items-center justify-center mx-auto mb-5 transition-colors">
                    <svg
                      className="w-7 h-7 text-neutral-400 group-hover:text-energy-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="font-heading text-sm font-medium text-neutral-400 uppercase tracking-wide mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:info@unigrid.cz"
                    className="font-heading text-lg font-bold text-neutral-900 hover:text-energy-600 transition-colors"
                  >
                    info@unigrid.cz
                  </a>
                </div>

                {/* Location */}
                <div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all text-center">
                  <div className="w-14 h-14 bg-neutral-100 group-hover:bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-5 transition-colors">
                    <svg
                      className="w-7 h-7 text-neutral-400 group-hover:text-primary-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="font-heading text-sm font-medium text-neutral-400 uppercase tracking-wide mb-2">
                    Působnost
                  </div>
                  <span className="font-heading text-lg font-bold text-neutral-900">
                    Rakovnicko
                  </span>
                  <p className="text-sm text-neutral-400 mt-1">
                    Středočeský kraj
                  </p>
                </div>
              </div>

              {/* Company Info */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-6 py-3 text-sm text-neutral-500">
                  <span className="font-mono text-xs">
                    Unigrid Solutions s.r.o. · Nové sady 988/2, 602 00 Brno ·
                    IČO: 08899541 · DIČ: CZ08899541
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
