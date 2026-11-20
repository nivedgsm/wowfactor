import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WOW FACTOR — Advanced Skin, Hair & Aesthetic Care',
  description: 'A premium medi-cosmetic experience built around personalized, precision-based care.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
