import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { reducer } from './reducer';

export const store = configureStore({ reducer });

type AppDispatch = typeof store.dispatch;

export function useAppDispatch(): AppDispatch {
  return useDispatch<AppDispatch>();
}
