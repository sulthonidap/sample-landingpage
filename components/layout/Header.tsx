'use client';

import { Button } from '@/components/ui/button';
import { ConsultationButton } from '@/components/ui/ConsultationButton';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
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
  );
}
