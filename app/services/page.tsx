import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import {
  Wrench,
  FileText,
  Users,
  Sparkles,
  Ship,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive yacht management services: technical, operational, crew, concierge, and charter management.',
};

const services = [
  {
    icon: Wrench,
    title: 'Technical Management',
    description:
      'Comprehensive technical oversight ensuring your vessel remains in peak condition.',
    bullets: [
      'Planned maintenance scheduling & execution',
      'Refit & yard period management',
      'Safety audits & compliance checks',
      'Surveyor coordination',
    ],
    href: '/services/technical-management',
  },
  {
    icon: FileText,
    title: 'Operational Management',
    description:
      'Financial, legal, and administrative management for seamless operations.',
    bullets: [
      'Insurance procurement & claims',
      'VAT & flag state compliance',
      'Budget forecasting & control',
      'Supplier contract negotiations',
    ],
    href: '/services/operational-management',
  },
  {
    icon: Users,
    title: 'Crew Management',
    description:
      'Professional crew recruitment, training, and HR compliance.',
    bullets: [
      'Crew recruitment & vetting',
      'Payroll & contract administration',
      'MLC & employment law compliance',
      'Training & certification tracking',
    ],
    href: '/services/crew-management',
  },
  {
    icon: Sparkles,
    title: 'Concierge',
    description:
      'White-glove support for berthing, provisioning, and guest experiences.',
    bullets: [
      'Marina & berth bookings',
      'Provisioning & logistics',
      'Guest itinerary planning',
      'Local expertise & recommendations',
    ],
    href: '/services/concierge',
  },
  {
    icon: Ship,
    title: 'Charter Management',
    description:
      'Full charter marketing, booking, and guest logistics (optional service).',
    bullets: [
      'Charter marketing & listings',
      'Guest booking coordination',
      'Charter compliance & contracts',
      'Revenue optimization',
    ],
    href: '/services/charter-management',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl">
              Full-Scope Yacht Management
            </h1>
            <p className="mt-6 text-lg text-neutral-200">
              From technical oversight to crew management, Onyx delivers
              comprehensive, transparent, and proactive care for every aspect of
              your vessel.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-fog">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl font-bold text-ink">
            Not sure which services you need?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Let's discuss your vessel and build a bespoke package.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
