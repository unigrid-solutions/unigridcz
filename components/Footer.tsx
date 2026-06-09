export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 noise-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Company Info */}
          <div className="md:col-span-4">
            <h3 className="font-heading text-xl font-bold text-white mb-1">
              Unigrid Solutions
            </h3>
            <p className="font-mono text-xs text-neutral-500 tracking-wide mb-5">
              Váš partner v technologiích
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Automatizace, FVE a zabezpečení.
              <br />
              Od návrhu po dlouhodobý servis.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+420733348366"
                className="text-sm text-neutral-500 hover:text-white transition-colors link-reveal"
              >
                +420 733 348 366
              </a>
              <span className="text-neutral-700">·</span>
              <a
                href="mailto:info@unigrid.cz"
                className="text-sm text-neutral-500 hover:text-white transition-colors link-reveal"
              >
                info@unigrid.cz
              </a>
            </div>
          </div>

          {/* Pillars */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-heading text-xs font-medium uppercase tracking-widest text-neutral-600 mb-4">
              Naše oblasti
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/mar-telemetrie"
                  className="text-neutral-500 hover:text-white transition-colors link-reveal"
                >
                  Automatizace
                </a>
              </li>
              <li>
                <a
                  href="/chytre-rizeni-fve"
                  className="text-neutral-500 hover:text-white transition-colors link-reveal"
                >
                  Fotovoltaika
                </a>
              </li>
              <li>
                <a
                  href="/zabezpeceni"
                  className="text-neutral-500 hover:text-white transition-colors link-reveal"
                >
                  Zabezpečení
                </a>
              </li>
            </ul>
          </div>

          {/* Other Projects */}
          <div className="md:col-span-2">
            <h4 className="font-heading text-xs font-medium uppercase tracking-widest text-neutral-600 mb-4">
              Další projekty
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://skoleninasbavi.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors link-reveal"
                >
                  skoleninasbavi.cz
                </a>
              </li>
              <li>
                <a
                  href="https://srozumemonline.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors link-reveal"
                >
                  srozumemonline.cz
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <h4 className="font-heading text-xs font-medium uppercase tracking-widest text-neutral-600 mb-4">
              Působnost
            </h4>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Rakovnicko
              <br />
              Středočeský kraj
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800/50 mt-12 pt-8">
          <p className="font-mono text-xs text-neutral-600 text-center">
            &copy; {currentYear} Unigrid Solutions s.r.o. · Nové sady 988/2,
            602 00 Brno · IČO: 08899541 · DIČ: CZ08899541
          </p>
        </div>
      </div>
    </footer>
  );
}
