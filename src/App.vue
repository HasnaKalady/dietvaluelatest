<template>
  <div class="app-container" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <Navbar />
    <HeroSection />
    <WelcomeSection />
    <PricingSection />
    <AppDownload />
    <Footer />
   </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import PricingSection from './components/PricingSection.vue'
import AppDownload from './components/AppDownload.vue'
import Footer from './components/Footer.vue'

const { locale } = useI18n()

onMounted(() => {
  // Check for saved language preference
  const savedLanguage = localStorage.getItem('app-language')
  if (savedLanguage) {
    locale.value = savedLanguage
    
    // Set document direction based on language
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = savedLanguage
  }
})
</script>

<style>
/* Existing styles... */

/* Add RTL support for specific elements */
html[dir="rtl"] {
  direction: rtl;
}

body[dir="rtl"] {
  direction: rtl;
}

/* Ensure RTL support for flex and grid layouts */
[dir="rtl"] {
  /* Flip flex and grid properties for RTL */
  --tw-space-x-reverse: 1;
  --tw-space-y-reverse: 1;
  --tw-translate-x-reverse: 1;
  --tw-rotate-reverse: 1;
}
</style>