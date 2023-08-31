import React from 'react';
import SubFooter from './SubFooter';

function NavigationFooter({ children }: { children: React.ReactNode }) {
  return (
    <footer className="footer">
      <h2 className="footer__title">Ableton</h2>
      <div className="footer__wrapper">{children}</div>
      <SubFooter />
    </footer>
  );
}

export default NavigationFooter;
