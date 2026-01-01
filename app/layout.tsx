import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '정설민(하리 아빠) · 바이브 코딩 강의자',
  description: 'AI와 함께 코딩하는 감각을 전하는 바이브 코딩 강의자, 정설민(하리 아빠) 소개 페이지입니다.',
  keywords: ['바이브 코딩', 'AI 코딩', '정설민', '하리 아빠', '워크숍', '협업'],
  openGraph: {
    title: '정설민(하리 아빠) · 바이브 코딩 강의자',
    description: '문법보다 흐름, 기술보다 결과에 집중하는 AI 코딩 강의자를 만나보세요.',
    url: 'https://example.com',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
