<template>
  <!-- Full width section with no horizontal spacing -->
  <section class="w-full max-w-none py-4 sm:py-4 md:py-5 lg:-mt-3 mr-2 ml-2 mb-6 sm:mb-10 md:mb-10 lg:mb-16 overflow-x-hidden">
  <div class="w-full px-2 sm:px-3 md:px-2 lg:px-2">
    <div
      class="w-full rounded-lg overflow-hidden shadow-lg"
      :style="appDownloadStyle"
    >
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Text Content - Full width on mobile, half width on md+ -->
          <div 
            class="w-full md:w-1/2 p-4 sm:p-5 md:p-6 lg:p-8 text-center md:text-left" 
            :class="{ 'md:text-right md:order-1': locale === 'ar', 'md:order-1': locale === 'en' }"
          >
          <h2 class="font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
  <span class="lg:block">{{ t('appDownload.headingLine1') }}</span>
  <span class="lg:block">{{ t('appDownload.headingLine2') }}</span>
</h2>
            <p class="mt-2 sm:mt-2 md:mt-3 text-white text-sm xs:text-base sm:text-lg lg:text-xl max-w-md" 
               :class="{ 
                 'mx-auto md:mx-0': locale === 'en', 
                 'mx-auto md:mr-0 md:ml-auto': locale === 'ar'
               }">
              {{ t('appDownload.description') }}
            </p>
            <button
              class="mt-3 sm:mt-4 md:mt-5 lg:mt-6 bg-white text-black font-bold text-sm sm:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2 md:py-3 rounded-lg sm:rounded-xl transform transition-all duration-300 hover:scale-105"
              @click="redirectToStore"
            >
              {{ t('appDownload.buttonText') }}
            </button>
          </div>
          
          <!-- App Screenshot - Hidden on mobile, visible from md breakpoint -->
          <div 
            class="hidden md:flex w-full md:w-1/2 p-3 lg:p-4" 
            :class="{ 
              'justify-end md:order-2': locale === 'en', 
              'justify-start md:order-2 pl-0 md:pl-0 lg:pl-0': locale === 'ar' 
            }"
          >
            <img
              :src="appscreenshotImage"
              :alt="t('appDownload.imageAlt')"
              class="w-full max-w-sm lg:max-w-md rounded-lg transform -mb-4"
              :class="{ 
                'mr-auto ml-0 md:ml-0 lg:ml-0': locale === 'ar'
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import appscreenshotImage from '/assets/appscreenshotimage.png';

const { t, locale } = useI18n();

const appDownloadStyle = {
  backgroundColor: '#DBAE8D',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

// Function to determine device type
const getDeviceType = () => {
  const width = window.innerWidth;
  if (width < 480) return 'mobile-small';
  if (width < 640) return 'mobile-large';
  if (width < 768) return 'tablet-small';
  if (width < 1024) return 'tablet-large';
  if (width < 1280) return 'desktop';
  return 'large-desktop';
};

const redirectToStore = () => {
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
    // Desktop users – open both store pages in new tabs
    window.open('https://apps.apple.com/kw/app/dietvalue/id6446318456', '_blank');
    window.open('https://play.google.com/store/apps/details?id=io.cocopalms.dietsteps&pcampaignid=web_share', '_blank');
  }
};

// Responsive adjustments on window resize
const handleResize = () => {
  // You can add additional responsive logic here if needed
  console.log('Current device type:', getDeviceType());
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});
</script>

<style scoped>
/* Reset any potential default margins or padding */
section {
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}

/* RTL support */
[dir="rtl"] .md\:text-left {
  text-align: right;
}

/* Extra small screen support */
@media (min-width: 375px) and (max-width: 639px) {
  .xs\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  
  .xs\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  
  .xs\:max-w-\[220px\] {
    max-width: 220px;
  }
}

/* Handle very small screens (below 375px) */
@media (max-width: 374px) {
  .text-sm {
    font-size: 0.813rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
}
</style>