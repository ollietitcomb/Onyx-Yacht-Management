import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Concierge Services',
  description:
    'White-glove concierge: marina bookings, provisioning, guest itineraries, and local expertise.',
};

export default function ConciergePage() {
  return (
    <>
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gold/20 p-3">
              <Sparkles className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-sans text-5xl font-bold text-white sm:text-6xl">
              Concierge Services
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-lg text-neutral-200">
            White-glove support for berthing, provisioning, and unforgettable
            guest experiences.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-sans text-3xl font-bold text-ink">
            Effortless Experiences
          </h2>
          <p className="mt-4 text-slate">
            From securing prime berths to curating bespoke guest itineraries, our
            concierge service handles every detail.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              'Marina and berth bookings across the UK and Med',
              'Provisioning and logistics coordination',
              'Guest itinerary planning and recommendations',
              'Restaurant and event reservations',
              'Local expertise and insider access',
              'Ground transportation arrangements',
              'Special requests and bespoke services',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                <span className="text-slate">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Explore Concierge</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
