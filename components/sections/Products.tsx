'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ConsultationButton } from '@/components/ui/ConsultationButton';
import { ShoppingCart } from 'lucide-react';
import { db } from '@/lib/db';
import type { Product } from '@/lib/types';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ProductWithCategory extends Product {
  category: string;
}

function getServices(): ProductWithCategory[] {
  // Static data with service categories for PT Aghna Partnership
  return [
    {
      id: 1,
      name: 'Studi/ Kajian Kebijakan',
      description: 'Analisis mendalam melalui studi akan memberikan gambaran yang jelas mengenai potensi keberhasilan proyek dan meminimalisir risiko kegagalan.',
      price: 0,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      created_at: '2024-01-15T00:00:00Z',
      category: 'Kajian'
    },
    {
      id: 2,
      name: 'Master Plan',
      description: 'Melalui Pendampingan Teknis ini, kami berupaya menghasilkan sebuah rancangan atau pedoman yang dapat menjadi acuan bagi pihak-pihak terkait.',
      price: 0,
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg',
      created_at: '2024-01-10T00:00:00Z',
      category: 'Perencanaan'
    },
    {
      id: 3,
      name: 'Desain Konstruksi',
      description: 'Sebagai pihak yang bertanggung jawab atas perencanaan proyek, kami berkomitmen untuk menghasilkan dokumen-dokumen teknis yang komprehensif.',
      price: 0,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      created_at: '2024-01-05T00:00:00Z',
      category: 'Desain'
    },
    {
      id: 4,
      name: 'Pengawasan',
      description: 'Dalam kapasitas sebagai pengawas, kami bertugas untuk memantau secara ketat seluruh aktivitas pemeriksaan mutu bahan dan pekerjaan konstruksi.',
      price: 0,
      image: 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg',
      created_at: '2024-01-01T00:00:00Z',
      category: 'Pengawasan'
    },
    {
      id: 5,
      name: 'Layanan BIM',
      description: 'Dengan layanan konsultasi Building Information Modelling (BIM) kami, bisnis Anda akan dilengkapi dengan alat yang tepat untuk merencanakan, merancang, dan membangun proyek secara lebih efektif dan efisien.',
      price: 0,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      created_at: '2023-12-28T00:00:00Z',
      category: 'BIM'
    }
  ];
}

export function Products() {
  const allServices = getServices();
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: productsRef, isVisible: isProductsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: tabsRef, isVisible: isTabsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: isGridVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const categories = ['All', 'Kajian', 'Perencanaan', 'Desain', 'Pengawasan', 'BIM'];
  
  const filteredServices = activeCategory === 'All' 
    ? allServices.slice(0, 5) // Hanya tampilkan 5 layanan di home
    : allServices.filter(service => service.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div 
          ref={productsRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isProductsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#F37526]/10 text-[#F37526] rounded-full text-sm font-medium mb-6">
            Layanan Kami
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00028C] mb-6">
            Layanan
            <span className="block text-[#F37526]"> Perencanaan Konstruksi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen untuk memberikan layanan perencanaan konstruksi dan kajian kebijakan yang berkualitas tinggi kepada pelanggan
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          ref={tabsRef}
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${
            isTabsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#F37526] to-[#e56620] text-white shadow-lg hover:shadow-xl'
                  : 'border-2 border-gray-300 text-gray-700 hover:border-[#F37526] hover:text-[#F37526] hover:bg-[#F37526]/5'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 transition-all duration-1000 delay-400 ${
            isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filteredServices.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={service.image || 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#00028C]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {service.category}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#00028C] mb-3 group-hover:text-[#F37526] transition-colors leading-tight">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <ConsultationButton 
                    size="sm"
                    className="bg-gradient-to-r from-[#F37526] to-[#e56620] text-white font-semibold px-4 py-1 rounded-full hover:from-[#e56620] hover:to-[#F37526] transition-all duration-300"
                  >
                    Konsultasi
                  </ConsultationButton>
                  <Link href={`/products/${service.id}`}>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-[#00028C] hover:text-[#F37526] group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Detail
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button className="bg-gradient-to-r from-[#F37526] to-[#e56620] hover:from-[#e56620] hover:to-[#F37526] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Lihat Semua Layanan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}