import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from 'next-seo.config';

type SEOProps = {
  title?: string;
  description?: string;
};

export default function SEO({ title, description }: SEOProps) {
  let seo = NEXT_SEO_DEFAULT;
  if (title) seo.title = `${title} | Tiko`;
  if (description) seo.description = description;

  return (
    <NextSeo
      {...seo}
      useAppDir={true}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'android-chrome-192x192',
          href: '/favicons/android-chrome-192x192.png',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicons/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ]}
    />
  );
}
