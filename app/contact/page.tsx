import { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Onyx Yacht Management. Tell us about your vessel and let us help.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-onyx grain-overlay">
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl">
              Tell us about your vessel.
            </h1>
            <p className="mt-6 text-lg text-neutral-200">
              Whether you're looking for comprehensive management or specific
              services, we're here to help. Reach out and we'll respond within
              one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-fog">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-ink">
                Get in Touch
              </h2>
              <p className="mt-4 text-slate">
                Our team is ready to discuss your requirements and provide a
                tailored solution.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gold/10 p-3">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Email</h3>
                    <a
                      href="mailto:info@onyxyachtmanagement.com"
                      className="text-slate link-gold"
                    >
                      info@onyxyachtmanagement.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gold/10 p-3">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Phone</h3>
                    <p className="text-slate">+44 (0) XXXX XXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gold/10 p-3">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Location</h3>
                    <p className="text-slate">
                      South Coast, United Kingdom
                      <br />
                      Trusted partners in Palma and Antibes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gold/10 p-3">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Response Time</h3>
                    <p className="text-slate">
                      Within 1 business day
                      <br />
                      24/7 emergency support for existing clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactFormStatic />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
