<template>
  <div class="mb-10">
    <h4
      v-if="options && options.heading"
      class="font-medium leading-none pl-3 text-xl text-footer-nav mb-2"
    >
      {{ options.heading }}
    </h4>
    <div class="rounded-[12px] border border-solid border-border bg-white px-4 py-3">
      <h5
        v-if="options && options.title"
        class="font-medium text-sm text-footer-nav mb-1"
      >
        {{ options.title }}
      </h5>
      <slot />
    </div>
  </div>
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
