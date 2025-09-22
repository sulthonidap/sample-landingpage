'use client';

import { Card } from '@/components/ui/card';
import { Target, Eye, Award, Users, Clock, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function About() {
  const { ref: aboutRef, isVisible: isAboutVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: statsRef, isVisible: isStatsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesRef, isVisible: isValuesVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div 
          ref={aboutRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#F37526]/10 text-[#F37526] rounded-full text-sm font-medium mb-6">
            Tentang Kami
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00028C] mb-6">
            Solusi Perencanaan
            <span className="block text-[#F37526]"> Konstruksi Terpercaya</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            PT Aghna Partnership berkomitmen memberikan solusi perencanaan konstruksi yang inovatif dan terpercaya. 
            Memiliki pengalaman bertahun-tahun, kami telah berhasil menyelesaikan berbagai proyek perencanaan konstruksi, 
            masterplan, dan kajian mulai dari skala kecil hingga besar, baik untuk sektor publik maupun swasta.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-200 ${
            isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#00028C] mb-2">100+</div>
            <div className="text-gray-600 font-medium">Proyek Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F37526] mb-2">50+</div>
            <div className="text-gray-600 font-medium">Klien Puas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#00028C] mb-2">5+</div>
            <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F37526] mb-2">100%</div>
            <div className="text-gray-600 font-medium">Komitmen Kualitas</div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F37526] to-[#e56620] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#00028C] mb-4">Misi Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Memberikan solusi perencanaan konstruksi yang inovatif dan terpercaya, 
              meningkatkan efisiensi kelancaran kinerja yang ingin dicapai.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00028C] to-[#1a1a8a] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#00028C] mb-4">Visi Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Menjadi perusahaan terdepan dalam solusi perencanaan konstruksi dengan 
              inovasi dan teknologi terkini untuk menghadirkan solusi terbaik.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F37526] to-[#e56620] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#00028C] mb-4">Nilai Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Komitmen memberikan inovasi pada perancangan konstruksi, keunggulan, 
              integritas, dan kesuksesan klien menjadi landasan dalam setiap proyek.
            </p>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-[#00028C] to-[#1a1a8a] rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Aghna Partnership?</h3>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Didukung oleh tenaga ahli yang kompeten dan profesional, kami mengikuti perkembangan teknologi terkini 
              untuk menghadirkan solusi terbaik bagi Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Tim Ahli</h4>
              <p className="text-gray-200">Tenaga ahli yang kompeten dan profesional dengan pengalaman bertahun-tahun</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Inovasi Terkini</h4>
              <p className="text-gray-200">Mengikuti perkembangan teknologi terkini untuk solusi terbaik</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Pengalaman Luas</h4>
              <p className="text-gray-200">Berpengalaman dalam proyek skala kecil hingga besar, publik dan swasta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}