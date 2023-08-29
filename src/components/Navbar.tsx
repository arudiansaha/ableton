import React from 'react';
import { MenuContext } from '@/contexts/MenuProvider';

type NavbarProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Navbar({ onClick }: NavbarProps) {
  const paths: string[] = [
    'Live', 'Push', 'Note', 'Link', 'Shop', 'Packs', 'Help',
  ];

  const activeMenuClass = React.useContext(MenuContext) === 'active'
    ? 'active'
    : '';

  const listItems = paths.map((path, index) => (
    <li className="navbar__item" key={index}>
      <a href={`#${path.toLocaleLowerCase()}`}>{path}</a>
    </li>
  ));

  return (
    <nav className={`navbar ${activeMenuClass}`}>
      <ul className="navbar__list">
        {listItems}
        <li className="navbar__item">
          <button
            className="navbar__button"
            type="button"
            aria-label="more from ableton"
            onClick={onClick}
          >
            More&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
            </svg>
          </button>
        </li>
        <li className="navbar__item navbar__item--blue">
          <a href="#">Try Live for free</a>
        </li>
        <li className="navbar__item">
          <a href="#">Log in or register</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
