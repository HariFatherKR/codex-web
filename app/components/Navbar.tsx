'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'References', href: '#references' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace('#', '')), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <span>바이브 코딩</span>
        </div>

        <ul className="flex items-center gap-2 sm:gap-3">
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
      </nav>
    </header>
  );
};

export default Navbar;
