// addEventListener
const on = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']>
): void => {
  if (obj?.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>),
    );
  }
};

// removeEventListener
const off = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']>
): void => {
  if (obj?.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement['removeEventListener']>),
    );
  }
};

/**
 *
 * @param type
 * @param obj 'T extends Window | Document | HTMLElement | EventTarget'
 * @param args
 * addEventListenerかremoveEventListerを生成する共通関数
 */
const eventFactory = <T extends Window | Document | HTMLElement | EventTarget>(
  type: 'add' | 'remove',
  obj: T | null,
  ...args:
    | Parameters<T['addEventListener']>
    | Parameters<T['removeEventListener']>
): void => {
  if (type === 'add') {
    on(obj, ...args);
  }
  if (type === 'remove') {
    off(obj, ...args);
  }
};

export default eventFactory;
