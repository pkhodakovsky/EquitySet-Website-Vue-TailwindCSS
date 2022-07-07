<template>
  <div class="mt-[3px]">
    <NavBar @changeNavBarItem="changeNavBarItem" :nav-items="navItems" />

    <components :is="navItems.active" />
  </div>
</template>

<script>
  import NavBar from "@/components/pages/company/tabs/stock-analysis/NavBar";
  import Summary from "@/components/pages/company/tabs/stock-analysis/summary/Wrapper";
  import Operations from "@/components/pages/company/tabs/stock-analysis/operations/Wrapper";
  import activeTab from "@/mixins/activeTab";

  export default {
    components: {
      NavBar,
      'summary-section': Summary,
      'operations': Operations,
    },
    mixins: [ activeTab ],
    data: () => ({
      navBarActive: 'summary-section',
      navItems: {
        active: 'summary-section',
        items: [
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
      }
    }),
    methods: {
      changeNavBarItem(id) {
        this.navItems.items = this.navItems.items.map(item => item.id === id
          ? { ...item, active: true } : { ...item, active: false })
        this.navItems.active = id
      }
    },
    mounted() {
      this.getActiveTab(this.navItems.items, this.navItems.active, 'stock')
      this.navItems.items = this.initialArrayMixin
      this.navItems.active = this.activeTabNameMixin
      this.navItems.items[this.indexOfItemMixin].active = true
    }
  }
</script>
