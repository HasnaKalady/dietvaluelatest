<!-- Internationalized WelcomeSection.vue -->
<template>
  <section class="pt-2 md:pt-5 lg:pt-6 mb-4 mr-2 ml-2 sm:-mt-4 pt-1 md:-mt-6">
    <div class="w-full">
      <div
        class="rounded-xl p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        :style="heroStyle"
      >
        <!-- Top image - moves to left in Arabic mode -->
        <img
          src="/assets/food.png"
          :alt="t('welcomeSection.imageAlt.topRight')"
          class="hidden sm:block absolute top-0 z-10 w-52 sm:w-64 md:w-72 lg:w-96 xl:w-[420px] object-contain"
          :class="locale === 'ar' ? 'left-0 rounded-tl-lg' : 'right-0 rounded-tr-lg'"
        />
        
        <!-- Main content -->
        <div class="text-white z-20 w-full md:w-3/4 lg:w-2/3 xl:w-3/5 px-2 sm:px-4 md:px-6 lg:px-3">
          <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight lg: -ml-2">
            {{ t('welcomeSection.heading') }}
          </h2>
          
          <!-- Paragraph with improved responsive text handling -->
          <div class="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
            <p class="mb-2" v-html="formattedDescription"></p>
          </div>
          
          <!-- CTA Button with responsive styling -->
          <button
            class="mt-6 sm:mt-8 md:mt-10 bg-[#5F5100] text-white text-sm sm:text-base md:text-lg font-bold
                    px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl
                    hover:bg-[#4A3E00] transition-colors duration-300 transform hover:scale-105"
            @click="redirectToStore"
          >
            {{ t('welcomeSection.buttonText') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// Format description to handle line breaks
const formattedDescription = computed(() => {
  const description = t('welcomeSection.description');
  return description.replace(/\n/g, '<br>');
});

const heroStyle = {
 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#BAAE68',
  minHeight: '350px',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
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
</script>

<style scoped>
/* These styles are no longer needed since we're using dynamic binding */
/* [dir="rtl"] .right-0 {
  right: auto;
  left: 0;
}

[dir="rtl"] .rounded-tr-lg {
  border-top-right-radius: 0;
  border-top-left-radius: 0.5rem;
} */

/* Improve text readability */
p {
  white-space: normal;
  max-width: 100%;
}

/* Smooth transitions for all interactive elements */
button, h2, p, img {
  transition: all 0.3s ease;
}

/* Handle very small screens better */
@media (max-width: 375px) {
  h2 {
    font-size: 1.5rem;
  }
  
  p {
    font-size: 0.875rem;
  }
  
  button {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
}

/* Fix any potential overflow issues */
.container {
  overflow-x: hidden;
}
</style>