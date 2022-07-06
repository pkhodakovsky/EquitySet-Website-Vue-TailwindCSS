<template>
  <div class="border border-athens-gray rounded-[32px] p-0.5 flex items-center">
    <div
      v-for="item in items"
      :key="item.id"
      class="py-1 px-2 rounded-[49px] transition-all duration-500 flex items-center cursor-pointer"
      :class="item.active ? 'text-white bg-primary' : 'text-grey'"
      @click="changeTab(item.id)"
    >
      <span class="text-[10px] lg:text-xs leading-4 font-medium">{{ item.title }}</span>

      <span
        v-if="item.children && item.children.length"
        class="ml-1.5"
      >
        <img :src="require('@/assets/img/search/arrow-down.svg')" alt="arrow down" />
      </span>
    </div>
  </div>
</template>

<script>
  import { TIME_PERIOD } from "@/constants/constants";

  export default {
    data: () => ({
      times: TIME_PERIOD,
      items: []
    }),
    methods: {
      changeTab(id) {
        this.items = this.items.map(item => item.id === id ? { ...item, active: true } : { ...item, active: false })
        this.$emit('changePeriod', this.items.find(item => item.id === id)?.data)
      }
    },
    mounted() {
      this.items = this.times
    }
  }
</script>
