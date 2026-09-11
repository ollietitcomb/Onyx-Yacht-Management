'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/logo';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-[border-color] duration-300 border-b-[0.5px] ${
        scrolled ? 'border-neutral-200' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-5 md:flex lg:gap-8" aria-label="Primary">
          {navigation.map((item) => {
            const active =
              item.href.startsWith('/#')
                ? false
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.1em] transition-colors duration-150 hover:text-ink ${
                  active ? 'text-ink' : 'text-slate'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <span
            className="cursor-not-allowed text-[10px] uppercase tracking-[0.16em] text-neutral-300"
            title="Coming soon"
          >
            Owner login
          </span>
          <Link
            href="/contact"
            className="rounded-sm border-[0.5px] border-ink px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.1em] text-ink transition-colors duration-150 hover:bg-ink hover:text-white lg:px-5"
          >
            Enquire
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t-[0.5px] border-neutral-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6" aria-label="Mobile">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-ink"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center justify-center rounded-sm border-[0.5px] border-ink px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.1em] text-ink"
            >
              Enquire
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
