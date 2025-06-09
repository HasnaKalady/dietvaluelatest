<template>
  <section class="-mt-2 mr-2 ml-2">
    <div class="container-fluid w-full px-0 pb-4 sm:pb-6 md:pb-8 rounded-none">
      
     <!-- Heading -->
     <h2 class="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-[#8A834E] pt-6 sm:pt-8 md:pt-10">
       <span class="block sm:inline">{{ t('pricingSection.headingLine1') }}</span>
       <span class="block">{{ t('pricingSection.headingLine2') }}</span>
     </h2>
     
     <!-- Subheading -->
     <p class="text-center text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-5 max-w-xl mx-auto px-4" style="color: #8A834E">
       {{ t('pricingSection.subheading') }}
     </p>
<!-- Cards -->
<div class="flex flex-col gap-8 mt-8 sm:mt-12 md:mt-16 -mx-1 sm:mx-0 md:px-1 max-w-full mx-auto">
  <div v-for="(plan, index) in plans" :key="index" class="relative">
    
    <!-- Calorie Badge - Top Left Above Card -->
    <div class="absolute -top-[26px] sm:-top-[26px] left-4 sm:left-9 bg-[#fff] text-[#AE9E40] text-xs font-semibold py-1 px-4 sm:px-6 rounded-t-xl border-2 border-b-0 border-[#6B5E0F] shadow-sm z-10">
      {{ plan.calories }}
    </div>
    
   
    <!-- Card Content -->
    <div class="w-full bg-[#6B5E0F] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div class="flex flex-col md:flex-row items-center p-6 sm:p-8 md:p-10 pt-12 sm:pt-12 md:pt-14 pb-8 sm:pb-10 md:pb-12">
        
        <!-- Left Side - Plan Info -->
        <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-12 text-center md:text-left">
          <h3 class="font-bold text-white text-lg md:text-xl mb-2">
            {{ t(`pricingSection.plans[${index}].title`) }}
          </h3>
          <div class="flex items-end justify-center md:justify-start mb-2 gap-1">
            <span class="text-3xl md:text-4xl font-bold text-white">{{ plan.price }}</span>
            <span class="text-3xl md:text-4xl font-bold text-white">KWD</span>
          </div>
          <p class="text-white/90 text-sm whitespace-pre-line">
            {{ t(`pricingSection.plans[${index}].duration`) }}
          </p>
        </div>
        
        <!-- Divider Line -->
        <div class="hidden md:block w-px h-36 bg-white"></div>
        
        <!-- Right Side - Meal Info -->
        <div class="flex-grow w-full">
          <!-- Unified Horizontal Layout for All Screen Sizes -->
          <div class="flex justify-around items-center gap-2 sm:gap-4 md:gap-8">
            
            <!-- 3 Meals -->
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-2 md:mb-3 flex items-center justify-center">
                <img src="/assets/meal-icon.svg" alt="Meals" class="w-full h-full object-contain" />
              </div>
              <p class="text-white font-medium text-xl sm:text-2xl md:text-3xl">{{ t('pricingSection.planmeals') }}</p>
              <p class="text-white/80 text-xs text-center mt-1 hidden sm:block">{{ t('pricingSection.mealBreakdown') }}</p>
            </div>
            
            <!-- Divider after Meals -->
            <div class="w-px h-16 sm:h-20 md:h-24 bg-[#5B4F03]"></div>
            
            <!-- 1 Snack -->
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-2 md:mb-3 flex items-center justify-center">
                <img src="/assets/snack-icon.svg" alt="Snack" class="w-full h-full object-contain" />
              </div>
              <p class="text-white font-medium text-xl sm:text-2xl md:text-3xl">{{ t('pricingSection.plansnacks') }}</p>
            </div>
            
            <!-- Divider after Snack -->
            <div class="w-px h-16 sm:h-20 md:h-24 bg-[#5B4F03]"></div>
            
            <!-- 1 Salad -->
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-2 md:mb-3 flex items-center justify-center">
                <img src="/assets/salad-icon.svg" alt="Salad" class="w-full h-full object-contain" />
              </div>
              <p class="text-white font-medium text-xl sm:text-2xl md:text-3xl">{{ t('pricingSection.plansnacks') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
     
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// Plan data with specific details matching the screenshot
const plans = [
  {
    title: 'Diet Plan 20 days',
    price: '69',
    duration: 'One month with weekend OFF',
    meals: 3,
    snacks: 1,
    salads: 1,
    calories: '1000-1200 Cal',
    popular: true
  },
  {
    title: 'Diet Plan 26 days',
    price: '89',
    duration: 'One month with weekend OFF',
    meals: 3,
    snacks: 1,
    salads: 1,
    calories: '1000-1200 Cal',
    popular: false
  }
];

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
/* Smooth transitions for responsive elements */
*, *::before, *::after {
  transition: all 0.3s ease;
}

/* RTL adjustments - Fixed version */
[dir="rtl"] .section {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

/* Only adjust desktop margins for RTL, not mobile */
[dir="rtl"] .md\:mr-12 {
  margin-right: 0;
  margin-left: 3rem;
}

/* Text alignment adjustments */
[dir="rtl"] .md\:text-left {
  text-align: right;
}

[dir="rtl"] .md\:justify-start {
  justify-content: flex-end;
}

/* Badge positioning for RTL */
[dir="rtl"] .left-4 {
  left: auto;
  right: 1rem;
}

[dir="rtl"] .sm\:left-9 {
  left: auto;
  right: 2.25rem;
}

/* Maintain card spacing in RTL - don't override mobile margins */
[dir="rtl"] .-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

[dir="rtl"] .sm\:mx-0 {
  margin-left: 0;
  margin-right: 0;
}

[dir="rtl"] .md\:px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

/* Additional responsive adjustments for very small screens */
@media (max-width: 375px) {
  h2 {
    font-size: 1.25rem;
  }
  
  p {
    font-size: 0.75rem;
  }
  
  .flex.justify-around {
    gap: 0.5rem;
  }
  
  /* Hide dividers on very small screens */
  .w-px.h-16 {
    display: none;
  }
  
  /* Adjust badge positioning for small screens */
  .absolute.-top-7 {
    top: -1rem;
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
  }

  /* Ensure proper spacing on mobile for both LTR and RTL */
  .-mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  
  [dir="rtl"] .-mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
}

/* Ensure content doesn't overflow on different screens */
.container-fluid {
  overflow-x: hidden;
}

/* Mobile stacking adjustments */
@media (max-width: 768px) {
  .flex.flex-col.md\:flex-row {
    text-align: center;
  }
  
  .flex.justify-around {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  
  /* Adjust dividers for mobile */
  .w-px.h-16 {
    width: 1px;
    height: 2rem;
  }

  /* Ensure cards don't touch screen edges on mobile for both LTR and RTL */
  .section {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  
  [dir="rtl"] .section {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

/* Ensure badges don't overlap on small screens */
@media (max-width: 480px) {
  .absolute.-top-7.left-4 {
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
  }
  
  [dir="rtl"] .absolute.-top-7 {
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    right: 1rem;
    left: auto;
  }
}
</style>