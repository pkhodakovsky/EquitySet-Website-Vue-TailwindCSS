<template>
  <div class="py-[11px] my-4 flex items-center">
    <div
      v-for="item in items"
      :key="item.id"
      class="rounded-[6px] py-0.5 px-[23px] border font-roboto text-xs leading-[32px] mr-4 cursor-pointer transition-all duration-500"
      :class="item.active ? 'border-black bg-athens-gray' : 'bg-alabaster border-disabled-input-text text-disabled-input-text'"
      @click="changeActiveItem(item.id)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { id: 1, title: 'Performance Evaluation', active: true },
      { id: 2, title: 'Premium  Analysis', active: false },
      { id: 3, title: 'Sector Analysis ', active: false },
      { id: 4, title: 'Stock Performers', active: false },
      { id: 5, title: 'Investment Ideas', active: false },
      { id: 6, title: 'Upcoming Events', active: false },
      { id: 7, title: 'Components & ETF', active: false },
    ]
  }),
  methods: {
    changeActiveItem(id) {
      this.items = this.items.map(item => item.id === id ? { ...item, active: true } : { ...item, active: false })
    }
  }
}
</script>
