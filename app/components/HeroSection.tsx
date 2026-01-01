import Link from 'next/link';
import { heroContent } from '../data/content';

const HeroSection = () => {
  const { headline, subCopy, identity, ctaLabel } = heroContent;

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 sm:px-10"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.16),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(45,212,191,0.1),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" aria-hidden="true" />
          {identity.name} · {identity.nickname}
        </span>

        <div className="flex flex-col gap-4">
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {headline}
          </h1>
          <p className="text-lg leading-relaxed text-slate-200/90 sm:text-xl">{subCopy}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200/90">
          <div className="rounded-full bg-white/5 px-4 py-2 font-medium text-white shadow-sm ring-1 ring-white/10">
            {identity.roles[0]}
          </div>
          <div className="rounded-full bg-white/5 px-4 py-2 font-medium text-white shadow-sm ring-1 ring-white/10">
            {identity.roles[1]}
          </div>
          <div className="rounded-full bg-amber-300/15 px-4 py-2 font-semibold text-amber-200 ring-1 ring-amber-200/40">
            AI · Web · 자동화 실전
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(251,191,36,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {ctaLabel}
            <span className="ml-2 text-lg transition-transform group-hover:translate-x-0.5">↘</span>
          </Link>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300/70">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
