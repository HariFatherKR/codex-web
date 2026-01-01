'use client';

import type { ReactNode } from 'react';
import { LanguageProvider } from './components/LanguageProvider';

const Providers = ({ children }: { children: ReactNode }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default Providers;
