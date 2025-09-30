import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  href: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  bullets,
  href,
}: ServiceCardProps) {
  return (
    <Card className="group h-full transition-all duration-200 hover:shadow-xl hover:border-gold hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3 transition-colors group-hover:bg-gold/20">
          <Icon className="h-7 w-7 text-gold" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-slate">{description}</p>
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold"></span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline group-hover:gap-3 transition-all focus-ring rounded-sm"
        >
          Learn more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
