import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-16 md:pt-20">
          <div className="bg-gradient-to-br from-primary-50 via-energy-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                  Komplexní řešení pro{' '}
                  <span className="text-primary-600">automatizaci a zabezpečení</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                  Propojujeme systémy měření, řízení, zabezpečení a komunikace. Od návrhu až po dlouhodobý servis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center"
                  >
                    Poptat projekt
                  </a>
                  <a
                    href="#sluzby"
                    className="inline-block border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-center"
                  >
                    Naše služby
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Co nabízíme
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 - MaR a Telemetrie */}
              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
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
                <h3 className="text-xl font-bold text-neutral-900 mb-3">MaR a Telemetrie</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Měření, regulace a vzdálený monitoring systémů. Sběr dat a jejich
                  vyhodnocení pro optimální řízení procesů.
                </p>
              </div>

              {/* Service 2 - Chytré řízení */}
              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Chytré řízení</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Implementace inteligentních systémů pro optimální řízení procesů a
                  energetickou efektivitu.
                </p>
              </div>

              {/* Service 3 - Zabezpečení (EZS a Kamery sloučené) */}
              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-security-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-security-600"
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
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Zabezpečení</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Instalace a servis EZS Jablotron a moderních kamerových systémů. Komplexní
                  ochrana majetku.
                </p>
              </div>

              {/* Service 4 - Datové sítě */}
              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Datové sítě</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Návrh a realizace datových sítí pro firmy i stavby. Internet pro průmyslové
                  objekty, dočasné připojení na stavby a síťová infrastruktura.
                </p>
              </div>

              {/* Service 5 - Programování PLC */}
              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
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
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Programování PLC</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Návrh a programování řídicích systémů pro průmyslovou automatizaci. Práce s
                  různými typy PLC a protokoly.
                </p>
              </div>

              {/* Service 6 - IT školení */}
              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-training-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-training-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">IT školení</h3>
                <p className="text-neutral-600 leading-relaxed mb-3">
                  Odborná školení pro programátory a kyberbezpečnost. Agregujeme kvalitní školitele.
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <a href="https://skoleninasbavi.cz" target="_blank" rel="noopener noreferrer" className="text-training-600 hover:text-training-700 font-medium">
                    → skoleninasbavi.cz
                  </a>
                  <a href="https://srozumemonline.cz" target="_blank" rel="noopener noreferrer" className="text-training-600 hover:text-training-700 font-medium">
                    → srozumemonline.cz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="o-nas" className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  O společnosti Unigrid
                </h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    Specializujeme se na automatizaci, měření a regulaci průmyslových i komerčních
                    objektů. Kombinujeme praktické zkušenosti s moderními technologiemi.
                  </p>
                  <p>
                    Hledáme řešení šitá na míru. Věnujeme se každému projektu osobně a zaměřujeme
                    se na dlouhodobou spolupráci s klienty.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">8+</div>
                    <div className="text-sm text-neutral-600">Let zkušeností</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-energy-600 mb-2">15+</div>
                    <div className="text-sm text-neutral-600">Úspěšných projektů</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-training-600 mb-2">100%</div>
                    <div className="text-sm text-neutral-600">Osobní přístup</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-energy-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Proč zvolit Unigrid?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Praktické zkušenosti z reálných projektů</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Osobní přístup ke každému projektu</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Používáme osvědčené technologie</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Transparentní komunikace a dodržování termínů</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Dlouhodobá podpora a servis realizovaných řešení</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Kontaktujte nás
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Máte dotaz nebo zájem o naše služby? Rádi vám pomůžeme.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Card */}
                <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2 text-lg">Email</h3>
                  <a
                    href="mailto:info@unigrid.cz"
                    className="text-primary-600 hover:text-primary-700 font-medium text-lg"
                  >
                    info@unigrid.cz
                  </a>
                </div>

                {/* Web Card */}
                <div className="bg-gradient-to-br from-energy-50 to-white border border-energy-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-energy-100 rounded-lg flex items-center justify-center mb-4">
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
                  <h3 className="font-bold text-neutral-900 mb-2 text-lg">Web</h3>
                  <a
                    href="https://www.unigrid.cz"
                    className="text-energy-600 hover:text-energy-700 font-medium text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.unigrid.cz
                  </a>
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
