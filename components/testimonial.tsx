'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  author: string;
  vesselSize: string;
}

export function Testimonial({ quote, author, vesselSize }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <CardContent className="p-8">
          <Quote className="h-10 w-10 text-neutral-300" />
          <blockquote className="mt-4 font-sans text-xl font-light leading-relaxed text-ink">
            "{quote}"
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div>
              <div className="font-semibold text-ink">{author}</div>
              <div className="text-sm text-slate">{vesselSize}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function TestimonialSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
            Trusted aboard
          </p>
          <h2 className="mt-3 font-sans text-[38px] font-light tracking-[-0.02em] text-ink sm:text-5xl">
            Discretion and excellence, every time
          </h2>
          <p className="mt-4 text-lg font-light text-slate">
            Trusted by owners who want the vessel looked after, not the paperwork.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Testimonial
            quote="I was spending every weekend dealing with maintenance issues. Onyx took it all off my plate - now I actually enjoy using the boat."
            author="Private Owner"
            vesselSize="Fairline Targa 39"
          />
          <Testimonial
            quote="The monthly retainer is a fraction of what I was wasting on reactive maintenance and last-minute yard fees. Best decision I made."
            author="Weekend Cruiser"
            vesselSize="Princess V48"
          />
        </div>
      </div>
    </section>
  );
}
