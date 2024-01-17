import type { PathParam } from 'react-router-dom';
import { Paths } from './type';

export * from 'react-router-dom';

declare module 'react-router-dom' {
  export function generatePath<Path extends Paths>(
    path: Path,
    params?: {
      [key in PathParam<Path>]: string | null;
    },
  ): string;
}
