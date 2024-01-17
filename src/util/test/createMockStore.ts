import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '@stores/reducer';
import { store } from '@stores/stores';

/**
 * テスト用のStoreを生成する
 *
 * @return {*}  {typeof store}
 */
const createMockStore = (): typeof store =>
  configureStore({
    reducer,
  });

export default createMockStore;
