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
    description: 'Winter lay-up, spring commissioning, summer support—all covered.',
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
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-5xl">
            Why Onyx
          </h2>
          <p className="mt-4 text-lg text-slate">
            Built on rigorous standards and decades of expertise.
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
              <Card className="h-full transition-all hover:shadow-xl hover:border-gold">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3">
                    <value.icon className="h-6 w-6 text-gold" />
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
