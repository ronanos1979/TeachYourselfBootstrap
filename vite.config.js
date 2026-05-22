import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: 'src/main/webapp',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/main/webapp/index.html',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['../../react/**/*.test.jsx'],
    setupFiles: '../../test/setup.js',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
