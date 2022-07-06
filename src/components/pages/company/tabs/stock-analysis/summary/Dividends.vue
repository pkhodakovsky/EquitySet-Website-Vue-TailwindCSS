<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <div class="lg:flex mt-9">
        <Card class="lg:w-5/12 lg:mb-0 mb-4 lg:mr-8" :options="cardItems.cardGrowth">
          <div class="flex pr-7">
            <BarHorizontalChart
              :data-chart="cardItems.cardGrowth.chartData"
              :data-y-axis="['2021', '2021', '2021', '2021', '2021']"
            />
            <div class="pt-[52px]">
              <p v-for="item in cardItems.cardGrowth.itemsPriceChanged" class="first-of-type:pt-0 pt-[15px] text-xs whitespace-nowrap leading-3 font-medium text-footer-nav">
                $<span class="text-base leading-4">{{ item.price }}</span>
                <span class="text-grey">({{ item.positive ? '+' : '-' }} {{ item.percentage }})</span>
              </p>
            </div>
          </div>
          <ListStats :items="cardItems.cardGrowth.itemsStats" />
        </Card>
        <Card class="lg:w-[368px] lg:mb-0 mb-4 lg:mr-8" :options="cardItems.cardConsistency">
          <div class="flex items-start pt-4 pb-3">
            <div class="flex items-center pl-2">
              <p class="font-bold text-[22px] text-red">65<span class="text-lg leading-[18px]">%</span></p>
              <img class="h-4 pl-[5px]" :src="require('@/assets/img/pages/profile/info-icon.svg')" alt="">
            </div>
            <DoughnutChart color="#FF5D55" class="-mt-7" chart-data="65"/>
          </div>
          <ListStats :items="cardItems.cardConsistency.itemsStats" />
        </Card>
        <Card class="lg:w-4/12 lg:mb-0 mb-4" :options="cardItems.cardModule">
          <div class="flex flex-col flex-col-reverse sm:flex-row sm:mb-0 mb-6 items-center pb-4">
            <div class="md:w-5/12 w-full">
              <div v-for="item in cardItems.cardModule.gaugeSection" class="w-9/12 mx-auto border-t-[1px] border-mischka flex items-center justify-between pt-2 mt-2">
                <div class="flex items-center">
                  <span :style="{ backgroundColor: item.color }" class=" w-[14px] h-[14px] inline-block rounded-full" />
                  <p :style="{ color: item.color }" class="pl-[3px] font-medium text-[10px] leading-3">{{ item.title }}</p>
                </div>
                <p class="font-bold text-sm leading-[14px] mb-0">{{ item.price }}</p>
              </div>
            </div>
            <GaugeTrippleChart
              class="md:w-7/12 w-full"
              :gauge-data="{ first: 20, second: 40, third: 60 }"
              :color-section="{ first: '#FF342A', second: '#DBDDE4', third: '#8C94AB' }"
            />
          </div>
          <ListStats :items="cardItems.cardModule.itemsStats" />
        </Card>
      </div>
    </SectionWrapper>
    <SeeMoreIdeas :options="seeMore" />
  </div>
</template>

<script>
import SectionWrapper from "@/components/pages/company/SectionWrapper";
import Card from "@/components/universal/Card";
import ListStats from "@/components/universal/ListStats";
import SeeMoreIdeas from "@/components/universal/SeeMoreIdeas";
import BarHorizontalChart from "@/components/universal/Charts/BarHorizontalChart";
import DoughnutChart from "@/components/universal/Charts/DoughnutChart";
import GaugeTrippleChart from "@/components/universal/Charts/GaugeThrippleChart";

export default {
  components: {
    GaugeTrippleChart,
    DoughnutChart,
    BarHorizontalChart,
    SeeMoreIdeas,
    ListStats,
    Card,
    SectionWrapper
  },
  data: () => ({
    sectionOptions: {
      heading: 'Dividends',
      description: 'How the company has returned money to shareholders via dividends',
      darkBg: true,
    },
    seeMore: [
      { title: 'See more in Operations', url: '' },
      { title: 'Learn more', url: '' },
    ],
    cardItems: {
      cardGrowth: {
        title: 'Dividend Growth',
        listCheck: true,
        line: true,
        id: '1',
        chartData: [18203, 9000, 12340, 15000, 14324],
        itemsStats: [
          {
            id: '1',
            positive: false,
            title: [
              { data: 'TESL has averaged a ', standard: true },
              { data: '-23% growth rate', positive: false },
              { data: ' over the last 5 years', standard: true },
            ]
          }
        ],
        itemsPriceChanged: [
          {
            positive: true,
            price: '0.19',
            percentage: '0.78'
          },
          {
            positive: true,
            price: '0.19',
            percentage: '0.78'
          },
          {
            positive: true,
            price: '0.19',
            percentage: '0.78'
          },
          {
            positive: true,
            price: '0.19',
            percentage: '0.78'
          },
          {
            positive: true,
            price: '0.19',
            percentage: '0.78'
          }
        ]
      },
      cardConsistency: {
        title: 'Dividend Consistency',
        listCheck: true,
        line: true,
        itemsStats: [
          {
            id: '1',
            positive: false,
            title: [
              { data: 'TESL missed ', standard: true },
              { data: '7 dividends over the last 5 years', positive: false },
            ]
          }
        ]
      },
      cardModule:  {
        title: 'Module Title',
        listCheck: true,
        line: true,
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
        ],
        itemsStats: [
          {
            id: '1',
            positive: true,
            title: [
              { data: 'AAPL has a relatively high payout ratio', standard: true }
            ]
          }
        ]
      }
    },

  })
}
</script>
