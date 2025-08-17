import { createContext, useContext, useState, ReactNode } from 'react';

export type LayoutType = 'vertical' | 'horizontal';

interface LayoutContextType {
  layoutType: LayoutType;
  setLayoutType: (type: LayoutType) => void;
  toggleLayout: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layoutType, setLayoutType] = useState<LayoutType>('vertical');

  const toggleLayout = () => {
    setLayoutType(prev => prev === 'vertical' ? 'horizontal' : 'vertical');
  };

  return (
    <LayoutContext.Provider value={{ layoutType, setLayoutType, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}