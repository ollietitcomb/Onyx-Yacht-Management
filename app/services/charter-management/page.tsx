import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ship, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Charter Management',
  description:
    'Full charter management: marketing, bookings, compliance, and guest logistics (optional service).',
};

export default function CharterManagementPage() {
  return (
    <>
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gold/20 p-3">
              <Ship className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl">
              Charter Management
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-lg text-neutral-200">
            Maximize charter revenue with professional marketing, booking
            coordination, and compliance management.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-gold" />
              <div>
                <h3 className="font-semibold text-ink">Optional Service</h3>
                <p className="mt-1 text-sm text-slate">
                  Charter management is available as an add-on service for vessels
                  seeking to generate charter income. Contact us to discuss
                  eligibility and options.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-serif text-3xl font-bold text-ink">
              What We Offer
            </h2>
            <p className="mt-4 text-slate">
              Our charter management service covers marketing, guest coordination,
              compliance, and revenue optimization.
            </p>

            <ul className="mt-8 space-y-3 text-slate">
              <li>• Charter marketing and listings</li>
              <li>• Guest booking and contract management</li>
              <li>• Charter compliance and MCA coding</li>
              <li>• Guest logistics and itinerary planning</li>
              <li>• Revenue optimization and yield management</li>
              <li>• Post-charter reporting and feedback</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Inquire About Charter Management</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
