import './globals.css';

export const metadata = {
  title: '하리아빠 버튼 데모',
  description: '버튼을 눌러 메시지를 바꿀 수 있는 가벼운 데모 페이지입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
