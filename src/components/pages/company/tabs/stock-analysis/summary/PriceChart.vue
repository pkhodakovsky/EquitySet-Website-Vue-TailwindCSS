<template>
  <SectionWrapper class="pt-6 pb-5 lg:pt-[74px] lg:pb-[53px]" :options="sectionOptions">
    <div class="mt-4 pt-4 lg:pt-[30px] pb-[27px] lg:px-2">
      <PriceChart />
    </div>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from "@/components/pages/company/SectionWrapper";
import PriceChart from "@/components/universal/Charts/PriceChart";

export default {
  components: {
    PriceChart,
    SectionWrapper
  },
  data: () => ({
    sectionOptions: {
      heading: 'Price Chart',
      description: 'What Analysts think about the stock'
    }
  })
}
</script>
