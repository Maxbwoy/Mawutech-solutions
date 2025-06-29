import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss({
      config: {
        content: [
          './index.html',
          './src/**/*.{js,ts,jsx,tsx}',
        ],
        theme: {
          extend: {
            colors: {
              'blue-600': '#3B82F6',
              'purple-600': '#9333EA',
              'white': '#FFFFFF',
              'gray-50': '#F9FAFB',
              'gray-600': '#4B5563',
              'green-600': '#10B981',
              'green-700': '#059669',
            },
          },
        },
      },
    })
  ],
  server: {
    port: 5173,
    host: true,
  },
})
