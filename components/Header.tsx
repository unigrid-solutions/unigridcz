'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Image
              src="/logo.svg"
              alt="Unigrid Solutions"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button
              onClick={() => scrollToSection('sluzby')}
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection('o-nas')}
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
            >
              O nás
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('sluzby')}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium text-left px-2 py-2"
              >
                Služby
              </button>
              <button
                onClick={() => scrollToSection('o-nas')}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium text-left px-2 py-2"
              >
                O nás
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
