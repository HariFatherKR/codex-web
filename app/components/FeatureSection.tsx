'use client';

import SectionHeader from './SectionHeader';
import { useLanguage } from './LanguageProvider';

const FeatureSection = () => {
  const {
    copy: { features },
  } = useLanguage();

  return (
    <section
      id="features"
      className="relative z-10 px-6 py-20 sm:px-10 lg:py-24"
      aria-labelledby="feature-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow={features.eyebrow}
          title={features.title}
          description={features.description}
          align="center"
          id="feature-heading"
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.humanNotes.map((note) => (
            <p
              key={note}
              className="rounded-2xl bg-slate-900/70 px-5 py-4 text-base font-semibold text-indigo-100 ring-1 ring-white/5"
            >
              {note}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {features.list.map((feature) => (
            <article
              key={feature.title}
              className="group flex h-full flex-col gap-3 rounded-2xl bg-slate-900/70 p-6 text-left shadow-[0_20px_60px_rgba(10,16,32,0.45)] ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-indigo-200/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-xl text-indigo-100 shadow-inner shadow-indigo-900/40">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-base leading-relaxed text-slate-200/85">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
