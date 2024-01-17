import React from 'react';

const mergeComponents = <
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T extends React.FC<any>,
  K extends Record<PropertyKey, unknown>,
>(
  defaultComponent: T,
  components: K,
): T & K => {
  const merged = Object.assign(defaultComponent, components);
  return merged;
};

export default mergeComponents;
