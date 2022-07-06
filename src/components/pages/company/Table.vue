<template>
  <div class="py-3 px-2 max-w-full overflow-auto">
    <div class="flex">
      <div
        v-for="(head, i) in data.header"
        :key="i"
        class="py-3 px-6 bg-icon-bg text-sm leading-4 text-grey font-medium uppercase tracking-[0.05em]"
        :class="{
          'w-[344.5px]': i === 0 || i === 1,
          'w-[244px]': i === 2,
          'w-[172px]': i === 3
        }"
      >
        {{ head.title }}
      </div>
    </div>

    <div
      v-for="item in data.items"
      :key="item.id"
      class="flex"
    >
      <div
        v-for="(val, i) in data.header"
        :key="i"
        class="py-4 px-6 text-sm leading-4 border-b border-solid border-grey-bg-footer"
        :class="{
          'font-medium text-footer-nav': !i,
          'text-grey': i,
          'w-[344.5px]': i === 0 || i === 1,
          'w-[244px]': i === 2,
          'w-[172px]': i === 3
        }"
      >
        {{ item[val.title.toLowerCase()] }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
