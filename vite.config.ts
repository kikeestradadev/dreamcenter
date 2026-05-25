import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages needs the repo path in production; use root in dev for HMR.
  base: command === 'build' ? '/dreamcenter/' : '/',
}))
