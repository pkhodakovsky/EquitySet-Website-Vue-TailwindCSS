<template>
  <div class="pt-2">
    <div class="h-0.5 bg-grey opacity-[.15]"></div>
    <div class="px-3 py-1 flex items-center justify-between">
      <router-link
        v-for="(item, i) in options"
        :key="i"
        :to="item.url"
        class="text-xs leading-4 font-medium text-secondary-text cursor-pointer underline"
      >
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: { type: Array, default: () => ([{ title: 'See more Investment Ideas', url: '' }]) }
    }
  }
</script>
