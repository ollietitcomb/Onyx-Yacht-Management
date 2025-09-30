import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Onyx Yacht Management.',
};

export default function PrivacyPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="font-serif text-5xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <div className="prose prose-neutral mt-8 max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Onyx Yacht Management ("we", "our", or "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Vessel information (type, size, home port)</li>
            <li>Communication preferences</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide yacht management services</li>
            <li>Respond to inquiries and requests</li>
            <li>Send service updates and communications</li>
            <li>Improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>

          <h2>6. Contact Us</h2>
          <p>
            For privacy-related questions or to exercise your rights, contact us at{' '}
            <a href="mailto:privacy@onyxyachtmanagement.com">privacy@onyxyachtmanagement.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
