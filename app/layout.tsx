import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Neloy Enterprise | Custom Manufacturing for Home, Shop & Office',
  description:
    'Custom aluminium, glass, mirror, board and shelving products for homes, shops and offices in Bangladesh.',
  keywords: ['Neloy Enterprise', 'Bangladesh manufacturing', 'custom windows', 'shop decor', 'office partitions']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-slate-800 antialiased">
        <div className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
