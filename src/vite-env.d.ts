/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: 'development' | 'vrt' | 'staging' | 'production';
  readonly VITE_API_KEY: string;
  readonly VITE_API_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
