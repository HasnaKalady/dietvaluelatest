// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    // Ensure proper bundling
    sourcemap: true,
    // Explicitly include JSON files as assets
    assetsInclude: ['**/*.json'],
    // Prevent inlining of locale files (important for i18n)
    assetsInlineLimit: 4096,
    rollupOptions: {
      // Improve how i18n resources are handled
      output: {
        manualChunks(id) {
          // Create a separate chunk for locale files
          if (id.includes('/locales/') || id.includes('/i18n/')) {
            return 'i18n';
          }
        }
      }
    }
  },
  // Make sure the base URL is correct for S3
  base: '/',
  // Explicitly configure JSON handling
  json: {
    // This helps ensure JSON files are properly imported
    stringify: true,
    // Ensures proper loading of nested JSON structures
    namedExports: true
  }
})