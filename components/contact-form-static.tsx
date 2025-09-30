'use client';

import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ContactFormStatic() {
  return (
    <Card className="border-gold/20">
      <CardContent className="p-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-ink">Get in Touch</h3>
        <p className="mt-4 text-slate">
          Contact us directly via email or phone for the fastest response.
        </p>
        
        <div className="mt-8 space-y-4">
          <a
            href="mailto:info@onyxyachtmanagement.com"
            className="flex items-center justify-center gap-3 rounded-lg border border-gold bg-gold/5 p-4 transition-all hover:bg-gold/10"
          >
            <Mail className="h-5 w-5 text-gold" />
            <span className="font-medium text-ink">info@onyxyachtmanagement.com</span>
          </a>
          
          <a
            href="tel:+447XXXXXXXXX"
            className="flex items-center justify-center gap-3 rounded-lg border border-gold bg-gold/5 p-4 transition-all hover:bg-gold/10"
          >
            <Phone className="h-5 w-5 text-gold" />
            <span className="font-medium text-ink">+44 (0) XXXX XXXXXX</span>
          </a>
        </div>

        <p className="mt-6 text-sm text-slate">
          We typically respond within one business day.
        </p>
      </CardContent>
    </Card>
  );
}
