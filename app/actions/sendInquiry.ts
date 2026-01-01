'use server';

import type { LanguageKey } from '../data/translations';
import { inquiryMessages } from '../data/translations';

export type InquiryFormState = {
  status: 'idle' | 'error' | 'success';
  message: string;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sendInquiry(
  _prevState: InquiryFormState,
  formData: FormData
): Promise<InquiryFormState> {
  const langField = formData.get('lang')?.toString();
  const lang: LanguageKey = langField === 'en' ? 'en' : 'ko';
  const copy = inquiryMessages[lang];

  const name = formData.get('name')?.toString().trim();
  const contact = formData.get('contact')?.toString().trim();
  const type = formData.get('type')?.toString() as 'lecture' | 'collaboration' | 'other' | null;
  const readableType = type ? copy.typeLabels[type] : '';

  if (!name || !contact) {
    return {
      status: 'error',
      message: copy.missingFields,
    };
  }

  await delay(400);

  const summary = readableType ? ` (${readableType})` : '';

  return {
    status: 'success',
    message: `${copy.successPrefix}${summary}. ${copy.successSuffix}`,
  };
}

export const initialInquiryState: InquiryFormState = {
  status: 'idle',
  message: '',
};
