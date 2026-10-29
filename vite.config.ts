import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/LP_NegraRosa/',
  plugins: [react(), tailwindcss()],
  build: { target: 'es2020', cssCodeSplit: false },
})
