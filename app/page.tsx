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
  MessageSquare,
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Technical Management',
    description: 'Oversight and coordination to keep your vessel reliable and well maintained.',
    bullets: [
      'Planned maintenance scheduling & coordination',
      'Refit and yard period oversight',
      'Safety equipment checks & compliance support',
      'Surveyor and specialist liaison',
    ],
    href: '/services/technical-management',
  },
  {
    icon: FileText,
    title: 'Operational Support',
    description: 'Clear, efficient coordination of the key operational elements that matter most.',
    bullets: [
      'Insurance liaison and claims support',
      'Budget planning & cost visibility',
      'Supplier coordination and oversight',
      'Maintenance documentation & reporting',
    ],
    href: '/services/operational-management',
  },
  {
    icon: Users,
    title: 'Crew Coordination',
    description: 'Light-touch crew support focused on operations, not HR.',
    bullets: [
      'Crew scheduling and day-to-day coordination',
      'Relief crew sourcing (where required)',
      'Training and certification tracking',
      'Operational support for owner-run vessels',
    ],
    href: '/services/crew-management',
  },
  {
    icon: Sparkles,
    title: 'Vessel Logistics',
    description: 'Practical support for berthing, movements, and general logistics.',
    bullets: [
      'Marina and berth coordination',
      'Fuel, services, and supplier access',
      'Pre-arrival and pre-departure preparation',
      'Local operational support',
    ],
    href: '/services/concierge',
  },
  {
    icon: Ship,
    title: 'Charter Support (Optional)',
    description: 'Charter-ready oversight without full charter management.',
    bullets: [
      'Charter compliance coordination',
      'Liaison with charter managers and agents',
      'Pre- and post-charter condition checks',
      'Maintenance and readiness support',
    ],
    href: '/services/charter-management',
  },
  {
    icon: MessageSquare,
    title: 'Owner Support & Advisory',
    description: 'Clear guidance and decision support whenever you need it.',
    bullets: [
      'Independent advice on maintenance and upgrades',
      'Second-opinion reviews on quotes and proposed works',
      'Purchase, pre-survey, and handover support',
      'Ongoing owner guidance without obligation',
    ],
    href: '/contact',
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
              Full-Scope Yacht Management
            </h2>
            <p className="mt-4 text-lg text-slate">
              Practical, proactive yacht management focused on keeping your vessel safe, maintained, and ready to use — without unnecessary complexity or admin overhead.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
