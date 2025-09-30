import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allCaseStudies } from 'contentlayer/generated';
import { formatDate } from '@/lib/utils';
import { generateArticleJsonLd } from '@/lib/seo';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Calendar, Ship, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return allCaseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseStudy = allCaseStudies.find(
    (caseStudy) => caseStudy.slug === params.slug
  );

  if (!caseStudy) {
    return {};
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = allCaseStudies.find(
    (caseStudy) => caseStudy.slug === params.slug
  );

  if (!caseStudy) {
    notFound();
  }

  const MDXContent = useMDXComponent(caseStudy.body.code);

  const jsonLd = generateArticleJsonLd({
    title: caseStudy.title,
    description: caseStudy.summary,
    datePublished: caseStudy.publishedAt,
    image: caseStudy.coverImage,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}${caseStudy.url}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-gold hover:underline focus-ring rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate">
              <div className="flex items-center gap-1.5">
                <Ship className="h-4 w-4" />
                {caseStudy.vessel} • {caseStudy.loa}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {caseStudy.year}
              </div>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold text-ink sm:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="mt-4 text-lg text-slate">{caseStudy.summary}</p>
            {caseStudy.tags && caseStudy.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gold/10 px-3 py-1 text-sm text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="mdx-content mt-12">
            <MDXContent />
          </div>

          <div className="mt-12 border-t border-neutral-200 pt-8">
            <Link href="/case-studies">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
