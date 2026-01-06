'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Initial consultation, vessel audit, and needs assessment. We understand your goals and current state.',
  },
  {
    number: '02',
    title: 'Stabilise',
    description:
      'Address critical compliance, safety, and operational gaps. Establish baseline standards and protocols.',
  },
  {
    number: '03',
    title: 'Optimise',
    description:
      'Implement efficient systems, refine crew operations, and negotiate better supplier terms.',
  },
  {
    number: '04',
    title: 'Care',
    description:
      'Ongoing management, transparent reporting, and proactive maintenance. Your vessel, perfected.',
  },
];

export function Process() {
  return (
    <section className="section-padding bg-fog">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="font-sans text-4xl font-bold text-ink sm:text-5xl">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-slate">
            A proven process for comprehensive yacht management.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-1 w-full bg-gradient-to-r from-gold to-gold/20 lg:block"></div>
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold bg-white shadow-lg">
                  <span className="font-sans text-3xl font-bold text-gold">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-sans text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-slate">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
