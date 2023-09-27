import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/codenames/',
  plugins: [react()],
  server: {
    hmr: {
        host: "localhost",
        protocol: "ws",
    },
},
})
