'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 32, label: 'Vessels Under Management', suffix: '+' },
  { value: 45, label: 'Average Vessel Size (ft)', suffix: '' },
  { value: 2, label: 'Average Response Time', suffix: 'h' },
  { value: 98, label: 'Client Retention Rate', suffix: '%' },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  return (
    <section className="section-padding bg-onyx grain-overlay">
      <div className="container-custom">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className="font-sans text-5xl font-bold text-gold sm:text-6xl">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-wider text-neutral-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
