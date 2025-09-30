import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://onyxyachtmanagement.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Onyx Yacht Management | UK Coastal Vessel Management (37-90ft)',
    template: '%s | Onyx Yacht Management',
  },
  description:
    'Professional yacht management for UK coastal vessels 37-90ft. From Axopar day boats to Sunseeker motor yachts. Solent & South Coast specialists.',
  keywords: [
    'yacht management UK',
    'Solent yacht management',
    'South Coast boat management',
    'Sunseeker management',
    'Princess yacht management',
    'Axopar management',
    'UK boat maintenance',
    'Hamble yacht services',
    'MCA coding',
    'yacht winterisation',
  ],
  authors: [{ name: 'Onyx Yacht Management' }],
  creator: 'Onyx Yacht Management',
  publisher: 'Onyx Yacht Management',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Onyx Yacht Management',
    title: 'Onyx Yacht Management | Discreet, Full-Scope Yacht Management',
    description:
      'Onyx protects your time and your vessel with rigorous standards, transparent reporting, and white-glove support across the UK and the Med.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Onyx Yacht Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onyx Yacht Management | UK Coastal Vessel Management (37-90ft)',
    description:
      'Professional yacht management for UK coastal vessels. Axopar to Sunseeker. Solent & South Coast specialists.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Onyx Yacht Management',
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      'Professional yacht management for UK coastal vessels 37-90ft. Based in the Solent with coverage across the South Coast.',
    areaServed: ['Solent', 'Hampshire', 'South Coast', 'United Kingdom'],
    telephone: '+44-XXXX-XXXXXX', // Replace with actual number
    sameAs: [
      // Add social media URLs when available
      // 'https://www.linkedin.com/company/onyx-yacht-management',
      // 'https://www.instagram.com/onyxyachtmanagement',
    ],
  };
}

export function generateArticleJsonLd(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `${siteUrl}/og-image.png`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: 'Onyx Yacht Management',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Onyx Yacht Management',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}
