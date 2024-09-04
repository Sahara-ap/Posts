import React, { ReactNode } from 'react';
import { ToastContentProps } from 'react-toastify';

import S from './Toast.module.css';

interface ToastProps {
  type: 'success' |  'error';
  children: ReactNode;
}

export const Toast: React.FC<Partial<ToastContentProps> & ToastProps> = ({
  type,
  children,
}) => {
  switch (type) {
    case 'success':
      return (
        <div className={S.success}>
          {children}
        </div>
      );

    case 'error':
      return (
        <div className={S.error}>
          {children}
        </div>
      );
  }
};
