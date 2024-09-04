import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { postReducer } from './post-reducer/post.reducer';

const rootReducer = combineReducers({
  postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export type TGetStateFn = () => TRootState;
