'use client';

import { Button } from '@/components/ui/button';
import { ConsultationButton } from '@/components/ui/ConsultationButton';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const { ref: heroRef, isVisible: isHeroVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Header muncul setelah scroll 100px
      setIsHeaderVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Modern Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto md:px-32">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo/logo.png"
                  alt="PT Aghna Partnership"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#00028C] leading-tight">AGHNA</span>
                <span className="text-xs font-medium text-gray-600 leading-tight">PT AGHNA PARTNERSHIP KONSULTAN</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#F37526] transition-colors font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-[#F37526] transition-colors font-medium">
                Layanan
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-[#F37526] transition-colors font-medium">
                Portfolio
              </Link>
            </nav>
              <ConsultationButton 
                size="sm" 
                className="bg-[#F37526] hover:bg-[#e56620] text-white"
              >
                Konsultasi
              </ConsultationButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-200">
              <nav className="flex flex-col space-y-6">
                <Link href="/" className="text-gray-700 hover:text-[#F37526] transition-colors font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-[#F37526] transition-colors font-medium">
                  Layanan
                </Link>
                <Link href="/news" className="text-gray-700 hover:text-[#F37526] transition-colors font-medium">
                  Portfolio
                </Link>
                <ConsultationButton 
                  size="sm" 
                  className="bg-[#F37526] hover:bg-[#e56620] text-white w-full"
                >
                  Konsultasi
                </ConsultationButton>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 transition-all duration-1000 ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 2, 140, 0.8), rgba(243, 117, 38, 0.6)), url(https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg)'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6 py-16 max-w-5xl mx-auto">
          {/* Logo di Hero */}
          <div className="flex justify-center mb-16">
            <div className="relative w-24 h-24 md:w-40 md:h-40">
              <Image
                src="/logo/logo.png"
                alt="PT Aghna Partnership"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
            Solusi Perencanaan
            <span className="block text-[#F37526]"> Konstruksi Inovatif</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-16 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            PT Aghna Partnership berkomitmen memberikan solusi perencanaan konstruksi yang inovatif dan terpercaya dengan pengalaman bertahun-tahun
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button 
              size="lg" 
              className="bg-[#F37526] hover:bg-[#e56620] text-white px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Lihat Layanan <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <ConsultationButton 
              size="lg" 
              variant="outline" 
              className="border-3 border-white text-white hover:bg-white hover:text-[#00028C] px-10 py-5 text-xl font-bold transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              Konsultasi Gratis
            </ConsultationButton>
          </div>
        </div>
      </section>
    </>
  );
}