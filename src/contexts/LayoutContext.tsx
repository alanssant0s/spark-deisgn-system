import { createContext, useContext, useState, ReactNode } from 'react';

export type LayoutType = 'vertical' | 'horizontal';
export type SidebarTheme = 'light' | 'dark';

interface LayoutContextType {
  layoutType: LayoutType;
  setLayoutType: (type: LayoutType) => void;
  toggleLayout: () => void;
  desktopLayoutType: LayoutType;
  mobileLayoutType: LayoutType;
  sidebarTheme: SidebarTheme;
  setDesktopLayoutType: (type: LayoutType) => void;
  setMobileLayoutType: (type: LayoutType) => void;
  setSidebarTheme: (theme: SidebarTheme) => void;
  getCurrentLayoutType: () => LayoutType;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layoutType, setLayoutType] = useState<LayoutType>('horizontal');
  const [desktopLayoutType, setDesktopLayoutType] = useState<LayoutType>('horizontal');
  const [mobileLayoutType, setMobileLayoutType] = useState<LayoutType>('vertical');
  const [sidebarTheme, setSidebarTheme] = useState<SidebarTheme>('light');

  const toggleLayout = () => {
    setLayoutType(prev => prev === 'vertical' ? 'horizontal' : 'vertical');
  };

  const getCurrentLayoutType = () => {
    // Check if it's mobile screen size
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    return isMobile ? mobileLayoutType : desktopLayoutType;
  };

  return (
    <LayoutContext.Provider value={{ 
      layoutType, 
      setLayoutType, 
      toggleLayout,
      desktopLayoutType,
      mobileLayoutType,
      sidebarTheme,
      setDesktopLayoutType,
      setMobileLayoutType,
      setSidebarTheme,
      getCurrentLayoutType
    }}>
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