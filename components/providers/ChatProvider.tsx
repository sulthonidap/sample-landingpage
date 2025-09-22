'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Context untuk mengontrol chat widget
const ChatContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useChat = () => useContext(ChatContext);

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ChatContext.Provider>
  );
}
