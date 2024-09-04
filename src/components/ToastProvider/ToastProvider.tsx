import React, { createContext, RefObject, useRef } from 'react';
import { ToastContainer } from 'react-toastify';

import { IToastProviderProps } from './types/toast-provider-props.interface';

export const ToastContext = createContext<RefObject<HTMLElement> | null>(null);

export const ToastProvider: React.FC<IToastProviderProps> = ({ children }) => {
  const toastContainerRef = useRef<HTMLDivElement>(null);

  return (
    <ToastContext.Provider value={toastContainerRef}>
      <ToastContainer
        ref={toastContainerRef}
        position={'bottom-center'}
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
      {children}
    </ToastContext.Provider>
  );
};
