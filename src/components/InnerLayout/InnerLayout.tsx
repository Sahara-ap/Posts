import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from './components/Navigation';

import S from './InnerLayout.module.css';

export const InnerLayout: React.FC = () => {

  return (
    <div className={S.wrapper}>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
