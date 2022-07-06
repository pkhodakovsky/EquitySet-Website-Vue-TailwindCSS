<template>
  <div class="flex flex-wrap items-center">
    <div
      v-for="item in navItems"
      :key="item.id"
      class="px-2 py-[9px] rounded-[6px] mr-[18px] cursor-pointer transition-all duration-500"
      :class="{ 'bg-grey-bg-footer': item.active }"
      @click="changeActiveItem(item.id)"
    >
      <span class="text-sm leading-5 font-medium" :class="item.active ? 'text-footer-nav' : 'text-grey'">
        {{ item.title }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      navItems: [
        { id: 'summary-section', title: 'Summary', url: '', active: true },
        { id: 'operations', title: 'Operations', url: '', active: false },
        { id: 'sentiment', title: 'Sentiment', url: '', active: false },
        { id: 'valuation', title: 'Valuation', url: '', active: false },
        { id: 'structure', title: 'Structure', url: '', active: false },
        { id: 'technicals', title: 'Technicals', url: '', active: false },
        { id: 'dividends', title: 'Dividends', url: '', active: false },
        { id: 'cash-management', title: 'Cash Management  ', url: '', active: false },
        { id: 'market-dynamics', title: 'Market Dynamics', url: '', active: false },
      ]
    }),
    methods: {
      changeActiveItem(id) {
        this.navItems = this.navItems.map(item => item.id === id
          ? { ...item, active: true } : { ...item, active: false })
        this.$emit('changeNavBarItem', id)
      }
    }
  }
</script>
