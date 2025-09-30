'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Day Boats & Sports Cruisers',
    price: 'From £350',
    period: '/month',
    description: '37–45ft vessels. Axopar, Sunseeker Portofino, Princess V-Class.',
    features: [
      'Seasonal maintenance planning',
      'Antifouling & winterisation',
      'Safety equipment compliance',
      'Insurance liaison',
      'Quarterly check-ins',
    ],
  },
  {
    name: 'Coastal Cruisers',
    price: 'From £950',
    period: '/month',
    description: '45–65ft motor yachts. Fairline, Princess, Sunseeker.',
    features: [
      'Everything in Day Boats',
      'Full technical management',
      'MCA coding support',
      'Monthly inspections',
      'Crew coordination (if applicable)',
      'Marina & berthing liaison',
    ],
    highlighted: true,
  },
  {
    name: 'Premium Yachts',
    price: 'From £2,200',
    period: '/month',
    description: '65–90ft yachts. Sunseeker 80+, Princess 75+, Fairline Squadron.',
    features: [
      'Everything in Coastal Cruisers',
      'Dedicated management contact',
      'Refit project oversight',
      'Charter management (optional)',
      'Real-time budget tracking',
      'Med season coordination',
    ],
  },
];

export function Pricing() {
  return (
    <section className="section-padding bg-fog">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-5xl">
            Transparent Retainers
          </h2>
          <p className="mt-4 text-lg text-slate">
            Clear pricing. No surprises. Bespoke packages available.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full ${
                  tier.highlighted
                    ? 'border-gold shadow-2xl scale-105'
                    : 'hover:border-gold/50'
                } transition-all duration-200`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="font-serif text-4xl font-bold text-gold">
                      {tier.price}
                    </span>
                    <span className="text-slate">{tier.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                        <span className="text-sm text-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={tier.highlighted ? 'gold' : 'outline'}
                    className="w-full"
                  >
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate">
          All prices are guide retainers for UK-based vessels. Final packages tailored to your vessel, usage pattern, and requirements.
        </p>
      </div>
    </section>
  );
}
