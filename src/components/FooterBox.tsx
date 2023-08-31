import React from 'react';

type FooterBoxProps = {
  children: React.ReactNode;
  id: string;
  title: string;
}

function FooterBox({ children, id, title }: FooterBoxProps) {
  return (
    <div id={id} className="footer__box">
      <h3 className="footer__title">{title}</h3>
      {children}
    </div>
  );
}

export default FooterBox;
