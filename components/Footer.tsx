export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Unigrid</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Propojujeme systémy měření, řízení, zabezpečení a komunikace.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Služby</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-neutral-400 hover:text-white transition-colors">
                MaR a Telemetrie
              </li>
              <li className="text-neutral-400 hover:text-white transition-colors">
                Chytré řízení
              </li>
              <li className="text-neutral-400 hover:text-white transition-colors">
                Zabezpečení
              </li>
              <li className="text-neutral-400 hover:text-white transition-colors">
                Datové sítě
              </li>
              <li className="text-neutral-400 hover:text-white transition-colors">
                Programování PLC
              </li>
              <li className="text-neutral-400 hover:text-white transition-colors">
                IT školení
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Naše projekty</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://skoleninasbavi.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  skoleninasbavi.cz
                </a>
              </li>
              <li>
                <a
                  href="https://srozumemonline.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  srozumemonline.cz
                </a>
              </li>
              <li>
                <a
                  href="https://pujcmibagr.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  pujcmibagr.cz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a
                  href="mailto:info@unigrid.cz"
                  className="hover:text-white transition-colors"
                >
                  info@unigrid.cz
                </a>
              </li>
              <li>
                <a
                  href="https://www.unigrid.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.unigrid.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-sm text-neutral-500 text-center">
          <p>&copy; {currentYear} Unigrid. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}
