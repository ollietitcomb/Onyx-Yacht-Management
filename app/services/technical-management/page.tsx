import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Management',
  description:
    'Comprehensive technical yacht management: planned maintenance, refits, yard periods, and safety audits.',
};

const features = [
  'Planned maintenance scheduling and execution',
  'Refit and yard period management',
  'Safety audits and compliance inspections',
  'Surveyor coordination and reporting',
  'Equipment lifecycle management',
  'Emergency technical support',
  'Warranty management',
  'Technical documentation',
];

const process = [
  {
    title: 'Initial Assessment',
    description: 'Comprehensive technical audit of your vessel and all systems.',
  },
  {
    title: 'Maintenance Planning',
    description: 'Create customized preventive maintenance schedules.',
  },
  {
    title: 'Execution & Oversight',
    description: 'Coordinate all technical work with trusted suppliers.',
  },
  {
    title: 'Reporting',
    description: 'Transparent reporting on all technical activities and costs.',
  },
];

export default function TechnicalManagementPage() {
  return (
    <>
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gold/20 p-3">
              <Wrench className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl">
              Technical Management
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-lg text-neutral-200">
            Proactive, comprehensive technical oversight to keep your vessel in
            peak condition, maintain value, and ensure safety.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-ink">
                What's Included
              </h2>
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-slate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-ink">
                Our Process
              </h2>
              <div className="mt-8 space-y-6">
                {process.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold text-white font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1 text-sm text-slate">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-fog">
        <div className="container-custom">
          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl">Why Technical Management Matters</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral max-w-none">
              <p>
                A yacht is a complex asset requiring expert technical oversight.
                Deferred maintenance leads to costly failures, compliance issues,
                and diminished resale value.
              </p>
              <p>
                Our technical management service ensures every system is
                maintained to manufacturer specifications, all safety equipment
                is current, and potential issues are identified before they become
                problems.
              </p>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Discuss Your Technical Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
