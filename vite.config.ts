import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig(({ command }) => ({
  optimizeDeps: {
    force: command === 'serve',
    include: ['@tanstack/react-router > @tanstack/react-store'],
  },
  server: {
    host: '127.0.0.1',
    port: 4000,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 4000,
    strictPort: true,
  },
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
}))

export default config
