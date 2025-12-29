'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface KhatModeContextType {
  khatMode: boolean;
  toggleKhatMode: () => void;
}

const KhatModeContext = createContext<KhatModeContextType | undefined>(undefined);

export function KhatModeProvider({ children }: { children: ReactNode }) {
  const [khatMode, setKhatMode] = useState(false);

  const toggleKhatMode = () => {
    setKhatMode(prev => !prev);
  };

  return (
    <KhatModeContext.Provider value={{ khatMode, toggleKhatMode }}>
      <div className={`${khatMode ? 'khat-mode-active' : ''}`}>
        {children}
      </div>
    </KhatModeContext.Provider>
  );
}

export function useKhatMode() {
  const context = useContext(KhatModeContext);
  if (context === undefined) {
    throw new Error('useKhatMode must be used within a KhatModeProvider');
  }
  return context;
}
