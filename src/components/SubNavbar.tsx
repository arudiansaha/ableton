import React from 'react';
import { PageContext } from '@/contexts/PageProvider';

function SubNavbar() {
  const activePage = React.useContext(PageContext);
  const paths: string[] = ['about', 'jobs', 'apprenticeships'];
  const listItems = paths.map((path, index) => (
    <li
      className={`navbar__item ${activePage === path ? 'active' : ''}`}
      key={index}
    >
      <a href={`/${path}`}>{path}</a>
    </li>
  ));

  return (
    <nav className="navbar__secondary">
      <ul className="navbar__list">{listItems}</ul>
    </nav>
  );
}

export default SubNavbar;
