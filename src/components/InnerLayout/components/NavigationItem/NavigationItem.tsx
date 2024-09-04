import React from 'react';
import { Link } from 'react-router-dom';

import S from './NavigationItem.module.css';

interface INavigationItemProps {
  linkTo: string;
  text: string;
  isCurrent: boolean;
}

export const NavigationItem: React.FC<INavigationItemProps> = ({
  linkTo,
  text,
  isCurrent,
}) => {
  return (
    <>
      {!isCurrent && (
        <li className={S.navListItem}>
          <Link className={S.navListLink} to={linkTo}>
            {text}
          </Link>
        </li>
      )}
    </>
  );
};
