<template>
  <div class="flex flex-wrap flex-row items-center border-b border-solid border-border">
    <div
        v-for="item in options.items"
        :key="item.id"
        class="pt-6 pb-5 px-1 mr-5 lg:mx-5 cursor-pointer leading-4 flex items-center"
        :class="{
        'text-tabs': !item.active && !premium,
        'text-primary border-b border-primary': item.active && !premium,
        'text-sm font-medium': !premium,
        'font-roboto text-lg': premium,
        'text-disabled-input-text': !item.active && premium,
        'font-bold border-b border-[#000]': item.active && premium
      }"
      @click="changeTab(item.id)"
    >
      {{ item.title }}

      <div
        v-if="item.premium"
        class="px-1 py-0.5 ml-[3px] relative bottom-1 rounded-[2px] rounded-tr-[4px] bg-primary w-fit text-alabaster font-ubuntu font-bold text-[10px] leading-none"
      >
        Premium
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    premium: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    changeTab(id) {
      this.options.items = this.options.items.map(item => id === item.id ? { ...item, active: true } : { ...item, active: false })
      this.options.active = id
    }
  }
}
</script>
