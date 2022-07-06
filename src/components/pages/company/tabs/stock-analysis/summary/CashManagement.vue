<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <div class="h-[130px]"></div>
    </SectionWrapper>
    <SeeMoreIdeas :options="seeMore" />
  </div>
</template>

<script>
import SectionWrapper from "@/components/pages/company/SectionWrapper";
import Card from "@/components/universal/Card";
import SeeMoreIdeas from "@/components/universal/SeeMoreIdeas";
import ColumnsLineChart from "@/components/universal/Charts/ColumnsLineChart";
import GaugeTrippleChart from "@/components/universal/Charts/GaugeThrippleChart";

export default {
  components: {
    ColumnsLineChart,
    SeeMoreIdeas,
    Card,
    SectionWrapper,
    GaugeTrippleChart,
  },
  data: () => ({
    sectionOptions: {
      heading: 'Cash management',
      description: 'How the company has returned money to shareholders via dividends',
      darkBg: true,
    },
    seeMore: [
      { title: 'See more in Operations', url: '' },
      { title: 'Learn more', url: '' },
    ],
  })
}
</script>
