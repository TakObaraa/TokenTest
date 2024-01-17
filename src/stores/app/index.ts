import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AppState = {
  version: string;
  networkConnected: boolean;
};

const initialState: AppState = {
  version: '',
  networkConnected: true,
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearAppState: (state) => Object.assign(state, initialState),
    loadPlatformAction: (
      state,
      action: PayloadAction<{
        platformStatus: AppState;
      }>,
    ) => {
      state.version = action.payload.platformStatus.version;
      state.networkConnected = action.payload.platformStatus.networkConnected;
    },
  },
});

export const { clearAppState, loadPlatformAction } = AppSlice.actions;
