import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: 'Tiko',
  description: 'Tiko is a website that helps you find tickets for events.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.tiko.robby.pw',
    title: 'Open Graph Title A',
    description: 'Open Graph Description A',
    images: [
      {
        url: 'https://www.tiko.robby.pw/og-tiko.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt A',
        type: 'image/jpeg',
        secureUrl: 'https://www.tiko.robby.pw/og-tiko.png',
      },
    ],
    siteName: 'tiko.robby.pw',
  },
  twitter: {
    handle: '@robbypambudii',
    site: '@robbypambudii',
    cardType: 'summary_large_image',
  },
};
