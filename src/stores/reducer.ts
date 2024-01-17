import { combineReducers } from '@reduxjs/toolkit';
import { AppSlice } from './app';

export const reducer = combineReducers({
  App: AppSlice.reducer,
});

export type State = ReturnType<typeof reducer>;
