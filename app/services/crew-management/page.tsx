import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Crew Management',
  description:
    'Professional crew management: recruitment, payroll, MLC compliance, training, and HR support.',
};

export default function CrewManagementPage() {
  return (
    <>
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gold/20 p-3">
              <Users className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl">
              Crew Management
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-lg text-neutral-200">
            Professional recruitment, payroll, compliance, and HR support. Build
            and retain exceptional crews.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-ink">
            Complete Crew Solutions
          </h2>
          <p className="mt-4 text-slate">
            Your crew is the heart of your yacht. We handle recruitment, compliance,
            payroll, and ongoing HR so you can focus on exceptional service.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              'Professional crew recruitment and vetting',
              'Employment contracts and onboarding',
              'Payroll processing and benefits administration',
              'MLC and employment law compliance',
              'Training and certification tracking',
              'Performance management support',
              'Crew rotation and relief planning',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                <span className="text-slate">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Discuss Crew Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
