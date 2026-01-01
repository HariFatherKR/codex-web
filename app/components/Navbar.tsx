'use client';

import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';

const Navbar = () => {
  const { copy } = useLanguage();
  const { nav } = copy;

  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-center px-6 py-4 sm:px-10">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full bg-slate-900/70 px-4 py-3 shadow-[0_18px_40px_rgba(10,16,32,0.45)] ring-1 ring-white/10 backdrop-blur">
        <div className="flex items-center gap-3 text-sm font-semibold text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/20 text-base text-indigo-100 ring-1 ring-indigo-200/40 shadow-inner shadow-indigo-900/40">
            AI
          </div>
          <div className="flex flex-col leading-tight">
            <span>{nav.brand}</span>
            <span className="text-xs font-normal text-slate-300/80">{nav.descriptor}</span>
          </div>
        </div>
        <LanguageToggle />
      </nav>
    </header>
  );
};

export default Navbar;
