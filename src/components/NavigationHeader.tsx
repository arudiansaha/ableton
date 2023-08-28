import React from 'react';
import { MenuContext } from '@/contexts/MenuProvider';

function NavigationHeader({ children }: { children: React.ReactNode }) {
  const activeMenuClass = React.useContext(MenuContext) === 'active'
    ? 'active'
    : '';

  return (
    <header className={`header ${activeMenuClass}`}>
      {children}
    </header>
  );
}

export default NavigationHeader;
