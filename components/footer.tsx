import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
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
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-slate">
              Discreet, full-scope yacht management across the UK and the Mediterranean.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-slate">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>South Coast, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>+44 (0) XXXX XXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                <a
                  href="mailto:info@onyxyachtmanagement.com"
                  className="link-gold"
                >
                  info@onyxyachtmanagement.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-serif text-sm font-semibold text-ink">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate link-gold focus-ring rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-sm font-semibold text-ink">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate link-gold focus-ring rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-sm font-semibold text-ink">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate link-gold focus-ring rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-center text-sm text-slate">
            &copy; {new Date().getFullYear()} Onyx Yacht Management. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
