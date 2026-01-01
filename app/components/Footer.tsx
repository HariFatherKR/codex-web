import { socialLinks } from '../data/socialLinks';

type SocialIconKey = (typeof socialLinks)[number]['icon'];

const Icon = ({ name }: { name: SocialIconKey }) => {
  switch (name) {
    case 'youtube':
      return (
        <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.8 8.5a2.6 2.6 0 0 0-1.8-1.9C18.2 6.2 12 6.2 12 6.2s-6.2 0-8 .4A2.6 2.6 0 0 0 2.2 8.5 27.3 27.3 0 0 0 2 12a27.3 27.3 0 0 0 .2 3.5 2.6 2.6 0 0 0 1.8 1.9c1.8.4 8 .4 8 .4s6.2 0 8-.4a2.6 2.6 0 0 0 1.8-1.9c.2-1.1.2-2.3.2-3.5 0-1.2 0-2.4-.2-3.5Z" />
          <path d="m10 9 4.6 3L10 15V9Z" className="fill-slate-950" />
        </svg>
      );
    case 'x':
      return (
        <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="m4.5 4 6.2 8-6 8H8l4-5.6L15.7 20H20l-6.3-8L19.6 4H16L12.6 9.1 9.3 4H4.5Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.5 4h9A3.5 3.5 0 0 1 20 7.5v9A3.5 3.5 0 0 1 16.5 20h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4Zm0 2A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h9A1.5 1.5 0 0 0 18 16.5v-9A1.5 1.5 0 0 0 16.5 6h-9Z" />
          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
          <circle cx="16.5" cy="7.5" r="1" />
        </svg>
      );
    case 'github':
      return (
        <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 .5C5.6.5.5 5.6.5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3 .9.1-.6.3-1 .6-1.3-2.5-.3-5-1.3-5-5.6 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.5.1-3 0 0 .9-.3 3 .1a10.6 10.6 0 0 1 5.5 0c2.1-.4 3-.1 3-.1.6 1.5.2 2.7.1 3a5 5 0 0 1 1.1 3.2c0 4.3-2.5 5.3-5 5.6.4.3.7.9.7 1.8v2.6c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.6 18.4.5 12 .5Z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/5 bg-slate-950/70 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-slate-200/85">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200/80">Identity</p>
          <h3 className="text-2xl font-bold text-white">정설민 · 하리 아빠</h3>
          <p className="text-base leading-relaxed text-slate-200/80">바이브 코딩을 가르칩니다. 함께 만들고 싶은 아이디어가 있다면 언제든 편하게 메시지 주세요.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200/70">
          <span className="rounded-full bg-white/5 px-3 py-1 font-medium text-white/90">“바이브 코딩을 가르칩니다”</span>
          <span className="text-slate-400">정체성을 담은 한 문장으로 기억해 주세요.</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <span className="text-indigo-200 transition group-hover:text-white">
                <Icon name={link.icon} />
              </span>
              <span className="tracking-tight text-slate-100/90">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
