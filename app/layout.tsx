import type {Metadata, Viewport} from 'next';
import {CosmicBackground} from '@/components/CosmicBackground';
import {Footer} from '@/components/Footer';
import {SiteHeader} from '@/components/SiteHeader';
import {siteConfig} from '@/lib/site';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | AstraVeda',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo.png',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'AstraVeda logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B1C2D',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <CosmicBackground />
        <SiteHeader />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
