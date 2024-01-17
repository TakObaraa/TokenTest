import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { State } from '../reducer';
import type { AppState } from './index';

const Selector = (state: State): AppState => state.App;

export const useVersionSelector = () =>
  useSelector(createSelector(Selector, (state) => state.version));

export const useNetworkConnectedSelector = () =>
  useSelector(createSelector(Selector, (state) => state.networkConnected));
