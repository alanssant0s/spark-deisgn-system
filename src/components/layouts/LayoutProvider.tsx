import { ReactNode } from 'react';
import { useLayout } from '@/contexts/LayoutContext';
import { VerticalLayout } from './VerticalLayout';
import { HorizontalLayout } from './HorizontalLayout';

interface LayoutProviderProps {
  children: ReactNode;
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const { layoutType } = useLayout();

  if (layoutType === 'horizontal') {
    return <HorizontalLayout>{children}</HorizontalLayout>;
  }

  return <VerticalLayout>{children}</VerticalLayout>;
}