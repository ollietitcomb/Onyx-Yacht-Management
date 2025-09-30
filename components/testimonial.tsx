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
      <Card className="border-gold/20">
        <CardContent className="p-8">
          <Quote className="h-10 w-10 text-gold opacity-50" />
          <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-ink">
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
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-5xl">
            Trusted by Owners
          </h2>
          <p className="mt-4 text-lg text-slate">
            Discretion and excellence, every time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Testimonial
            quote="I was spending every weekend dealing with maintenance issues. Onyx took it all off my plate—now I actually enjoy using the boat."
            author="Private Owner"
            vesselSize="Sunseeker Predator 57"
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
