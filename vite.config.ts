/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: { host: true, open: true },
  plugins: [react(), svgr(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
    exclude: ['**/node_modules/**', '**/vrt/**'],
  },
});
