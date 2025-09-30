import { Metadata } from 'next';
import Link from 'next/link';
import { allCaseStudies } from 'contentlayer/generated';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { Calendar, Ship } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real-world examples of how Onyx delivers results for yacht owners.',
};

export default function CaseStudiesPage() {
  const sortedCaseStudies = allCaseStudies.sort((a, b) =>
    new Date(b.publishedAt) > new Date(a.publishedAt) ? 1 : -1
  );

  return (
    <>
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
          <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl">
            Case Studies
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-neutral-200">
            Real-world examples of how we deliver results for our clients.
          </p>
        </div>
      </section>

      <section className="section-padding bg-fog">
        <div className="container-custom">
          {sortedCaseStudies.length === 0 ? (
            <p className="text-center text-slate">No case studies yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {sortedCaseStudies.map((caseStudy) => (
                <Link key={caseStudy.slug} href={caseStudy.url}>
                  <Card className="h-full transition-all hover:shadow-xl hover:border-gold hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-slate">
                        <div className="flex items-center gap-1.5">
                          <Ship className="h-4 w-4" />
                          {caseStudy.vessel} • {caseStudy.loa}
                        </div>
                      </div>
                      <CardTitle className="mt-3 text-2xl">
                        {caseStudy.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate">{caseStudy.summary}</p>
                      {caseStudy.tags && caseStudy.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {caseStudy.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gold/10 px-3 py-1 text-xs text-gold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="mt-4 text-sm text-slate">
                        <Calendar className="mr-1.5 inline h-4 w-4" />
                        {formatDate(caseStudy.publishedAt)}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
