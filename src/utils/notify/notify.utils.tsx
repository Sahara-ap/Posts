import { Id, toast, ToastOptions } from 'react-toastify';

import { Toast } from 'components/ui/Toast';

const DEFAULT_AUTO_CLOSE_TIME_MS = 4000;
const ERROR_AUTO_CLOSE_TIME_MS = 7000;

const toastOptions = {
  autoClose: DEFAULT_AUTO_CLOSE_TIME_MS,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  dataTouch: true,
} as ToastOptions;

export const notifySuccess = (text: string): Id =>
  toast(<Toast type="success">{text}</Toast>, toastOptions);

export const notifyError = (text: string): Id =>
  toast(<Toast type="error">{text}</Toast>, {
    ...toastOptions,
    autoClose: ERROR_AUTO_CLOSE_TIME_MS,
  });
