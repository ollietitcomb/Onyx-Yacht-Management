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
    description: "Hands-on oversight of the yacht's condition, maintenance, and technical requirements.",
    bullets: [
      'Planned maintenance and servicing schedules',
      'Refit coordination and yard periods',
      'Defect reporting, inspections, and audits',
      'Surveyor and contractor coordination',
    ],
    href: '/services/technical-management',
  },
  {
    icon: FileText,
    title: 'Operational Management',
    description: 'Managing the paperwork, compliance, and commercial details so nothing is missed.',
    bullets: [
      'Compliance and certification oversight',
      'Insurance, VAT, and regulatory support',
      'Budget tracking and cost control',
      'Supplier and contractor management',
    ],
    href: '/services/operational-management',
  },
  {
    icon: Users,
    title: 'Crew & Manning Support (As Required)',
    description: 'Flexible support for owner-operators or yachts with part-time or delivery crew.',
    bullets: [
      'Skipper and crew sourcing when needed',
      'Contracts and payroll coordination',
      'Certification and training support',
      'Relief and delivery crew arrangements',
    ],
    href: '/services/crew-management',
  },
  {
    icon: Sparkles,
    title: 'Owner Support & Concierge',
    description: "Making ownership simpler, whether you're using the yacht regularly or intermittently.",
    bullets: [
      'Berthing and marina arrangements',
      'Maintenance visits and checks',
      'Provisioning and preparation support',
      'Usage planning and guest logistics',
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
              Practical, end-to-end support for yacht ownership and operation.
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
