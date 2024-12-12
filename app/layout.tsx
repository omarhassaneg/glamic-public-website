import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Glamic - Beauty Business Platform',
  description: 'Transform your beauty business with our all-in-one scheduling platform',
  icons: {
    icon: 'https://groomee-storage.s3.us-east-2.amazonaws.com/Neutral+light+Logo+figure+%2B+Main+bkrnd.png',
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
        <link rel="icon" href="https://groomee-storage.s3.us-east-2.amazonaws.com/Neutral+light+Logo+figure+%2B+Main+bkrnd.png" />
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
