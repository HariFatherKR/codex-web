import { references } from '../data/content';
import SectionHeader from './SectionHeader';

const ReferenceSection = () => {
  return (
    <section
      id="references"
      className="relative z-10 px-6 py-20 scroll-mt-28 sm:px-10 lg:py-24"
      aria-labelledby="reference-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow="Experience"
          title="실전으로 증명된 강의와 협업"
          description="강의, 워크숍, 프로젝트까지 결과물과 팀워크를 중심으로 쌓아온 기록입니다."
          align="center"
          id="reference-heading"
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {references.map((reference) => (
            <article
              key={reference.title}
              className="flex h-full flex-col gap-3 rounded-2xl bg-slate-900/70 p-6 text-left shadow-[0_20px_60px_rgba(10,16,32,0.45)] ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-indigo-200/40"
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-300" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">{reference.title}</h3>
              </div>
              <p className="text-base leading-relaxed text-slate-200/85">{reference.description}</p>
              <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100 ring-1 ring-indigo-300/30">
                정리된 경험
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferenceSection;
