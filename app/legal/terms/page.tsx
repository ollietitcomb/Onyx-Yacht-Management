import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Onyx Yacht Management.',
};

export default function TermsPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="font-serif text-5xl font-bold text-ink">Terms of Service</h1>
        <p className="mt-4 text-sm text-slate">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <div className="prose prose-neutral mt-8 max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using Onyx Yacht Management services, you agree to be bound by these
            Terms of Service and all applicable laws and regulations.
          </p>

          <h2>2. Services</h2>
          <p>
            Onyx Yacht Management provides professional yacht management services including but not
            limited to technical management, operational management, crew management, and concierge
            services.
          </p>

          <h2>3. Client Obligations</h2>
          <p>Clients agree to:</p>
          <ul>
            <li>Provide accurate vessel and contact information</li>
            <li>Grant necessary access and authority to perform services</li>
            <li>Make timely payments as per agreed terms</li>
            <li>Maintain appropriate insurance coverage</li>
          </ul>

          <h2>4. Fees and Payment</h2>
          <p>
            Service fees are agreed upon in writing prior to commencement. Payment terms are outlined
            in individual service agreements.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Onyx Yacht Management provides services with professional care and diligence. Liability
            is limited to the extent permitted by law and as outlined in individual service agreements.
          </p>

          <h2>6. Termination</h2>
          <p>
            Either party may terminate services with appropriate notice as outlined in the service
            agreement.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales.
          </p>

          <h2>8. Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:legal@onyxyachtmanagement.com">legal@onyxyachtmanagement.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
