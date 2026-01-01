import Link from 'next/link';

const KAKAO_CHAT_URL = 'https://open.kakao.com/o/XXXXXX';

export default function KakaoFloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={KAKAO_CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] text-slate-900 shadow-lg shadow-amber-200/50 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FEE500]"
        aria-label="카카오톡 문의"
      >
        <span className="text-xl font-semibold">K</span>
        <span className="pointer-events-none absolute right-full mr-3 hidden min-w-max rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-slate-50 shadow-md transition-opacity duration-200 group-hover:block group-focus-visible:block">
          카카오톡 문의
        </span>
      </Link>
    </div>
  );
}
