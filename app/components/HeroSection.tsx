import Link from 'next/link';
import { heroContent } from '../data/content';

const HeroSection = () => {
  const { headline, subCopy, identity, ctaLabel, trustNote } = heroContent;

  return (
    <section
      id="about"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 scroll-mt-28 sm:px-10"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(99,102,241,0.12),transparent_36%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.15),transparent_38%),radial-gradient(circle_at_50%_86%,rgba(63,63,70,0.16),transparent_34%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-indigo-100 ring-1 ring-indigo-300/30">
          <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-200" aria-hidden="true" />
          {identity.name} · {identity.nickname}
        </span>

        <div className="flex flex-col gap-5">
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            {headline}
          </h1>
          <p className="text-lg leading-relaxed text-slate-100/90 sm:text-xl">{subCopy}</p>
          <p className="text-base font-semibold text-indigo-100/90">{trustNote}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200/90">
          <div className="rounded-full bg-indigo-500/10 px-4 py-2 font-medium text-indigo-100 shadow-sm ring-1 ring-indigo-300/30">
            {identity.roles[0]}
          </div>
          <div className="rounded-full bg-indigo-500/10 px-4 py-2 font-medium text-indigo-100 shadow-sm ring-1 ring-indigo-300/30">
            {identity.roles[1]}
          </div>
          <div className="rounded-full bg-white/5 px-4 py-2 font-semibold text-slate-100 ring-1 ring-white/10">
            실전 경험 + AI 협업 파트너십
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_10px_30px_rgba(52,211,153,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(52,211,153,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {ctaLabel}
            <span className="ml-2 text-lg transition-transform group-hover:translate-x-0.5">↘</span>
          </Link>
          <p className="text-sm text-slate-300/80">안정적으로 함께할 파트너를 찾고 계시다면, 먼저 이야기 나눠보세요.</p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300/70">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
