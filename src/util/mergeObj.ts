export default function mergeObj<
  T extends Record<string, unknown>,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  U extends Record<string | number, any>,
>(target: T, orgin: U): T & U {
  const result = {} as T & U;
  Object.assign(result, target);
  Object.keys(orgin).forEach((key: string) => {
    if (
      Object.prototype.hasOwnProperty.call(orgin, key) &&
      orgin[key] !== undefined
    ) {
      // eslint-disable-next-line no-param-reassign
      (result[key] as Record<string, unknown>) = orgin[key];
    }
  });
  return result;
}
