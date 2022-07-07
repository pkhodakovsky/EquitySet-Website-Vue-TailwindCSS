<template>
  <div>
    <Head class="mb-10 lg:mb-[92px]" />

    <div class="max-w-[1312px]">
      <BusinessModel />
      <Sales class="mt-10 lg:mt-[74px]" />
      <Costs class="mt-10 lg:mt-[66px]" />
      <ProfitsEps class="mt-10 lg:mt-[66px]" />
      <Margins class="mt-10 lg:mt-[89px]" />
      <Outlook class="mt-10 lg:mt-[89px]" />
    </div>
  </div>
</template>

<script>
import Head from '@/components/pages/company/tabs/stock-analysis/operations/Head'
import BusinessModel from "@/components/pages/company/tabs/stock-analysis/operations/BusinessModel";
import Sales from "@/components/pages/company/tabs/stock-analysis/operations/Sales";
import Costs from "@/components/pages/company/tabs/stock-analysis/operations/Costs";
import ProfitsEps from "@/components/pages/company/tabs/stock-analysis/operations/ProfitsEps";
import Margins from "@/components/pages/company/tabs/stock-analysis/operations/Margins";
import Outlook from "@/components/pages/company/tabs/stock-analysis/operations/Outlook";

export default {
  components: {
    Outlook,
    Margins,
    ProfitsEps,
    Costs,
    Sales,
    BusinessModel,
    Head
  }
}
</script>
