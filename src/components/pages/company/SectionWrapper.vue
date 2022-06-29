<template>
  <section
    class="lg:px-5 pt-4 pb-6 rounded-[12px]"
    :class="{
      'bg-icon-bg px-2': options.darkBg,
    }"
  >
    <h2 v-if="options.heading" class="font-bold text-2xl leading-7 text-footer-nav tracking-[-0.0045em]">
      {{ options.heading }}
    </h2>
    <p
      v-if="options.description"
      class="text-sm leading-4 text-secondary-text"
    >
      {{ options.description }}
    </p>

    <slot />
  </section>
</template>

<script>
  export default {
    props: {
      options: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
