import Link from 'next/link';
import { Logo } from '@/components/logo';

const footerLinks = {
  services: [
    { name: 'Technical Management', href: '/services/technical-management' },
    { name: 'Operational Management', href: '/services/operational-management' },
    { name: 'Crew Management', href: '/services/crew-management' },
    { name: 'Concierge', href: '/services/concierge' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Enquire', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t-[0.5px] border-neutral-200 bg-[#f7f7f5]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] font-light leading-relaxed text-slate">
              Discreet, full-scope yacht management across the UK and the
              Mediterranean.
            </p>
            <div className="mt-6 space-y-2 text-[14px] font-light text-slate">
              <a
                href="tel:+447950228858"
                className="block transition-colors hover:text-ink"
              >
                +44 (0) 7950 228858
              </a>
              <a
                href="mailto:info@onyxyachtmanagement.com"
                className="block transition-colors hover:text-ink"
              >
                info@onyxyachtmanagement.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-light text-slate transition-colors hover:text-ink"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-light text-slate transition-colors hover:text-ink"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Legal
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-light text-slate transition-colors hover:text-ink"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-neutral-400">
            &copy; {new Date().getFullYear()} Onyx Yacht Management. All rights
            reserved.
          </p>
          <p className="text-[12px] text-neutral-300">
            onyxyachtmanagement.com
          </p>
        </div>
      </div>
    </footer>
  );
}
