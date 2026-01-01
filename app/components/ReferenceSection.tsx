import { references } from '../data/content';
import SectionHeader from './SectionHeader';

const ReferenceSection = () => {
  return (
    <section id="references" className="relative z-10 px-6 py-16 sm:px-10" aria-labelledby="reference-heading">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow="Experience"
          title="실전으로 증명된 강의와 협업"
          description="초기 콘텐츠는 하드코딩으로 제공되며, 추후 CMS 연동을 고려한 구조입니다."
          align="center"
          id="reference-heading"
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {references.map((reference) => (
            <article
              key={reference.title}
              className="flex h-full flex-col gap-3 rounded-2xl bg-white/5 p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.35)] ring-1 ring-white/10"
            >
              <h3 className="text-xl font-semibold text-white">{reference.title}</h3>
              <p className="text-base leading-relaxed text-slate-200/85">{reference.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferenceSection;
