import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the app from the repository path.
export default defineConfig({
  plugins: [react()],
  base: '/register-training/',
})
