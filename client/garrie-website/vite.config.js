import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Garrie-Spider-Website/', // Set this to match your repository path
  build: {
    outDir: 'dist', // Ensure output is compiled to JavaScript here
  },
})
