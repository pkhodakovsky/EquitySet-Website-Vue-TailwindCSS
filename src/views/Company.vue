<template>
  <div class="max-w-[1492px] mx-auto">
    <Wrapper />
    <Tabs @change-tab="changeTab" :options="tabOptions" />

    <components :is="tabOptions.active" />
  </div>
</template>

<script>
  import Wrapper from "@/components/pages/company/head/Wrapper";
  import Tabs from "@/components/universal/Tabs";
  import Financials from "@/components/pages/company/tabs/financials/Wrapper";
  import Overview from "@/components/pages/company/tabs/overview/Wrapper";
  import StockAnalysis from "@/components/pages/company/tabs/stock-analysis/Wrapper";
  import activeTab from "@/mixins/activeTab";

  export default {
    components: {
      Tabs,
      Wrapper,
      'overview': Overview,
      'stock-analysis': StockAnalysis,
      'financials': Financials
    },
    mixins: [ activeTab ],
    data: () => ({
      tabOptions: {
        active: 'overview',
        items: [
          { id: 'overview', title: 'Overview', query: 'overview', active: true },
          { id: 'stock-analysis', title: 'Stock Analysis', query: 'stock-analysis' },
          { id: 'financials', title: 'Financials', query: 'financials'},
        ]
      }
    }),
    methods: {
      changeTab(id) {
        this.tabOptions.items = this.tabOptions.items.map(item => id === item.id ? { ...item, active: true } : { ...item, active: false })
        this.tabOptions.active = id
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.getActiveTab(this.tabOptions.items, this.tabOptions.active, 'tag')
        this.tabOptions.items = this.initialArrayMixin
        this.tabOptions.active = this.activeTabNameMixin
        this.tabOptions.items[this.indexOfItemMixin].active = true
      })
    }
  }
</script>
