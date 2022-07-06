<template>
  <div class="max-w-[1492px] mx-auto">
    <Wrapper />
    <Tabs :options="tabOptions" />

    <components :is="tabOptions.active" />
  </div>
</template>

<script>
  import Wrapper from "@/components/pages/company/head/Wrapper";
  import Tabs from "@/components/universal/Tabs";
  import Financials from "@/components/pages/company/tabs/financials/Wrapper";
  import Overview from "@/components/pages/company/tabs/overview/Wrapper";
  import StockAnalysis from "@/components/pages/company/tabs/stock-analysis/Wrapper";

  export default {
    components: {
      Tabs,
      Wrapper,
      'overview': Overview,
      'stock-analysis': StockAnalysis,
      'financials': Financials
    },
    data: () => ({
      tabOptions: {
        active: 'overview',
        items: [
          { id: 'overview', title: 'Overview', active: true },
          { id: 'stock-analysis', title: 'Stock Analysis' },
          { id: 'financials', title: 'Financials' },
        ]
      }
    }),
  }
</script>
