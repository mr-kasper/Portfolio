import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import Footer from '@/components/Home/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '@/components/Helper/ScrollToTop';
import AnimatedCursor from 'react-animated-cursor';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

const font = Sora({
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rachid Portfolio',
  description: 'Welcome to my portfolio website',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load the messages for the current locale
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    // Fall back to default locale if messages can't be loaded
    messages = (await import(`../../../messages/${routing.defaultLocale}.json`)).default;
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="scroll-smooth custom-scrollbar">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${font.variable} antialiased`}>
          <div className="hidden md:block">
            <AnimatedCursor
              innerSize={8}
              outerSize={30}
              outerAlpha={0}
              innerScale={2}
              outerScale={2}
              innerStyle={{
                backgroundColor: 'white',
              }}
              outerStyle={{
                border: '2px solid #fff',
              }}
            />
          </div>
          <Toaster position="top-center" reverseOrder={false} />
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
