'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { initialInquiryState, sendInquiry } from '../actions/sendInquiry';
import SectionHeader from './SectionHeader';
import { useLanguage } from '../providers/LanguageProvider';

type SubmitButtonProps = {
  label: string;
  pendingLabel: string;
};

const SubmitButton = ({ label, pendingLabel }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-4 py-3 text-base font-semibold text-slate-950 shadow-[0_10px_30px_rgba(52,211,153,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(52,211,153,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-80"
      disabled={pending}
    >
      {pending ? pendingLabel : label}
    </button>
  );
};

const CTASection = () => {
  const {
    translation: { cta },
    lang,
  } = useLanguage();
  const [state, formAction] = useFormState(sendInquiry, initialInquiryState);
  const formRef = useRef<HTMLFormElement | null>(null);
  const messageTone = useMemo(() => {
    if (state.status === 'success') return 'text-emerald-300';
    if (state.status === 'error') return 'text-amber-200';
    return 'text-slate-200/90';
  }, [state.status]);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <section
      id="contact"
      className="relative z-10 px-6 py-24 scroll-mt-28 sm:px-10"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-x-6 top-6 h-44 rounded-3xl bg-gradient-to-b from-emerald-300/25 via-transparent to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-slate-900/80 p-8 shadow-[0_25px_80px_rgba(10,16,32,0.55)] ring-1 ring-white/10 sm:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeader
              eyebrow={cta.eyebrow}
              title={cta.heading}
              description={cta.subheading}
              id="cta-heading"
            />
            <div className="space-y-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200/85">
              <p className="flex items-center gap-2 font-semibold text-white">
                <span aria-hidden className="text-lg text-emerald-200">🤝</span>
                {cta.microcopy}
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            action={formAction}
            className="flex w-full flex-col gap-6 rounded-2xl bg-slate-950/80 p-8 ring-1 ring-white/10 backdrop-blur"
          >
            <input type="hidden" name="lang" value={lang} />
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{cta.contactHeading}</p>
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold text-indigo-100">{cta.requiredPill}</span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label htmlFor="name" className="space-y-2 text-sm font-semibold text-white">
                  <span className="text-slate-100">{cta.nameLabel}</span>
                  <input
                    id="name"
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={cta.namePlaceholder}
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-base text-white placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200/60"
                  />
                </label>
                <label htmlFor="contact" className="space-y-2 text-sm font-semibold text-white">
                  <span className="text-slate-100">{cta.contactLabel}</span>
                  <input
                    id="contact"
                    required
                    name="contact"
                    type="text"
                    autoComplete="email"
                    placeholder={cta.contactPlaceholder}
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-base text-white placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200/60"
                  />
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{cta.inquiryTypeLabel}</p>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] font-semibold text-emerald-200">{cta.optionalPill}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {cta.inquiryTypes.map((option) => (
                  <label
                    key={option.value}
                    htmlFor={option.value}
                    className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-indigo-200/70 hover:text-white focus-within:border-emerald-300 focus-within:ring-2 focus-within:ring-emerald-200/60"
                  >
                    <input
                      id={option.value}
                      type="radio"
                      name="type"
                      value={option.value}
                      className="peer sr-only"
                    />
                    <span className="block peer-checked:text-emerald-200">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{cta.detailsLabel}</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-100">{cta.optionalPill}</span>
              </div>
              <textarea
                name="details"
                rows={4}
                placeholder={cta.detailsPlaceholder}
                className="min-h-[150px] w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200/60 sm:min-h-[190px]"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <SubmitButton label={cta.submitLabel} pendingLabel={cta.submitPending} />
              <p className="text-sm text-slate-300/85">{cta.responseTime}</p>
            </div>

            {state.message ? (
              <p className={`text-sm font-medium ${messageTone}`} aria-live="polite">
                {state.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
