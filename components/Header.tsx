'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isHomepage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex-shrink-0 relative z-10">
            <Image
              src="/logo.svg"
              alt="Unigrid Solutions"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex md:items-center md:space-x-1">
            <a
              href="/mar-telemetrie"
              className="link-reveal px-4 py-2 text-sm font-heading font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Automatizace
            </a>
            <a
              href="/chytre-rizeni-fve"
              className="link-reveal px-4 py-2 text-sm font-heading font-medium text-neutral-700 hover:text-energy-600 transition-colors"
            >
              Fotovoltaika
            </a>
            <a
              href="/zabezpeceni"
              className="link-reveal px-4 py-2 text-sm font-heading font-medium text-neutral-700 hover:text-security-600 transition-colors"
            >
              Zabezpečení
            </a>
            <button
              onClick={() => scrollToSection('o-nas')}
              className="link-reveal px-4 py-2 text-sm font-heading font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              O nás
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="ml-4 bg-neutral-900 text-white px-6 py-2.5 rounded-full text-sm font-heading font-medium hover:bg-primary-600 transition-colors"
            >
              Kontakt
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors relative z-10"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-neutral-200 bg-white">
            <div className="flex flex-col space-y-1">
              <a
                href="/mar-telemetrie"
                className="text-neutral-700 hover:text-primary-600 transition-colors font-heading font-medium text-left px-3 py-3 rounded-lg hover:bg-neutral-50"
              >
                Automatizace
              </a>
              <a
                href="/chytre-rizeni-fve"
                className="text-neutral-700 hover:text-energy-600 transition-colors font-heading font-medium text-left px-3 py-3 rounded-lg hover:bg-neutral-50"
              >
                Fotovoltaika
              </a>
              <a
                href="/zabezpeceni"
                className="text-neutral-700 hover:text-security-600 transition-colors font-heading font-medium text-left px-3 py-3 rounded-lg hover:bg-neutral-50"
              >
                Zabezpečení
              </a>
              <button
                onClick={() => scrollToSection('o-nas')}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-heading font-medium text-left px-3 py-3 rounded-lg hover:bg-neutral-50"
              >
                O nás
              </button>
              <div className="pt-3">
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="w-full bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors font-heading font-medium text-center"
                >
                  Kontakt
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
