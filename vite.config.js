import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel serves the app from the domain root.
// Do not use the GitHub Pages repository path here.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
