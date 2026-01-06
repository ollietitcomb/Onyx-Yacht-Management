import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Award, Users2, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Decades of combined technical and operational experience. A single point of accountability for yacht management.',
};

const team = [
  {
    name: 'James Henderson',
    role: 'Managing Director',
    description:
      '15+ years managing Solent-based motor yachts. Former skipper, qualified engineer.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Technical Coordinator',
    description:
      'Certified marine surveyor. Specialist in Sunseeker, Princess, and Fairline systems.',
  },
  {
    name: 'David Knowles',
    role: 'Client Services',
    description:
      'Ex-marina manager with deep South Coast supplier network. Your first point of contact.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Rigorous Standards',
    description:
      'We hold ourselves to the highest technical and operational benchmarks.',
  },
  {
    icon: TrendingUp,
    title: 'Transparency',
    description:
      'Live budgets, open communication, and honest advice. Always.',
  },
  {
    icon: Users2,
    title: 'Partnership',
    description:
      'We work for you, not for suppliers. Your interests come first.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
        <h1 className="font-sans text-5xl font-bold text-white sm:text-6xl">
          Built for UK coastal owners.
          <br />No superyacht overheads.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-neutral-200">
          Onyx was founded by Solent-based professionals who saw a gap: quality yacht management for
          vessels under 90ft. Most owners don't need a full-time captain. They need expert oversight
          that fits their usage and budget. That's what we deliver.
        </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-sans text-4xl font-bold text-ink">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-slate">
                <p>
                  We started Onyx because the UK market was underserved. Big management firms
                  wanted 70ft+ vessels. Smaller owners were left dealing with fragmented
                  yard work, forgotten maintenance, and eye-watering surprise bills.
                </p>
                <p>
                  Our clients are weekend cruisers, family boaters, and occasional charterers.
                  Axopars, Sunseekers, Princess yachts, Fairlines—vessels that spend most of
                  the year on a mooring or in a marina, not at sea with permanent crew.
                </p>
                <p>
                  We built a management service designed for this reality: seasonal planning,
                  fixed-price retainers, and no fluff. Just professional oversight that keeps
                  your vessel ready when you want to use it.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-sans text-4xl font-bold text-ink">
                Our Approach
              </h2>
              <div className="mt-6 space-y-6">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10">
                      <value.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">{value.title}</h3>
                      <p className="mt-1 text-sm text-slate">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-fog">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-sans text-4xl font-bold text-ink">
              Leadership Team
            </h2>
            <p className="mt-4 text-slate">
              Decades of combined technical and operational expertise.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gold/10">
                    <Users2 className="h-12 w-12 text-gold" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-slate">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="border-gold/20">
            <CardContent className="p-8 text-center lg:p-12">
              <MapPin className="mx-auto h-12 w-12 text-gold" />
              <h2 className="mt-6 font-sans text-3xl font-bold text-ink">
                Coverage
              </h2>
              <p className="mt-4 text-lg text-slate">
                Based in the <span className="font-semibold text-gold">Solent</span> with
                extensive South Coast coverage: Hamble, Ocean Village, Lymington, Poole, Brighton.
              </p>
              <p className="mt-2 text-sm text-slate">
                We also support seasonal Med cruising for clients who take their vessels across the Channel.
              </p>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
