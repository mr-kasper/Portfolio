import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import Footer from '@/components/Home/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '@/components/Helper/ScrollToTop';
import AnimatedCursor from 'react-animated-cursor';

const font = Sora({
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rachid Portfolio',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth custom-scrollbar">
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
    </html>
  );
}
