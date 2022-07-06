<template>
  <SectionWrapper :options="sectionOptions">
    <div class="pt-6 pb-[73px]">
      <div v-for="item in glanceData" class="pb-2 flex text-sm">
        <img class="pr-1" :src="require(`@/assets/img/pages/company/${item.icon}.svg`)" alt="icon"/>
        <p class="pr-3.5">Apple dividends affected
          <span
            :class="item.forward === 'upwards' ? 'text-green' : 'text-red'"
          >{{ item.percentage }} {{ item.forward }}</span>
          the Fair Value
          <span
            :class="item.forward === 'upwards' ? 'text-green' : 'text-red'"
          >{{ item.percentage }} {{ item.forward }}</span>
        </p>
        <ButtonLink text-content="Explore"/>
      </div>
    </div>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from "@/components/pages/company/SectionWrapper";
import ButtonLink from "@/components/universal/ButtonLink";

export default {
  components: { ButtonLink, SectionWrapper },
  data: () => ({
    sectionOptions: {
      heading: 'At a Glance',
      description: 'Buy or Sell? Bear or Bullish on activities? What the competition does?'
    },
    glanceData: [
      {
        percentage: '25%',
        icon: 'plus',
        forward: 'upwards',
        link: ''
      },
      {
        percentage: '25%',
        icon: 'minus',
        forward: 'downwards',
        link: ''
      },
      {
        percentage: '25%',
        icon: 'plus',
        forward: 'upwards',
        link: ''
      },
      {
        percentage: '25%',
        icon: 'minus',
        forward: 'downwards',
        link: ''
      }
    ]
  })
}
</script>
