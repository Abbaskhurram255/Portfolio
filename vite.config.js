import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import path from 'path'
import { BASE } from './src/host_constants.jsx'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return { plugins: [
	react(),
	tailwindcss()
  ],
  assetsInclude: [
    '**/*.glb',
  ],
  resolve: {
    alias: {
      "@": path.resolve(
          import.meta.dirname,
          "./src"
      ),
      "^": path.resolve(
          import.meta.dirname,
          "./"
      )
    }
  },
  base: BASE
  }
})
