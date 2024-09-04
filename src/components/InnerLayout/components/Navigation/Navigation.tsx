import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavigationItem } from 'components/InnerLayout/components/NavigationItem';
import { navItems } from './constants/nav-items';

import S from './Navigation.module.css';


export const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className={S.navWrapper}>
      <ul className={S.navList}>
        {navItems.map(({ linkTo, text }) => (
          <NavigationItem
            key={linkTo}
            linkTo={linkTo}
            text={text}
            isCurrent={pathname === linkTo}
          />
        ))}
      </ul>
    </nav>
  );
};
