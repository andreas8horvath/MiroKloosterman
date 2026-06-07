import type {Metadata} from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import LayoutWrapper from '@/components/LayoutWrapper';
import './globals.css'; // Global styles

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Miro Kloosterman — Healer, Coach & Retreat Guide',
  description: 'Come home to yourself. Feel alive again. Private retreats in Bali. Group retreats around the world. One-on-one healing and coaching, in person or online.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#FBF8F3] text-[#322C2B] font-body antialiased min-h-screen flex flex-col">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
