import { Metadata } from 'next';
import { Lock, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Owner Portal',
  description: 'Secure client portal for Onyx Yacht Management (coming soon).',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OwnerPortalPage() {
  return (
    <div className="section-padding bg-fog">
      <div className="container-custom flex min-h-[60vh] items-center justify-center">
        <Card className="max-w-md border-gold/20">
          <CardContent className="p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
              <Lock className="h-8 w-8 text-gold" />
            </div>
            <h1 className="mt-6 font-sans text-3xl font-bold text-ink">
              Owner Portal
            </h1>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-md border border-gold/30 bg-gold/5 p-3">
              <AlertCircle className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium text-ink">Coming Soon</span>
            </div>
            <p className="mt-6 text-slate">
              Our secure client portal will provide 24/7 access to budgets,
              maintenance schedules, crew records, and real-time vessel status.
            </p>
            <p className="mt-4 text-sm text-slate">
              Existing clients will receive login credentials when the portal
              launches.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
