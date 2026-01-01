'use server';

import { getTranslation, type Language } from '../data/translations';

export type InquiryFormState = {
  status: 'idle' | 'error' | 'success';
  message: string;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sendInquiry(
  _prevState: InquiryFormState,
  formData: FormData
): Promise<InquiryFormState> {
  const langValue = formData.get('lang')?.toString();
  const lang: Language = langValue === 'en' ? 'en' : 'ko';
  const translation = getTranslation(lang);
  const name = formData.get('name')?.toString().trim();
  const contact = formData.get('contact')?.toString().trim();
  const type = formData.get('type')?.toString();
  const readableType = translation.cta.inquiryTypes.find((option) => option.value === type)?.label ?? '';

  if (!name || !contact) {
    return {
      status: 'error',
      message: translation.cta.missingFields,
    };
  }

  await delay(400);

  const summary = readableType ? ` (${readableType})` : '';

  return {
    status: 'success',
    message: `${translation.cta.successPrefix}${summary}${translation.cta.successSuffix}`,
  };
}

export const initialInquiryState: InquiryFormState = {
  status: 'idle',
  message: '',
};
