<!-- Updated Navbar.vue with Toggle Button for Language Switch -->
<template>
  <div class="w-full overflow-hidden">
    <!-- Header -->
    <header class="bg-white p-2 md:p-3 lg:p-3  flex flex-col md:flex-row md:justify-between md:items-center max-w-full shadow-sm">
      <!-- Logo -->
      <div class="mb-2 md:mb-0 flex justify-center md:justify-start md:ml-4">
  <img src="/assets/file.svg" alt="Brand Logo" class="h-8 sm:h-10 lg:h-12 w-auto">
</div>

      <!-- Language and Download Button Section -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-end w-full md:w-auto gap-2 sm:gap-3">
        <!-- Language Toggle Button -->
        <div class="flex items-center justify-center sm:justify-start">
          <button 
            @click="toggleLanguage" 
            class="flex items-center text-xs sm:text-sm px-3 py-1 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <img 
              :src="currentLanguageFlag" 
              :alt="t('navbar.language.flag')" 
              class="rounded-full w-4 h-4 mr-2" 
            />
            <span style="color: #8B844E">
              {{ locale === 'en' ? 'EN ' : 'AR' }}
            </span>
          </button>
        </div>

        <!-- Download Button -->
        <button
          class="text-white font-bold text-xs sm:text-sm px-2 py-1 sm:px-4 md:px-6 lg:px-6 py-1 sm:py-2 rounded-md sm:rounded-lg mx-auto sm:mx-0 sm:ml-4 md:mr-4 mt-2 sm:mt-0 w-auto"
          style="background-color: #6B5E0F;"
          @click="redirectToStore"
        >
          {{ t('navbar.buttonText') }}
        </button>
      </div>
    </header>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Navbar',
  setup() {
    const { locale, t } = useI18n()

    console.log('Current locale:', locale.value) // Debug log

    const availableLanguages = {
      en: { 
        name: 'English', 
        flag: '/assets/united-states.png', 
        code: 'EN'
      },
      ar: { 
        name: 'العربية', 
        flag: '/assets/arabic-flag.png', 
        code: 'AR'
      }
    }

    const currentLanguageFlag = computed(() => {
      console.log('Current language:', locale.value) // Debug log
      return availableLanguages[locale.value]?.flag || availableLanguages.en.flag
    })

    const toggleLanguage = () => {
      console.log('Toggling language')
      
      try {
        // Toggle between English and Arabic
        const newLang = locale.value === 'en' ? 'ar' : 'en'
        
        // Directly set the locale
        locale.value = newLang
        
        console.log('Locale after change:', locale.value)
        
        // Update document direction and language
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
        document.documentElement.lang = newLang

        // Persist language preference
        localStorage.setItem('app-language', newLang)

        // Log current translations to verify
        console.log('Current translations:', t('navbar.brandName.part1'), t('navbar.brandName.part2'))
      } catch (error) {
        console.error('Error changing language:', error)
      }
    }

    // Add event listener when mounted
    onMounted(() => {
      // Check initial language
      const savedLanguage = localStorage.getItem('app-language')
      console.log('Saved language:', savedLanguage)
      
      if (savedLanguage) {
        try {
          locale.value = savedLanguage
          document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
          document.documentElement.lang = savedLanguage
          
          console.log('Initial locale set to:', locale.value)
        } catch (error) {
          console.error('Error setting initial language:', error)
        }
      }
    })

    return {
      t,
      locale,
      availableLanguages,
      currentLanguageFlag,
      toggleLanguage
    }
  },
  methods: {
    redirectToStore() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const platform = navigator.platform;

      const isAndroid = /Android/i.test(userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(platform) ||
                     (/MacIntel/.test(platform) && navigator.maxTouchPoints > 1);

      if (isAndroid) {
        window.location.href = 'https://play.google.com/store/apps/details?id=io.cocopalms.dietsteps&pcampaignid=web_share';
      } else if (isIOS) {
        window.location.href = 'https://apps.apple.com/kw/app/dietvalue/id6446318456';
      } else {
        // Desktop users – open both links
        window.open('https://apps.apple.com/kw/app/dietvalue/id6446318456', '_blank');
        window.open('https://play.google.com/store/apps/details?id=io.cocopalms.dietsteps&pcampaignid=web_share', '_blank');
      }
    }
  }
}
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>