'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../providers/LanguageProvider';

const Navbar = () => {
  const { lang, toggleLanguage, translation } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = translation.navbar.items;

  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace('#', '')), [navItems]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0.3,
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-6 sm:px-8">
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/5 px-4 py-3 shadow-[0_20px_60px_rgba(10,16,32,0.45)] transition ${
          isScrolled ? 'bg-slate-950/75 backdrop-blur supports-[backdrop-filter]:bg-slate-950/80' : 'bg-white/5'
        }`}
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-indigo-100">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" aria-hidden="true" />
          <span>{translation.navbar.brand}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white shadow-inner transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-label="Toggle language"
            aria-pressed={lang === 'en'}
          >
            <span className={lang === 'ko' ? 'text-white' : 'text-slate-300/80'}>KR</span>
            <span className="text-white/50">|</span>
            <span className={lang === 'en' ? 'text-white' : 'text-slate-300/80'}>EN</span>
          </button>

          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-inner transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden ${
              isMenuOpen ? 'bg-white/15 ring-1 ring-white/30' : 'hover:bg-white/10'
            }`}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? 'top-2.5 rotate-45' : 'top-1'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${
                  isMenuOpen ? 'top-2.5 opacity-0' : 'top-2.5 opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? 'top-2.5 -rotate-45' : 'top-4'
                }`}
              />
            </div>
          </button>

          <ul className="hidden items-center gap-2 sm:gap-3 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-4 ${
                      isActive
                        ? 'bg-white/15 text-white ring-1 ring-white/30'
                        : 'text-slate-200/80 hover:bg-white/10 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-start justify-end bg-slate-950/50 p-4 backdrop-blur-sm md:hidden">
          <div className="mt-20 w-full max-w-xs rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl">
            <ul className="flex flex-col divide-y divide-white/5 text-base text-white">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-2 py-3 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                        isActive ? 'text-emerald-200' : 'text-slate-100 hover:text-white'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      <span className="text-xs text-slate-400">↗</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
