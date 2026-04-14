import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../frontend',   // relative to the config file location
    emptyOutDir: true        // optional: cleans the folder before build
  }
})