import React from 'react';
import { MenuContext } from '@/contexts/MenuProvider';

type AbletonLogoProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function AbletonLogo({ onClick }: AbletonLogoProps) {
  const activeMenuClass = React.useContext(MenuContext) === 'active'
    ? 'active'
    : '';

  return (
    <div className="header__bar">
      <a className="header__logo" href="/">
        <svg
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="21"
          viewBox="0 0 45 21"
        >
          <path
            d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"
          ></path>
        </svg>
      </a>
      <button
        className="header__button"
        type="button"
        aria-label="open navigation bar"
        onClick={onClick}
      >
        Menu&nbsp;
        <svg
          className={activeMenuClass}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="8"
          height="8"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default AbletonLogo;
