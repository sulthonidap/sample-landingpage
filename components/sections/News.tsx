'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import type { NewsItem } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

function getLatestPortfolio(): NewsItem[] {
  // Static data for portfolio projects PT Aghna Partnership
  return [
    {
      id: 1,
      title: 'Proyek Masterplan Kawasan Industri',
      content: 'Penyusunan masterplan kawasan industri terintegrasi dengan pendekatan sustainable development dan green building concept.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      date: '2024-01-15',
      created_at: '2024-01-15T00:00:00Z'
    },
    {
      id: 2,
      title: 'Desain Konstruksi Gedung Perkantoran',
      content: 'Perancangan gedung perkantoran modern 15 lantai dengan sistem BIM dan teknologi konstruksi terkini untuk efisiensi maksimal.',
      image: 'https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg',
      date: '2024-01-10',
      created_at: '2024-01-10T00:00:00Z'
    },
    {
      id: 3,
      title: 'Kajian Kebijakan Infrastruktur',
      content: 'Studi komprehensif untuk pengembangan infrastruktur transportasi publik dengan analisis dampak lingkungan dan sosial.',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg',
      date: '2024-01-05',
      created_at: '2024-01-05T00:00:00Z'
    }
  ];
}

export function News() {
  const portfolio = getLatestPortfolio().slice(0, 3); // Hanya tampilkan 3 portfolio di home
  const { ref: newsRef, isVisible: isNewsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: isGridVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={newsRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isNewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#00028C]/10 text-[#00028C] rounded-full text-sm font-medium mb-6">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00028C] mb-6">
            Karya Terbaik
            <span className="block text-[#F37526]"> Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sebuah kehormatan bagi kami untuk menampilkan karya terbaik kami dalam perencanaan konstruksi
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {portfolio.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden bg-white">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={project.image || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#F37526] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Portfolio
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(project.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-bold text-[#00028C] mb-4 group-hover:text-[#F37526] transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {project.content}
                </p>
                <Link href={`/news/${project.id}`}>
                  <Button 
                    variant="ghost" 
                    className="text-[#F37526] hover:text-[#e56620] p-0 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news">
            <Button className="bg-gradient-to-r from-[#00028C] to-[#1a1a8a] hover:from-[#1a1a8a] hover:to-[#00028C] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Lihat Semua Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}