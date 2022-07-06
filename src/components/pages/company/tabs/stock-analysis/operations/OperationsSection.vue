<template>
  <section>
    <div class="flex items-end">
      <span class="text-secondary-text text-xl leading-5 mr-0.5">{{ options.count }}.</span>
      <h3 class="text-footer-nav text-xl leading-5 font-bold">{{ options.title }}</h3>
    </div>
    <p class="text-secondary-text text-sm leading-4 mt-1.5 mb-5">{{ options.description }}</p>
    <slot />
    <PremiumAnalysis :items="premiumAnalysis" class="mt-5" />
  </section>
</template>

<script>
import PremiumAnalysis from '@/components/universal/PremiumAnalysis'

export default {
  props: {
    options: { type: Object, default: () => {} },
    premiumAnalysis: { type: Array, default: () => {} }
  },
  components: {
    PremiumAnalysis,
  }
}
</script>
