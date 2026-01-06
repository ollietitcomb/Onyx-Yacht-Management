import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-fog">
      <div className="container-custom text-center">
        <h1 className="font-sans text-9xl font-bold text-gold">404</h1>
        <h2 className="mt-4 font-sans text-3xl font-bold text-ink">
          Page Not Found
        </h2>
        <p className="mt-4 text-slate">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="gold" size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
