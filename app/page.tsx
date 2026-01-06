import { Hero } from '@/components/hero';
import { ValueGrid } from '@/components/value-grid';
import { Process } from '@/components/process';
import { Stats } from '@/components/stats';
import { TestimonialSection } from '@/components/testimonial';
import { LogosMarquee } from '@/components/logos-marquee';
import { Pricing } from '@/components/pricing';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/service-card';
import {
  Wrench,
  FileText,
  Users,
  Sparkles,
  Ship,
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Technical Management',
    description: 'Planned maintenance, refits, yard periods, and audits.',
    bullets: [
      'Preventive maintenance scheduling',
      'Refit project management',
      'Surveyor coordination',
    ],
    href: '/services/technical-management',
  },
  {
    icon: FileText,
    title: 'Operational Management',
    description: 'Insurance, finance, VAT, and supplier contracts.',
    bullets: [
      'Compliance & certification',
      'Budget management',
      'Supplier negotiations',
    ],
    href: '/services/operational-management',
  },
  {
    icon: Users,
    title: 'Crew Management',
    description: 'Recruitment, payroll, MLC compliance, and HR.',
    bullets: [
      'Professional crew recruitment',
      'Payroll & contracts',
      'Training coordination',
    ],
    href: '/services/crew-management',
  },
  {
    icon: Sparkles,
    title: 'Concierge',
    description: 'Berthing, provisioning, and guest itineraries.',
    bullets: [
      'Marina bookings',
      'Provisioning services',
      'Guest coordination',
    ],
    href: '/services/concierge',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Professional management for UK coastal vessels."
        subcopy="From day boats to yachts—rigorous maintenance, transparent costs, and expert support across the Solent, South Coast, and beyond."
        primaryCta={{ text: 'Request a consultation', href: '/contact' }}
        secondaryCta={{ text: 'Explore services', href: '/services' }}
      />

      <ValueGrid />

      <section className="section-padding bg-fog">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-sans text-4xl font-bold text-ink sm:text-5xl">
              Comprehensive Services
            </h2>
            <p className="mt-4 text-lg text-slate">
              Full-scope management for every aspect of your vessel.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Process />

      <Stats />

      <TestimonialSection />

      <LogosMarquee />

      <Pricing />

      {/* Final CTA */}
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-sans text-4xl font-bold text-white sm:text-5xl">
            Ready to elevate your yacht management?
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Schedule a consultation and discover the Onyx difference.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
