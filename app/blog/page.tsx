import { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights and advice on yacht management, compliance, maintenance, and operations.',
};

export default function BlogPage() {
  const sortedBlogs = allBlogs.sort((a, b) =>
    new Date(b.publishedAt) > new Date(a.publishedAt) ? 1 : -1
  );

  return (
    <>
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
          <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl">
            Blog
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-neutral-200">
            Insights, updates, and practical advice on yacht ownership and
            management.
          </p>
        </div>
      </section>

      <section className="section-padding bg-fog">
        <div className="container-custom">
          {sortedBlogs.length === 0 ? (
            <p className="text-center text-slate">No blog posts yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sortedBlogs.map((post) => (
                <Link key={post.slug} href={post.url}>
                  <Card className="h-full transition-all hover:shadow-xl hover:border-gold hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-slate">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.publishedAt)}
                        </div>
                      </div>
                      <CardTitle className="mt-3 text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate">{post.summary}</p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gold/10 px-3 py-1 text-xs text-gold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
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
