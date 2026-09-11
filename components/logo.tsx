import Link from 'next/link';

type LogoProps = {
  href?: string;
  theme?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
};

export function Logo({
  href = '/',
  theme = 'dark',
  className = '',
  onClick,
}: LogoProps) {
  const wordmark = theme === 'light' ? 'text-white' : 'text-black';
  const subtitle = theme === 'light' ? 'text-white/55' : 'text-gray-400';

  const content = (
    <span className={`flex flex-col leading-none ${className}`}>
      <span
        className={`font-bold text-lg tracking-[0.18em] ${wordmark}`}
      >
        ONYX
      </span>
      <span
        className={`-mt-0.5 text-[9px] font-medium uppercase tracking-[0.22em] ${subtitle}`}
      >
        Yacht Management
      </span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      className="inline-flex"
      aria-label="Onyx Yacht Management home"
      onClick={onClick}
    >
      {content}
    </Link>
  );
}
