import { Resend } from 'resend';

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  vesselType?: string;
  loa?: string;
  homePort?: string;
  message: string;
};

const TO_EMAIL = 'info@onyxyachtmanagement.com';
const FROM_EMAIL = 'Onyx Yacht Management <noreply@onyxyachtmanagement.com>';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set; contact form cannot send.');
    return false;
  }

  const rows: Array<[string, string]> = [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone || 'Not provided'],
    ['Vessel type', data.vesselType || 'Not provided'],
    ['LOA', data.loa || 'Not provided'],
    ['Home port', data.homePort || 'Not provided'],
    ['Message', data.message],
  ];

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #111;">
      <h2 style="font-weight: 400;">New contact form submission</h2>
      <table style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 6px 16px 6px 0; color: #666; vertical-align: top;">${escapeHtml(
              label
            )}</td>
            <td style="padding: 6px 0; white-space: pre-wrap;">${escapeHtml(
              value
            )}</td>
          </tr>`
          )
          .join('')}
      </table>
    </div>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

  try {
    const resend = new Resend(apiKey);
    const { data: sendData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: data.email,
      subject: `Contact form - ${data.name}`,
      html,
      text,
    });

    if (error) {
      console.error('Resend contact email failed:', error);
      return false;
    }

    if (!sendData?.id) {
      console.error('Resend contact email returned no id:', { sendData, error });
      return false;
    }

    return true;
  } catch (error) {
    console.error('Resend contact email error:', error);
    return false;
  }
}
