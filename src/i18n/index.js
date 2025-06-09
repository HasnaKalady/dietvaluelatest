import { createI18n } from 'vue-i18n'

// Use Vite's glob import feature for better production compatibility
const localeFiles = import.meta.glob('../locales/*.json', { eager: true })

// Process locale files from the glob import
const messages = {}
for (const path in localeFiles) {
  const matched = path.match(/\.\.\/locales\/(.+)\.json$/)
  if (matched && matched.length > 1) {
    const locale = matched[1]
    messages[locale] = localeFiles[path].default || localeFiles[path]
  }
}

// Create and export the i18n instance
const i18n = createI18n({
  // Essential settings for Vue 3 + Vite compatibility
  legacy: false,        // Must be false for Vue 3
  globalInjection: true, // Makes $t available in templates
  
  // Locale settings
  locale: 'en',         // Default locale (or get from localStorage/browser)
  fallbackLocale: 'en',
  
  // Use messages from the glob import for better Vite compatibility
  messages,
  
  // Additional settings to improve Vite compatibility
  warnHtmlInMessage: 'off',
  runtimeOnly: false,
  
  // Useful for debugging
  silentTranslationWarn: false,
  silentFallbackWarn: false
})

// Debug output to help troubleshoot
console.log('[i18n] Available locales:', Object.keys(messages))
for (const locale in messages) {
  console.log(`[i18n] ${locale} keys:`, Object.keys(messages[locale]).length)
}

export default i18n