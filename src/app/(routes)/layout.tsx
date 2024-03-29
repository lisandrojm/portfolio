/* src/app/(routes)/layout.tsx */

import type { Metadata } from 'next';
import siteMetadata from '@/_data/siteMetadata';
import { Roboto_Mono, Roboto_Serif, Roboto_Flex, Roboto } from 'next/font/google';
import '@/_styles/globals.css';

const roboto_regular = Roboto({
  subsets: ['latin'],
  variable: '--font-regular',
  weight: '700',
});

const roboto_mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' });
const roboto_serif = Roboto_Serif({ subsets: ['latin'], variable: '--font-serif' });
const roboto_flex = Roboto_Flex({ subsets: ['latin'], variable: '--font-flex' });

interface Icons {
  icon: string;
  apple: string;
  shortcut: string;
  sizes: {
    apple: number[];
    android: number[];
    favicon: number[];
  };
}

interface OpenGraphImage {
  url: string;
  alt: string;
}

interface Author {
  name: string;
}

interface HttpEquiv {
  'X-UA-Compatible'?: string;
}

export const metadata: Metadata & {
  icons: Icons;
  authors: Author;
  url: string;
  image: string;
  charset: string;
  httpEquiv?: HttpEquiv;
  msapplicationTapHighlight: string;
  msapplicationTileColor: string;
  msapplicationTileImage: string;
} = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  authors: { name: siteMetadata.author },
  icons: {
    icon: '_static/_favicons/favicon.ico?v=4',
    apple: '_static/_favicons/apple-touch-icon.png?v=4',
    shortcut: '_static/_favicons/apple-touch-icon.png',
    sizes: {
      apple: [57, 60, 72, 76, 114, 120, 144, 152, 180],
      android: [192],
      favicon: [32, 96, 16],
    },
  },
  url: siteMetadata.siteImageUrl,
  image: siteMetadata.siteImageUrl,
  charset: 'utf-8',
  httpEquiv: {
    'X-UA-Compatible': 'IE.edge',
  },
  manifest: '_static/_favicons/site.webmanifest',
  msapplicationTapHighlight: 'no',
  robots: 'noodp',
  msapplicationTileColor: '#ffffff',
  msapplicationTileImage: '_static/_favicons/ms-icon-144x144.png',
  openGraph: {
    images: [
      {
        url: siteMetadata.siteImageUrl,
        alt: siteMetadata.title,
      },
    ] as OpenGraphImage[],
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
  },
  twitter: {
    card: 'summary',
    site: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.siteImageUrl,
        alt: siteMetadata.title,
      },
    ] as OpenGraphImage[],
  },
  metadataBase: new URL(siteMetadata.siteUrl),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteMetadata.language} className={`${roboto_mono.variable} ${roboto_serif.variable} ${roboto_flex.variable} ${roboto_regular.variable}`}>
      <body className="font-mono">{children}</body>
    </html>
  );
}
