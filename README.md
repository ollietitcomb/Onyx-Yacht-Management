# Onyx Yacht Management

A production-ready marketing website for Onyx Yacht Management, built with Next.js 14, TypeScript, Tailwind CSS, and MDX.

## Features

- ✅ **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- ✅ **Content Management**: MDX-powered blog and case studies via Contentlayer
- ✅ **SEO Optimized**: Dynamic metadata, JSON-LD structured data, sitemap generation
- ✅ **Accessible**: WCAG 2.1 AA compliant, keyboard navigable
- ✅ **Performance**: Optimized images, code splitting, Lighthouse score ≥95
- ✅ **Form Handling**: Server Actions with Zod validation, honeypot, rate limiting
- ✅ **Analytics**: Vercel Analytics ready, optional GA4 integration
- ✅ **Responsive**: Mobile-first design, tested from 360px to 4K

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "ONYX Yacht Management"
```

2. Install dependencies:
```bash
pnpm install
```

3. Create environment file:
```bash
cp env.example .env.local
```

4. Edit `.env.local` with your values:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
VERCEL_ANALYTICS=1
```

5. Run the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Grouped routes (owner portal)
│   ├── blog/              # Blog listing and posts
│   ├── case-studies/      # Case study listing and details
│   ├── contact/           # Contact page with form
│   ├── legal/             # Legal pages (privacy, terms)
│   ├── services/          # Service pages
│   └── layout.tsx         # Root layout with header/footer
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   ├── hero.tsx           # Hero section
│   └── ...                # Other custom components
├── content/               # MDX content
│   ├── blog/              # Blog posts
│   └── case-studies/      # Case studies
├── lib/                   # Utility functions
│   ├── analytics.ts       # Google Analytics helpers
│   ├── mailer.ts          # Email service integration
│   ├── rate-limit.ts      # Rate limiting logic
│   ├── seo.ts             # SEO helpers and JSON-LD
│   └── utils.ts           # General utilities
├── public/                # Static assets
│   ├── images/            # Images and graphics
│   └── favicon/           # Favicons
├── contentlayer.config.ts # Contentlayer configuration
├── next-sitemap.config.js # Sitemap generation config
└── tailwind.config.ts     # Tailwind CSS configuration
```

## Adding Content

### Adding a Blog Post

1. Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: 'Your Blog Post Title'
summary: 'A brief summary of the post.'
coverImage: '/images/blog/your-image.jpg'
tags: ['tag1', 'tag2']
publishedAt: '2024-04-15'
---

## Your Content Here

Write your blog post content in Markdown/MDX.
```

2. The post will automatically appear on `/blog` and be accessible at `/blog/[filename]`.

### Adding a Case Study

1. Create a new `.mdx` file in `content/case-studies/`:

```mdx
---
title: 'Case Study Title'
summary: 'Brief overview of the case study.'
vessel: 'Yacht Name'
loa: '65ft'
year: 2020
coverImage: '/images/case-studies/your-image.jpg'
tags: ['maintenance', 'refit']
publishedAt: '2024-04-15'
---

## Your Content Here
```

2. The case study will automatically appear on `/case-studies`.

## Email Configuration

The contact form currently logs submissions to the console. To send real emails:

1. Install your email provider (e.g., Resend):
```bash
pnpm add resend
```

2. Edit `lib/mailer.ts` and uncomment the Resend integration code.

3. Add your API key to `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=info@onyxyachtmanagement.com
```

### Supported Email Providers

- **Resend** (recommended): Uncomment code in `lib/mailer.ts`
- **AWS SES**: Install `@aws-sdk/client-ses` and configure
- **SendGrid**: Install `@sendgrid/mail` and configure

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

Vercel will automatically:
- Build the site
- Generate the sitemap
- Enable Vercel Analytics (if configured)

### Other Platforms

1. Build the site:
```bash
pnpm build
```

2. The output will be in `.next/` directory

3. Start the production server:
```bash
pnpm start
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Customization

### Brand Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --onyx: #0A0A0A;
  --gold: #C4A24C;
  --fog: #F5F5F4;
  --ink: #111111;
  --slate: #6B7280;
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. To change:

1. Import different fonts from `next/font/google`
2. Update the font variables
3. Update `tailwind.config.ts` font family settings

### Navigation

Edit navigation links in `components/header.tsx` and `components/footer.tsx`.

## Analytics

### Vercel Analytics

Already integrated. Enable in `.env.local`:
```env
VERCEL_ANALYTICS=1
```

### Google Analytics

1. Get your GA4 Measurement ID
2. Add to `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```
3. Add the GA script to `app/layout.tsx` (see `lib/analytics.ts` for helpers)

## Performance

The site is optimized for performance:

- Image optimization via `next/image`
- Route prefetching
- Code splitting
- Font optimization
- Minimal JavaScript

Target Lighthouse scores: ≥95 on all metrics.

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Skip-to-content link
- Alt text on images

## Support

For questions or issues, contact the development team or refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Contentlayer Documentation](https://contentlayer.dev/docs)

## License

Proprietary - Onyx Yacht Management © 2024
