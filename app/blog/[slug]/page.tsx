import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import { formatDate } from '@/lib/utils';
import { generateArticleJsonLd } from '@/lib/seo';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  const jsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    image: post.coverImage,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}${post.url}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gold hover:underline focus-ring rounded-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mt-8">
            <div className="flex items-center gap-2 text-sm text-slate">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-slate">{post.summary}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
