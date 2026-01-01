'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { ctaCopy, inquiryTypes } from '../data/content';
import { initialInquiryState, sendInquiry } from '../actions/sendInquiry';
import SectionHeader from './SectionHeader';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-4 py-3 text-base font-semibold text-slate-950 shadow-[0_10px_30px_rgba(52,211,153,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(52,211,153,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-80"
      disabled={pending}
    >
      {pending ? '보내는 중...' : ctaCopy.submitLabel}
    </button>
  );
};

const CTASection = () => {
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
      className="relative z-10 px-6 py-24 sm:px-10"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-x-6 top-6 h-44 rounded-3xl bg-gradient-to-b from-emerald-300/25 via-transparent to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-slate-900/70 p-8 shadow-[0_25px_80px_rgba(10,16,32,0.5)] ring-1 ring-white/10 sm:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Contact"
              title={ctaCopy.heading}
              description={ctaCopy.subheading}
              id="cta-heading"
            />
            <ul className="space-y-3 text-sm text-slate-200/80">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/15 text-lg text-indigo-100">💡</span>
                <span>필요한 목표와 상황을 알려주시면 가장 실용적인 방식으로 제안드립니다.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/15 text-lg text-indigo-100">⏱️</span>
                <span>바로 실행 가능한 액션 플랜을 함께 만듭니다.</span>
              </li>
              <li className="flex items-center gap-3 text-emerald-200/90">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 text-lg text-emerald-200">🤝</span>
                <span>{ctaCopy.microcopy}</span>
              </li>
            </ul>
          </div>

          <form
            ref={formRef}
            action={formAction}
            className="flex w-full flex-col gap-4 rounded-2xl bg-slate-950/60 p-6 ring-1 ring-white/10"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-white">
                이름<span className="text-indigo-200">*</span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="이름 또는 팀명을 입력하세요"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200/60"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-white">
                연락처 또는 이메일<span className="text-indigo-200">*</span>
                <input
                  required
                  name="contact"
                  type="text"
                  autoComplete="email"
                  placeholder="연락받을 정보를 남겨주세요"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200/60"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-semibold text-white">
              문의 유형 (선택)
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {inquiryTypes.map((option) => (
                  <label
                    key={option.value}
                    className="group flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-indigo-200/70 hover:text-indigo-100"
                  >
                    <input
                      type="radio"
                      name="type"
                      value={option.value}
                      className="accent-emerald-400"
                    />
                    <span className="font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </label>

            <div className="flex flex-col gap-2">
              <SubmitButton />
              <p className="text-sm text-slate-300/85">{ctaCopy.responseTime}</p>
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
