// Email service placeholder
// To use Resend: npm install resend
// To use AWS SES: npm install @aws-sdk/client-ses

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  vesselType?: string;
  loa?: string;
  homePort?: string;
  message: string;
};

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  // For now, just log to console
  console.log('📧 Contact form submission:', data);

  // TODO: Replace with actual email service
  // Example with Resend:
  /*
  import { Resend } from 'resend';
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Onyx Yacht Management <noreply@onyxyachtmanagement.com>',
      to: process.env.CONTACT_EMAIL || 'info@onyxyachtmanagement.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Vessel Type:</strong> ${data.vesselType || 'Not provided'}</p>
        <p><strong>LOA:</strong> ${data.loa || 'Not provided'}</p>
        <p><strong>Home Port:</strong> ${data.homePort || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
  */

  // Simulate success for demo
  return true;
}
