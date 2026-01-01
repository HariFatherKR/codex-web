'use server';

export type InquiryFormState = {
  status: 'idle' | 'error' | 'success';
  message: string;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sendInquiry(
  _prevState: InquiryFormState,
  formData: FormData
): Promise<InquiryFormState> {
  const name = formData.get('name')?.toString().trim();
  const contact = formData.get('contact')?.toString().trim();
  const type = formData.get('type')?.toString();
  const readableType =
    type === 'lecture' ? '강의' : type === 'collaboration' ? '협업' : type === 'other' ? '기타' : '';

  if (!name || !contact) {
    return {
      status: 'error',
      message: '이름과 연락처를 입력해 주세요.',
    };
  }

  await delay(400);

  const summary = readableType ? ` (${readableType})` : '';

  return {
    status: 'success',
    message: `문의가 전달되었습니다${summary}. 빠르게 답변드릴게요!`,
  };
}

export const initialInquiryState: InquiryFormState = {
  status: 'idle',
  message: '',
};
