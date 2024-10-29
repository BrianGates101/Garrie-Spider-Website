import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Garrie-Spider-Website/client/garrie-website/', // Set this to match your repository path
})
