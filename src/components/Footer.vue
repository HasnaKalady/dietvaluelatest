<!-- Internationalized Footer.vue -->
<template>
  <footer class="bg-[#8A834E] w-full min-h-[300px] -mt-4 sm:-mt-2 md:-mt-12 lg:-mt-16 px-4 sm:px-6 py-8 sm:py-10 md:py-16">
    <div class="max-w-screen-xl mx-auto text-center">
      <!-- Logo -->
      <div class="mb-6 sm:mb-8">
        <div class="text-[32px] sm:text-[40px] text-white">
  <span class="font-semibold">Diet</span>
  <span class="font-extrabold">value</span>
</div>
      </div>
      
      <!-- Social Media -->
      <p class="text-base sm:text-lg text-white mb-4">{{ t('footer.followUs') }}</p>
      <div class="flex justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">
        <a
          href="https://www.instagram.com/dietvalue.kw/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#000] text-lg sm:text-xl"
          :aria-label="t('footer.socialLinks.instagram')"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        
        <a
          href="https://wa.me/22090963"
          target="_blank"
          rel="noopener noreferrer"
          class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#000] text-lg sm:text-xl"
          :aria-label="t('footer.socialLinks.whatsapp')"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
        
        <a 
  href="https://www.facebook.com/profile.php?id=61568712969262"
  target="_blank"
  rel="noopener noreferrer"
  class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#000]"
  :aria-label="t('footer.socialLinks.facebook')"
>
  <svg 
    class="w-4 h-4 sm:w-5 sm:h-5" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
  </svg>
</a>
      </div>
      
      <!-- Footer Bottom -->
      <div class="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200/30">
        <p class="text-xs sm:text-sm text-white">
          {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useI18n } from 'vue-i18n';

// Add the icons to the library
library.add(faInstagram, faWhatsapp, faFacebookF);

// Get i18n translator function
const { t } = useI18n();
</script>

<style scoped>
/* RTL Support */
[dir="rtl"] .gap-3,
[dir="rtl"] .gap-4 {
  direction: rtl;
}

/* Small screen optimizations */
@media (max-width: 350px) {
  .text-\[32px\] {
    font-size: 28px;
  }
}

/* Ensure footer sticks to bottom if content is short */
footer {
  margin-left: 0;
  margin-right: 0;
  padding-left: env(safe-area-inset-left, 1rem);
  padding-right: env(safe-area-inset-right, 1rem);
}

/* Adjust RTL spacing */
[dir="rtl"] .mx-1,
[dir="rtl"] .mx-2 {
  direction: rtl;
}
</style>