'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function Footer() {
  const { ref: footerRef, isVisible: isFooterVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer 
      ref={footerRef}
      className={`bg-gradient-to-br from-[#00028C] to-[#1a1a8a] text-white transition-all duration-1000 ${
        isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo/logo.png"
                  alt="PT Aghna Partnership"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-tight">AGHNA</span>
                <span className="text-sm font-medium text-gray-300 leading-tight">PT AGHNA PARTNERSHIP KONSULTAN</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              PT Aghna Partnership berkomitmen memberikan solusi perencanaan konstruksi yang inovatif dan terpercaya dengan pengalaman bertahun-tahun.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-white hover:text-[#F37526] hover:bg-white/10 p-3 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-[#F37526] hover:bg-white/10 p-3 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-[#F37526] hover:bg-white/10 p-3 rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-[#F37526] hover:bg-white/10 p-3 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Menu Utama</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/" className="hover:text-[#F37526] transition-colors duration-300">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#F37526] transition-colors duration-300">Layanan</Link></li>
              <li><Link href="/news" className="hover:text-[#F37526] transition-colors duration-300">Portfolio</Link></li>
              <li><a href="#contact" className="hover:text-[#F37526] transition-colors duration-300">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Layanan</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-[#F37526] transition-colors duration-300">Studi/ Kajian Kebijakan</a></li>
              <li><a href="#" className="hover:text-[#F37526] transition-colors duration-300">Master Plan</a></li>
              <li><a href="#" className="hover:text-[#F37526] transition-colors duration-300">Desain Konstruksi</a></li>
              <li><a href="#" className="hover:text-[#F37526] transition-colors duration-300">Pengawasan</a></li>
              <li><a href="#" className="hover:text-[#F37526] transition-colors duration-300">Layanan BIM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Informasi Kontak</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#F37526] mt-1 flex-shrink-0" />
                <span>Jl. Peleman KG I/541, RT.049/RW.010, Rejowinangun, Kota Yogyakarta</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#F37526] flex-shrink-0" />
                <span>0823-2611-9998</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#F37526] flex-shrink-0" />
                <span>info@aghna-partnership.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2024 PT Aghna Partnership. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#F37526] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-[#F37526] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-[#F37526] transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}