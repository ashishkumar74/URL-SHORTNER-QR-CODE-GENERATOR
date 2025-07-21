import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    historyApiFallback: true, // ✅ tell Vite to handle SPA fallback
  }
})

/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Clean & correct config
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // optional: only for some routing cases
  }
})
*/