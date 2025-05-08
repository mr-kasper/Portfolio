import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import Footer from '@/components/Home/Footer/Footer';

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
    <html lang="en" className="scroll-smooth">
      <body className={`${font.variable} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
