// eslint-disable-next-line import/no-extraneous-dependencies
import { RenderHookOptions, renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
// import { Router } from 'react-router';
// import { createMemoryHistory, History } from 'history';
import createMockStore from './createMockStore';

type Options<T> = {
  mockStore?: ReturnType<typeof createMockStore>;
  mockHistory?: History;
  renderOptions?: RenderHookOptions<T>;
};

/**
 * Redux, ReactRouterに接続したHooksをRenderする（testing-library/react-hooks）
 *
 * 第2引数で提供するStoreとHistoryを指定可能
 *
 * @template TProps
 * @template TResult
 * @param {(props: TProps) => TResult} callback
 * @param {Options<TProps>} [options]
 * @return {*}  {RenderHookResult<TProps, TResult>}
 */
const renderReduxHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: Options<TProps>,
) =>
  renderHook(callback, {
    wrapper: ({ children }) => (
      <Provider store={options?.mockStore ?? createMockStore()}>
        {/* <Router history={options?.mockHistory ?? createMemoryHistory()}> */}
        {children}
        {/* </Router> */}
      </Provider>
    ),
    ...options?.renderOptions,
  });

export default renderReduxHook;
