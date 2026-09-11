'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We take the time to understand your yacht, how you use it, and what matters most to you. This includes a practical review of the vessel, its systems, documentation, and any immediate issues.',
  },
  {
    number: '02',
    title: 'Secure',
    description:
      'We bring the yacht up to standard by addressing compliance, safety, maintenance, and operational gaps. Required repairs, servicing, and system improvements are identified and managed to ensure the yacht is sound and properly set up.',
  },
  {
    number: '03',
    title: 'Improve',
    description:
      'With the basics covered, we look at ways to make ownership simpler and more efficient. This may include improving maintenance planning, reducing avoidable costs, and refining how the yacht is operated day to day.',
  },
  {
    number: '04',
    title: 'Manage',
    description:
      'Ongoing support with clear communication, regular check-ins, and proactive maintenance oversight. Your yacht stays compliant, well maintained, and ready to enjoy, without unnecessary complexity or owner stress.',
  },
];

export function Process() {
  return (
    <section className="section-padding bg-fog">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
            Our approach
          </p>
          <h2 className="mt-3 font-sans text-[38px] font-light tracking-[-0.02em] text-ink sm:text-5xl">
            A proven process
          </h2>
          <p className="mt-4 text-lg font-light text-slate">
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
                <div className="absolute left-1/2 top-8 hidden h-px w-full bg-neutral-200 lg:block"></div>
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center bg-white">
                  <span className="font-sans text-3xl font-light text-neutral-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-sans text-[17px] font-medium text-ink">
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
