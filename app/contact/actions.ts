'use server';

import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';
import { sendContactEmail } from '@/lib/mailer';
import { headers } from 'next/headers';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  vesselType: z.string().optional(),
  loa: z.string().optional(),
  homePort: z.string().optional(),
  message: z.string().min(10),
  consent: z.boolean().refine((val) => val === true),
  honeypot: z.string().max(0),
});

export async function submitContactForm(data: unknown) {
  try {
    // Validate input
    const validated = contactFormSchema.parse(data);

    // Check honeypot
    if (validated.honeypot && validated.honeypot.length > 0) {
      console.log('Honeypot triggered');
      return { success: false, error: 'Invalid submission' };
    }

    // Rate limiting
    const headersList = headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown';

    if (!rateLimit(ip, 3, 60000)) {
      return { success: false, error: 'Too many requests. Please try again later.' };
    }

    // Send email
    await sendContactEmail({
      name: validated.name,
      email: validated.email,
      phone: validated.phone,
      vesselType: validated.vesselType,
      loa: validated.loa,
      homePort: validated.homePort,
      message: validated.message,
    });

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to send message' };
  }
}
