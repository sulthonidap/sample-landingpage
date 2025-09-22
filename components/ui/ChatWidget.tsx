'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { useChat } from '@/components/providers/ChatProvider';

export function ChatWidget() {
  const { isOpen, setIsOpen } = useChat();
  const [isVisible, setIsVisible] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  useEffect(() => {
    // Tampilkan chat widget setelah 3 detik
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Halo, saya tertarik dengan layanan PT Aghna Partnership. Bisa konsultasi lebih lanjut?";
    const phoneNumber = "6282326119998"; // Format internasional tanpa +
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhone = () => {
    window.open('tel:082326119998', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@aghna-partnership.com?subject=Konsultasi Layanan PT Aghna Partnership', '_self');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      <div className={`transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 mb-4 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#F37526] to-[#e56620] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">CS Aghna Partnership</h3>
                  <p className="text-xs text-white/80">Online sekarang</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={closeChat}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="space-y-3">
              {/* Chat Bubble */}
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                <p className="text-gray-800">
                  👋 Halo! Saya dari PT Aghna Partnership. 
                  <br /><br />
                  Ada yang bisa saya bantu untuk konsultasi perencanaan konstruksi Anda?
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat via WhatsApp
                </Button>
                
                <Button
                  onClick={handlePhone}
                  variant="outline"
                  className="w-full text-sm py-2"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Telepon Langsung
                </Button>
                
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="w-full text-sm py-2"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Kirim Email
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Kami siap membantu 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-[#F37526] to-[#e56620] hover:from-[#e56620] hover:to-[#F37526] text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          1
        </div>
      )}
    </div>
  );
}
