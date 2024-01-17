declare module '*.svg' {
  import React from 'react';

  // eslint-disable-next-line import/prefer-default-export
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
