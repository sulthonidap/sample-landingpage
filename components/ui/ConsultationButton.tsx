'use client';

import { Button } from '@/components/ui/button';
import { useChat } from '@/components/providers/ChatProvider';

interface ConsultationButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  [key: string]: any;
}

export function ConsultationButton({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'default',
  ...props 
}: ConsultationButtonProps) {
  const { setIsOpen } = useChat();

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
}
