<template>
  <SectionWrapper :options="sectionOptions">
    <div class="lg:flex mt-9">
      <OperationsContent
        class="lg:w-5/12 lg:mr-8 mb-4 lg:mb-0"
        v-for="item in cardData"
        :card-item="item"
        :card-options="{ title: item.titleCard, line: true, listCheck: true }"
      />
      <Card class="lg:w-4/12" :options="{
          title: 'Module Title',
          line: true,
          listCheck: true
        }">
        <div class="pt-[18px] pl-2">
          <div class="flex items-center">
            <p class="font-bold text-lg leading-[18px] pr-1.5">$<span class="text-[22px]">212M</span></p>
            <p class="font-medium text-red font-semibold">-25% <span class="text-xs leading-3">/Last Fical year</span></p>
          </div>
          <div class="flex justify-center">
            <GaugeTrippleChart
              :gauge-data="{ first: 20, second: 40, third: 60 }"
              :color-section="{ first: '#FF342A', second: '#DBDDE4', third: '#8C94AB' }"
            />
          </div>
          <div v-for="item in gaugeSection" class="w-6/12 last-of-type:mb-[50px] mx-auto border-t-[1px] border-mischka flex items-center justify-between pt-2 mt-2">
            <div class="flex items-center">
              <span :style="{ backgroundColor: item.color }" class="w-[14px] h-[14px] inline-block rounded-full" />
              <p :style="{ color: item.color }" class="pl-[3px] font-medium text-[10px] leading-3">{{ item.title }}</p>
            </div>
            <p class="font-bold text-sm leading-[14px] mb-0">{{ item.price }}</p>
          </div>
        </div>
      </Card>
    </div>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from "@/components/pages/company/SectionWrapper";
import OperationsContent from "@/components/universal/OperationsContent/OperationsContent";
import Card from "@/components/universal/Card";
import GaugeTrippleChart from "@/components/universal/Charts/GaugeThrippleChart";
export default {
  name: "Operations",
  components: {
    GaugeTrippleChart,
    Card,
    SectionWrapper,
    OperationsContent
  },
  data: () => ({
    sectionOptions: {
      heading: 'Operations',
      description: 'Market Valuations and how they have trended over time',
      darkBg: true
    },
    cardData: [
      {
        titleCard: 'Sales',
        typeText: 'Increasing',
        increase: true,
        listCheck: true,
        info: false,
        chartTitle: 'LAST 6 QUARTERS',
        stats: [
          {
            percentage: '60%',
            description: 'since 2017'
          },
          {
            percentage: '13%',
            description: 'year over year'
          },
          {
            percentage: '5%',
            description: 'quarter-over-quarter'
          }
        ]
      },
      {
        titleCard: 'Profits & EPS',
        typeText: 'Increasing',
        increase: true,
        listCheck: true,
        info: true,
        chartTitle: 'EPS IN LAST 6 QUARTERS',
        stats: [
          {
            percentage: '96%',
            description: 'since 2017'
          },
          {
            percentage: '19%',
            description: 'year over year'
          },
          {
            percentage: '8%',
            description: 'quarter-over-quarter'
          }
        ]
      }
    ],
    gaugeSection: [
      {
        title: 'Sector',
        color: '#EA580C',
        price: '$120M'
      },
      {
        title: 'Market',
        color: '#2563EB',
        price: '$245M'
      }
    ]
  })
}
</script>
