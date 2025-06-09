<template>
  <section class="py-5 sm:pt-8 md:pt-8 lg:pt-12 mr-2 ml-2 pb-2 sm:pb-3">
    <div class="w-full">
      <div
        class="rounded-lg p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between"
        :style="heroStyle"
      >
        <!-- Text Content - Left side -->
        <div class="text-white pl-2 sm:pl-4 md:pl-8 w-full md:w-1/2 pb-6 md:pb-0" :class="{ 'md:order-2': isRTL }">
          <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4 leading-tight" v-html="formattedHeading"></h1>
          
          <!-- Price Display -->
          <div class="flex items-end gap-1 sm:gap-2 mt-4 sm:mt-6">
            <div class="text-7xl sm:text-9xl md:text-8xl lg:text-9xl font-extrabold">{{ t('heroSection.price') }}</div>
            <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight -ml-1 sm:-ml-2 mb-1 sm:mb-2 md:leading-tight">
              {{ t('heroSection.period') }}<br />
              <span class="text-sm sm:text-base md:text-lg lg:text-xl font-bold">{{ t('heroSection.currency') }}</span>
            </div>
          </div>
          
          <!-- CTA Button -->
          <button
            class="mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-[#5F5100] text-white text-sm sm:text-base md:text-lg font-bold
             px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl
             hover:bg-[#4A3E00] transition-colors duration-300 transform hover:scale-105"
            @click="redirectToStore"
          >
            {{ t('heroSection.buttonText') }}
          </button>
        </div>
        
        <!-- Image - Right side (Desktop and Tablet) -->
        <div class="hidden md:block w-1/2" :class="{ 'md:order-2': isRTL }">
          <img
            src="/assets/herofinal.png"
            :alt="t('heroSection.imageAlt')"
            class="rounded-lg w-full h-auto object-cover max-h-[800px]"
          />
        </div>
        
        <!-- Image - Mobile only -->
        <div class="block md:hidden w-full mt-4">
          <img
            src="/assets/herofinal.png"
            :alt="t('heroSection.imageAlt')"
            class="rounded-lg w-full h-auto object-cover max-h-[400px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// Handle RTL layout for Arabic
const isRTL = computed(() => locale.value === 'ar');

// Format heading to handle line breaks
const formattedHeading = computed(() => {
  const heading = t('heroSection.heading');
  return heading.replace(/\n/g, '<br />');
});

const heroStyle = {

  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#8A834E',
  minHeight: '500px',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
};

// App store redirection function
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
</script>

<style scoped>
/* Handle RTL specific styling */
[dir="rtl"] .pl-2,
[dir="rtl"] .pl-4,
[dir="rtl"] .pl-8 {
  padding-left: 0;
}

[dir="rtl"] .pl-2 {
  padding-right: 0.5rem;
}

[dir="rtl"] .pl-4 {
  padding-right: 1rem;
}

[dir="rtl"] .pl-8 {
  padding-right: 2rem;
}

[dir="rtl"] .-ml-1 {
  margin-left: 0;
  margin-right: -0.25rem;
}

[dir="rtl"] .-ml-2 {
  margin-left: 0;
  margin-right: -0.5rem;
}

/* Responsive text size */
@media (max-width: 375px) {
  h1 {
    font-size: 1.5rem; /* Smaller text on very small screens */
  }
}

/* Add smooth transitions for resizing */
button, h1, div {
  transition: all 0.3s ease;
}
</style>
