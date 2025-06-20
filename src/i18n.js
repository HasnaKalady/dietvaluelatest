// i18n.js
import { createI18n } from 'vue-i18n'
import en from './locales/english.json'
import ar from './locales/arabic.json'




function loadLocaleMessages() {
  const locales = [{ en: en }, { ar: ar }];
  const messages = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  });
  return messages;
}
export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  legacy: false,
  messages: loadLocaleMessages(),
});
