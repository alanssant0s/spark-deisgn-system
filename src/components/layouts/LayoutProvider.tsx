import { ReactNode, useEffect, useState } from 'react';
import { useLayout } from '@/contexts/LayoutContext';
import { VerticalLayout } from './VerticalLayout';
import { HorizontalLayout } from './HorizontalLayout';

interface LayoutProviderProps {
  children: ReactNode;
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const { getCurrentLayoutType, desktopLayoutType, mobileLayoutType } = useLayout();
  const [currentLayout, setCurrentLayout] = useState<'vertical' | 'horizontal'>('vertical');

  useEffect(() => {
    const updateLayout = () => {
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      setCurrentLayout(isMobile ? mobileLayoutType : desktopLayoutType);
    };

    // Set initial layout
    updateLayout();

    // Listen for screen size changes
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [desktopLayoutType, mobileLayoutType]);

  if (currentLayout === 'horizontal') {
    return <HorizontalLayout>{children}</HorizontalLayout>;
  }

  return <VerticalLayout>{children}</VerticalLayout>;
}