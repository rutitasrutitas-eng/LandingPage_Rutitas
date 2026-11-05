/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_URL?: string
  readonly VITE_GOOGLE_PLAY_URL?: string
  readonly VITE_GA_MEASUREMENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
