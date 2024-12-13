import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Glamic - Beauty Business Management Platform',
  description: 'Transform your beauty business with Glamic - The all-in-one platform for scheduling, client management, and automated booking. Perfect for independent beauty professionals.',
  keywords: 'beauty business, scheduling software, booking platform, salon management, beauty professionals, automated booking',
  openGraph: {
    title: 'Glamic - Beauty Business Management Platform',
    description: 'Transform your beauty business with Glamic - The all-in-one platform for scheduling, client management, and automated booking.',
    images: ['https://groomee-storage.s3.us-east-2.amazonaws.com/logo+typography+Main+-+112840.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glamic - Beauty Business Management Platform',
    description: 'Transform your beauty business with Glamic - The all-in-one platform for scheduling, client management, and automated booking.',
    images: ['https://groomee-storage.s3.us-east-2.amazonaws.com/logo+typography+Main+-+112840.png'],
  },
  icons: {
    icon: 'https://groomee-storage.s3.us-east-2.amazonaws.com/logo+typography+Main+-+112840.png',
    shortcut: 'https://groomee-storage.s3.us-east-2.amazonaws.com/logo+typography+Main+-+112840.png',
    apple: 'https://groomee-storage.s3.us-east-2.amazonaws.com/logo+typography+Main+-+112840.png',
  },
  manifest: '/manifest.json',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glamic.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}