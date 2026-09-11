'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  TrendingUp,
  Clock,
  Network,
  Leaf,
  CheckCircle2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    icon: Shield,
    title: 'UK expertise',
    description: 'Solent-based with deep local knowledge. South Coast specialists.',
  },
  {
    icon: TrendingUp,
    title: 'No surprises',
    description: 'Fixed monthly retainers. Transparent costs. No hidden fees.',
  },
  {
    icon: Clock,
    title: 'Owner-first service',
    description: 'Most vessels are owner-operated. We understand your priorities.',
  },
  {
    icon: Network,
    title: 'Trusted yards & suppliers',
    description: 'Established relationships across the Solent, Hamble, and South Coast.',
  },
  {
    icon: Leaf,
    title: 'Seasonal planning',
    description: 'Winter lay-up, spring commissioning, summer support, all covered.',
  },
  {
    icon: CheckCircle2,
    title: 'Right-sized service',
    description: 'No superyacht overheads. Efficient management for coastal vessels.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ValueGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
            Why Onyx
          </p>
          <h2 className="mt-3 font-sans text-[38px] font-light tracking-[-0.02em] text-ink sm:text-5xl">
            Built on rigorous standards
          </h2>
          <p className="mt-4 text-lg font-light text-slate">
            Decades of expertise, applied to the vessels you actually use.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-sm border-[0.5px] border-neutral-200 p-3">
                    <value.icon className="h-6 w-6 text-ink" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
