<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <div class="lg:flex mt-9">
        <Card
            :options="cards[0]"
            class="w-full mr-8 lg:mb-0 mb-4"
        >
          <div class="pl-2 pr-1.5 pt-3 md:flex items-center">
            <div class="md:w-7/12 flex">
              <div class="pt-2 w-30">
                <p
                  v-for="(chartItem, index) in cards[0].chartData"
                  :key="chartItem.labelText"
                  class="font-bold mt-7 mr-2 text-end first-of-type:text-left first-of-type:mr-1 first-of-type:mt-0 text-sm leading-[14px]"
                  :class="index !== 0 ? 'm-0' : ''"
                >
                  {{ chartItem.labelText }}
                  <img class="pl-5 min-w-[70px]" v-if="index === 0" :src="require('@/assets/img/pages/company/first-bar-element.svg')" alt="first"/>
                </p>
              </div>
              <div class="w-full relative">
                <BarHorizontalChart
                  :data-chart="cards[0].chartData"
                  :show-y-labels="false"
                  show-bar-labels
                  is-gradient
                  :mark-line-options="markLineOptions"
                  :bar-width="25"
                  class="h-[170px]"
                  :data-y-axis="['Company', 'Sector', 'Market']"
                />
                <div class="h-2 absolute bottom-2 w-full bg-gradient-to-r from-green to-red" />
              </div>
            </div>
            <div class="md:w-5/12 h-[113px] flex flex-col justify-between md:pl-[82px]">
              <div class="flex items-center">
                <div class="flex items-center justify-center h-[26px] w-[26px] rounded-[4px] bg-icon-bg mr-[5px]">
                  <img class="h-2" :src="require(`@/assets/img/pages/company/arrow-up.svg`)" alt="Arrow up" />
                </div>
                <div>
                  <p
                    class="font-bold text-green"
                  >12%</p>
                  <p class="text-xs leading-3 text-secondary-text">1 year change (365 days)</p>
                </div>
              </div>
              <LineChart
                :line-color="'#6A38EB'"
                :line-data="[100, 200, 50, 600, 400, 300, 500, 450, 500, 700, 750, 600, 800]"
                :show-y-axis="false"
                class="h-[53px]"
              />
            </div>
          </div>
          <div class="px-2 py-3">
            <ListStats :items="cards[1].itemsStats" />
          </div>
        </Card>

        <Card
          :options="cards[1]"
          class="w-full"
        >
          <div class="pl-2 pr-1.5 pt-3">
            <div class="flex items-center">
              <div class="flex items-end text-footer-nav font-bold">
                <span class="mb-[3px] text-lg leading-none">$</span>
                <span class="text-2xl leading-7">212M</span>
              </div>

              <div class="flex items-end px-2 py-0.5 rounded-[2px] text-white bg-red ml-1.5">
                <span class="font-semibold leading-none">+29B</span>
                <span class="text-xs leading-none font-medium">$ / Last Fical year</span>
              </div>
            </div>

            <div class="pl-[67px]">
              <StoryLineChart />
            </div>
          </div>
          <div class="px-2 py-3">
            <ListStats :items="cards[1].itemsStats" />
          </div>
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
import StoryLineChart from "@/components/universal/Charts/StoryLineChart";
import BarHorizontalChart from "@/components/universal/Charts/BarHorizontalChart";
import LineChart from "@/components/universal/Charts/LineChart";

export default {
  components: {
    BarHorizontalChart,
    StoryLineChart,
    SeeMoreIdeas,
    ListStats,
    Card,
    SectionWrapper,
    LineChart
  },
  data: () => ({
    sectionOptions: {
      heading: 'Structure',
      description: 'How the company is managing debt and capital structure ',
      darkBg: true,
    },
    seeMore: [
      { title: 'See more in Operations', url: '' },
      { title: 'Learn more', url: '' },
    ],
    cards: [
      {
        id: '1',
        title: 'Debt to Equity',
        description: 'Market Valuations and how they have trended over time',
        listCheck: true,
        line: true,
        chartData: [
          {
            labelText: '16.8x',
            value: 18203,
            itemStyle: {
              color: '#8C94AB'
            },
            label: {
              color: '#5B6270'
            }
          },
          {
            labelText: '18.6x',
            value: 12203,
            itemStyle: {
              color: '#8C94AB'
            },
            label: {
              color: '#5B6270'
            }
          },
          {
            labelText: '14.8x',
            value: 19203,
            itemStyle: {
              color: '#6A38EB'
            },
            label: {
              color: '#5F31E8'
            }
          }
        ],
        itemsStats: [
          {
            id: '1',
            positive: true,
            title: [{ data: 'AAPL has a 25% upwards', standard: true }]
          }
        ]
      },
      {
        id: '2',
        title: 'Module Title',
        description: 'How Much the company has been borrowing',
        listCheck: true,
        line: true,
        itemsStats: [
          {
            id: '1',
            positive: true,
            title: [{ data: 'AAPL has a 25% upwards', standard: true }]
          }
        ]
      },
    ],
    markLineOptions: {
      symbol: ['none'],
      data: [
        {
          xAxis: 2000,

          label: {
            show: true,
            color: '#5B6270',
            position: 'end',
            formatter: '1',
            fontSize: 10
          }
        },
        {
          xAxis: 28000,
          label: {
            show: true,
            color: '#5B6270',
            position: 'end',
            formatter: '6',
            fontSize: 10
          }
        }
      ],
    }
  })
}
</script>
