<template>
  <div class="i18n-test">
    <h2>{{ $t('welcome') }}</h2>
    
    <div class="locale-switcher">
      <!-- Language switcher -->
      <button 
        v-for="locale in availableLocales" 
        :key="locale"
        @click="changeLocale(locale)"
        :class="{ active: currentLocale === locale }"
      >
        {{ locale }}
      </button>
    </div>
    
    <div class="debug-info">
      <!-- Debug information -->
      <p>Current locale: {{ currentLocale }}</p>
      <p>Available keys: {{ Object.keys(messages[currentLocale] || {}).join(', ') }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'TestI18n',
  setup() {
    const { t, locale, messages } = useI18n({ useScope: 'global' })
    
    // Available locales
    const availableLocales = computed(() => Object.keys(messages.value))
    
    // Current locale
    const currentLocale = computed(() => locale.value)
    
    // Change locale function
    const changeLocale = (newLocale) => {
      locale.value = newLocale
      // Optional: Save to localStorage
      localStorage.setItem('locale', newLocale)
    }
    
    return {
      t,
      messages,
      availableLocales,
      currentLocale,
      changeLocale
    }
  }
}
</script>

<style scoped>
.i18n-test {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 20px 0;
}

.locale-switcher {
  margin: 15px 0;
}

.locale-switcher button {
  margin-right: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background: #f5f5f5;
}

.locale-switcher button.active {
  background: #007bff;
  color: white;
  border-color: #0069d9;
}

.debug-info {
  margin-top: 20px;
  font-size: 14px;
  color: #666;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 4px;
}
</style>