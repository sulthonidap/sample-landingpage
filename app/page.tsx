import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { News } from '@/components/sections/News';
import { Products } from '@/components/sections/Products';
import { Footer } from '@/components/sections/Footer';

export const metadata = {
  title: 'PT Aghna Partnership - Solusi Perencanaan Konstruksi Inovatif',
  description: 'PT Aghna Partnership berkomitmen memberikan solusi perencanaan konstruksi yang inovatif dan terpercaya dengan pengalaman bertahun-tahun.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <News />
      <Products />
      <Footer />
    </main>
  );
}