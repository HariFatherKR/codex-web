'use client';

import { useLanguage } from './LanguageProvider';

const Footer = () => {
  const {
    copy: { footer },
  } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950/70 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-slate-200/85">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200/80">{footer.eyebrow}</p>
        <h3 className="text-2xl font-bold text-white">{footer.title}</h3>
        <p className="text-base leading-relaxed text-slate-200/80">{footer.description}</p>
      </div>
    </footer>
  );
};

export default Footer;
