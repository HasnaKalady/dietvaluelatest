// src/utils/localeLoader.js

/**
 * Load locale files using Vite's import.meta.glob
 * This is a utility function that can be used in the i18n setup
 */
export const loadLocaleMessages = () => {
  // Use Vite's glob import feature
  const localeFiles = import.meta.glob('../locales/*.json', { eager: true })
  
  // Process the files
  const messages = {}
  
  for (const path in localeFiles) {
    // Extract locale from file path
    const matched = path.match(/\.\.\/locales\/(.+)\.json$/)
    
    if (matched && matched.length > 1) {
      const locale = matched[1]
      // Handle both default exports and regular exports
      messages[locale] = localeFiles[path].default || localeFiles[path]
    }
  }
  
  // Debug output
  if (import.meta.env.DEV) {
    console.log('[i18n] Loaded locales:', Object.keys(messages))
    
    // Check if any locales were loaded
    if (Object.keys(messages).length === 0) {
      console.warn('[i18n] No locale files found. Check your path to locales folder.')
    }
  }
  
  return messages
}