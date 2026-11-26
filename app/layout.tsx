import type { Metadata } from 'next';
import './globals.css';
import './treatments/treatment-pages.css';
import './site-refresh.css';
import './site-motion.css';
import SiteMotion from './components/layout/SiteMotion';

export const metadata: Metadata = {
  title: 'WOW FACTOR — Advanced Skin, Hair & Aesthetic Care',
  description: 'A premium medi-cosmetic experience built around personalized, precision-based care.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteMotion>{children}</SiteMotion></body></html>;
}
