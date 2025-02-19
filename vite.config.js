import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    target: "esnext",
    rollupOptions: {
      output: {
        format: "es",
        entryFileNames: "index.js", // Ensures Vite outputs an index.js file
      },
    },
  },
})
