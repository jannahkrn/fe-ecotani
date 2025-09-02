import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'       // kalau pakai React
import tailwindcss from '@tailwindcss/vite'     // plugin Tailwind

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
