import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Pablo Jesus Acosta',
    default: 'Pablo Jesus Acosta | Full Stack Developer',
  },
  description:
    'Full Stack Developer specializing in modern web technologies, with expertise in both front-end and back-end development.',
  metadataBase: new URL('https://pablo-acosta-portfolio.netlify.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pablo-acosta-portfolio.netlify.app',
    siteName: 'Pablo Jesus Acosta',
    title: 'Pablo Jesus Acosta | Full Stack Developer',
    description:
      'Full Stack Developer specializing in modern web technologies, with expertise in both front-end and back-end development.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pablo Jesus Acosta - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pablo Jesus Acosta | Full Stack Developer',
    description:
      'Full Stack Developer specializing in modern web technologies, with expertise in both front-end and back-end development.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/images/favicon_16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/images/favicon_32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${roboto.className} bg-background text-white`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
