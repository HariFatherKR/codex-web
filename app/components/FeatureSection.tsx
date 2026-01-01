import { features } from '../data/content';
import SectionHeader from './SectionHeader';

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="relative z-10 px-6 py-16 sm:px-10 lg:py-24"
      aria-labelledby="feature-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow="Features"
          title="왜 바이브 코딩으로 배우면 좋을까요?"
          description="실무 감각과 AI 활용법을 동시에 익힐 수 있도록, 흐름과 결과에 집중한 강의를 준비했습니다."
          align="center"
          id="feature-heading"
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex h-full flex-col gap-3 rounded-2xl bg-white/5 p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.35)] ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-amber-200/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">{feature.icon}</div>
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
