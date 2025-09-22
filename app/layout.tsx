import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { ChatWidget } from '@/components/ui/ChatWidget';
import { ChatProvider } from '@/components/providers/ChatProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PT Aghna Partnership - Solusi Perencanaan Konstruksi Inovatif',
  description: 'PT Aghna Partnership berkomitmen memberikan solusi perencanaan konstruksi yang inovatif dan terpercaya dengan pengalaman bertahun-tahun.',
  keywords: 'perencanaan konstruksi, masterplan, desain konstruksi, pengawasan, BIM, konsultasi konstruksi',
  authors: [{ name: 'PT Aghna Partnership' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo/logo.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/logo/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <ChatProvider>
          {children}
          <ChatWidget />
        </ChatProvider>
        <Toaster />
      </body>
    </html>
  );
}