import React, { ReactNode } from 'react';
import { ToastContentProps } from 'react-toastify';
import { ReactComponent as CloseWhite } from 'assets/toast-icons/toast-close-white.svg';

import S from './Toast.module.css';

interface ToastProps {
  type: 'success' |  'error';
  children: ReactNode;
}

export const Toast: React.FC<Partial<ToastContentProps> & ToastProps> = ({
  type,
  children,
  closeToast,
}) => {
  switch (type) {
    case 'success':
      return (
        <div className={S.success}>
          {children}
          <button className={S.closeButton} onClick={closeToast}>
            <CloseWhite />
          </button>
        </div>
      );

    case 'error':
      return (
        <div className={S.error}>
          {children}
          <button className={S.closeButton} onClick={closeToast}>
            <CloseWhite />
          </button>
        </div>
      );
  }
};
