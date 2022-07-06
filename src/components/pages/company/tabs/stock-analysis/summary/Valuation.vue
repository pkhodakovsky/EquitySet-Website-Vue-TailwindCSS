<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <div class="lg:flex mt-9">
        <Card
            v-for="(item, i) in cards"
            :key="item.id"
            :options="item"
            class="w-full lg:mb-0 mb-4"
            :class="{ 'mr-[46px]': i !== cards.length - 1 }"
        >
          <div class="pl-2 pr-1.5 pt-3 md:flex items-center">
            <div class="md:w-7/12 flex">
              <div class="pt-2 w-30">
                <p
                  v-for="(chartItem, index) in item.chartData"
                  :key="chartItem.labelText"
                  class="font-bold mt-7 mr-2 text-end first-of-type:text-left first-of-type:mr-1 first-of-type:mt-0 text-sm leading-[14px]"
                  :class="index !== 0 ? 'm-0' : ''"
                >
                  {{ chartItem.labelText }}
                  <img class="pl-5 min-w-[70px]" v-if="index === 0" :src="require('@/assets/img/pages/company/first-bar-element.svg')" alt="first"/>
                </p>
              </div>
              <BarHorizontalChart
                :data-chart="item.chartData"
                :show-y-labels="false"
                show-bar-labels
                have-average
                :bar-width="25"
                class="h-[170px]"
                :data-y-axis="['Company', 'Sector', 'Market']"
              />
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
            <ListStats :items="item.itemsStats" />
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
  import BarHorizontalChart from "@/components/universal/Charts/BarHorizontalChart";
  import LineChart from "@/components/universal/Charts/LineChart";

  export default {
    components: {
      LineChart,
      BarHorizontalChart,
      SeeMoreIdeas,
      ListStats,
      Card,
      SectionWrapper
    },
    data: () => ({
      sectionOptions: {
        heading: 'Valuation',
        description: 'Market Valuations and how they have trended over time',
        darkBg: true,
      },
      seeMore: [
        { title: 'See more in Operations', url: '' },
        { title: 'Learn more', url: '' },
      ],
      cards: [
        {
          id: '1',
          title: 'Price-to-earnings (P/E)',
          description: '',
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
              title: [
                {
                  data: 'TESL has a P/E lower than the industry and market, but a relatively high ratio',
                  standard: true
                }
              ]
            }
          ]
        },
        {
          id: '2',
          title: 'Price-to-earnings (P/E)',
          description: '',
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
              title: [
                {
                  data: 'TESL has a P/E lower than the industry and market, but a relatively high ratio',
                  standard: true
                }
              ]
            }
          ]
        },
      ]
    })
  }
</script>
