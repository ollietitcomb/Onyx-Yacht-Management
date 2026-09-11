'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  headline: string;
  subcopy: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  backgroundImage?: string;
}

export function Hero({
  headline,
  subcopy,
  primaryCta,
  secondaryCta,
  backgroundImage = '/images/hero-yacht.jpg',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Luxury yacht"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.22)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
            Yacht management
          </p>
          <h1 className="text-[38px] font-light leading-[1.12] tracking-[-0.02em] text-white md:text-[52px] lg:text-[58px]">
            {headline}
          </h1>
          <p className="mt-6 max-w-md text-[16px] font-light leading-relaxed text-white/80 md:text-[17px]">
            {subcopy}
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center border border-white bg-white px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.1em] text-ink transition-colors duration-150 hover:bg-transparent hover:text-white"
            >
              {primaryCta.text}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center border border-white/80 bg-transparent px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.1em] text-white transition-colors duration-150 hover:bg-white hover:text-ink"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
