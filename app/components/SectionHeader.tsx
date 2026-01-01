const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
}) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/80">
          {eyebrow}
        </span>
      ) : null}
      <h2 id={id} className="text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-slate-200/80 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
