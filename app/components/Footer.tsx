const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950/70 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-slate-200/85">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200/80">Identity</p>
        <h3 className="text-2xl font-bold text-white">정설민 · 하리 아빠</h3>
        <p className="text-base leading-relaxed text-slate-200/80">바이브 코딩을 가르칩니다. 함께 만들고 싶은 아이디어가 있다면 언제든 편하게 메시지 주세요.</p>
      </div>
    </footer>
  );
};

export default Footer;
