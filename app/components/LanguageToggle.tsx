'use client';

import { useLanguage } from './LanguageProvider';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  const handleToggle = (nextLang: 'ko' | 'en') => {
    setLang(nextLang);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/5 p-1 text-xs font-semibold text-slate-200 ring-1 ring-white/15 shadow-sm">
      {(
        [
          { code: 'ko', label: 'KR' },
          { code: 'en', label: 'EN' },
        ] as const
      ).map((option) => {
        const isActive = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => handleToggle(option.code)}
            className={`min-w-[42px] rounded-full px-3 py-1 transition ${
              isActive
                ? 'bg-indigo-400 text-slate-950 shadow-[0_8px_20px_rgba(99,102,241,0.35)]'
                : 'text-slate-200 hover:bg-white/10'
            }`}
            aria-pressed={isActive}
            aria-label={option.code === 'ko' ? '한국어로 보기' : 'View in English'}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
