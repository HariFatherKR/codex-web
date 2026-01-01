'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { getTranslation, type Language, type TranslationContent } from '../data/translations';

type LanguageContextType = {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  translation: TranslationContent;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('ko');

  const toggleLanguage = () => setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));

  const value = useMemo(
    () => ({
      lang,
      toggleLanguage,
      setLanguage: setLang,
      translation: getTranslation(lang),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
