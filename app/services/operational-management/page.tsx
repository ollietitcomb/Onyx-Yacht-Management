import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Operational Management',
  description:
    'Financial, legal, and administrative yacht management: insurance, compliance, budgeting, and supplier contracts.',
};

const features = [
  'Insurance procurement and claims management',
  'VAT and flag state compliance',
  'Budget forecasting and cost control',
  'Supplier contract negotiation',
  'Certification and documentation',
  'Financial reporting and transparency',
  'Regulatory compliance',
  'Administrative support',
];

export default function OperationalManagementPage() {
  return (
    <>
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gold/20 p-3">
              <FileText className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-sans text-5xl font-bold text-white sm:text-6xl">
              Operational Management
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-lg text-neutral-200">
            Comprehensive financial, legal, and administrative management. We
            handle the complexity so you can enjoy your yacht.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-sans text-3xl font-bold text-ink">
            Complete Operational Oversight
          </h2>
          <p className="mt-4 max-w-2xl text-slate">
            Running a yacht involves complex financial, legal, and administrative
            requirements. Our operational management service provides a single
            point of accountability for all non-technical aspects.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Financial Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-sm text-slate">
                      Transparent budget forecasting and tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-sm text-slate">
                      Supplier payment processing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-sm text-slate">
                      Cost optimization and benchmarking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-sm text-slate">
                      Monthly financial reporting
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance & Legal</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-sm text-slate">
                      MCA coding and certification
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-sm text-slate">
                      Flag state compliance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-sm text-slate">
                      VAT and tax optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-sm text-slate">
                      Insurance coverage review
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
