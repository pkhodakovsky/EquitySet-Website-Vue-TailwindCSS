<template>
  <div>
    <PriceChart />
    <BreakingNews class="mb-10" />
    <CorporateInformation />
    <ExploringIdeas class="mt-5" />
  </div>
</template>

<script>
  import PriceChart from "@/components/pages/company/tabs/overview/PriceChart";
  import BreakingNews from "@/components/pages/company/tabs/overview/BreakingNews";
  import CorporateInformation from "@/components/pages/company/tabs/overview/CorporateInformation";
  import ExploringIdeas from "@/components/pages/company/tabs/overview/ExploringIdeas";

  export default {
    components: {
      ExploringIdeas,
      CorporateInformation,
      BreakingNews,
      PriceChart
    }
  }
</script>
