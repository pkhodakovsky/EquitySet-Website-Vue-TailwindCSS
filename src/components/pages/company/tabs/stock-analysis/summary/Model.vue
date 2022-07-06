<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <div class="lg:flex mt-8">
        <Card
          :options="evaluation"
          class="lg:mr-8 lg:mb-0 mb-4 w-full"
        >
          <div class="px-2">
            <div class="h-[312px] w-[325px] mx-auto mt-[62px]">
              <NetworkingChart
                :area-color="evaluation.chartOptions.areaColor"
                :data-value="evaluation.chartOptions.dataValue"
                :line-color="evaluation.chartOptions.lineColor"
              />
            </div>

            <StateBoxes
              :active-boxes="[5]"
              :box-length="8"
              :color="'#1B2230'"
              class="mx-auto w-fit my-9"
            >
              <div class="flex items-center justify-between px-1 mb-0.5 pr-1.5">
                <img :src="require('@/assets/img/pages/company/bear-black.svg')" alt="Bear icon" />
                <img :src="require('@/assets/img/pages/company/bull.svg')" alt="Bull icon" />
              </div>
            </StateBoxes>

            <TagCharts :title="'Tesla'" :checkBox="evaluation.tagCharts" />
          </div>
          <div class="px-2 py-4">
            <ListStats :items="evaluation.listStats" />
          </div>
        </Card>

        <Card
          :options="mainCompetitors"
          class="w-full"
        >
          <div class="flex flex-col justify-between">
            <div class="pr-8 pl-9 pt-7 pb-9 lg:flex">
              <div v-for="item in mainCompetitors.charts" :key="item.id" class="w-fit lg:mr-[70px] mx-auto lg:mb-0 mb-4">
                <div>
                  <div class="flex items-center justify-center mb-4">
                    <img :src="item.icon" :alt="`${item.title} icon`" class="mr-1" />
                    <h4>{{ item.title }}</h4>
                  </div>

                  <div class="flex items-center justify-center text-xs leading-4 mb-1">
                    <div class="text-secondary-text">Last Close:</div>
                    <div class="text-footer-nav ml-[3px]">{{ item.last }}</div>
                  </div>

                  <div class="text-center mb-4 text-xs leading-[14px] font-medium text-japanese-laurel">
                    {{ item.fairVal }}
                  </div>
                </div>

                <div class="w-[170px] h-[182px] mx-auto">
                  <NetworkingChart
                      :line-color="item.chartOptions.lineColor"
                      :data-value="item.chartOptions.data"
                      :area-color="item.chartOptions.areaColor"
                  />
                </div>

                <div class="mb-6 mt-4">
                <span class="text-[10px] leading-4 font-medium text-secondary-text mb-2">
                  Rating
                </span>
                  <StateBoxes
                      :color="item.rating.data.color"
                      :box-length="item.rating.data.boxLength"
                      :active-boxes="item.rating.data.active"
                  >
                    <div class="uppercase text-sm leading-none font-bold mb-0.5">{{ item.rating.title }}</div>
                  </StateBoxes>
                </div>

                <div>
                <span class="text-[10px] leading-4 font-medium text-secondary-text mb-2">
                  Average Proprietary Model™
                </span>
                  <StateBoxes
                      :color="item.average.color"
                      :box-length="item.average.boxLength"
                      :active-boxes="item.average.active"
                      class="w-fit"
                  >
                    <div class="flex items-center justify-between px-1 mb-0.5 pr-1.5">
                      <img :src="require('@/assets/img/pages/company/bear-black.svg')" alt="Bear icon" />
                      <img :src="require('@/assets/img/pages/company/bull.svg')" alt="Bull icon" />
                    </div>
                  </StateBoxes>
                </div>
              </div>
            </div>
            <div class="px-2 py-4">
              <ListStats :items="mainCompetitors.listStats" />
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
    <SeeMoreIdeas :options="seeMoreData" />
  </div>
</template>

<script>
  import SectionWrapper from "@/components/pages/company/SectionWrapper";
  import SeeMoreIdeas from "@/components/universal/SeeMoreIdeas";
  import Card from "@/components/universal/Card";
  import NetworkingChart from "@/components/universal/Charts/NetworkingChart";
  import StateBoxes from "@/components/universal/StateBoxes";
  import TagCharts from "@/components/universal/Charts/TagCharts";
  import ListStats from "@/components/universal/ListStats";

  export default {
    components: {
      ListStats,
      StateBoxes,
      NetworkingChart,
      Card,
      SeeMoreIdeas,
      SectionWrapper,
      TagCharts
    },
    data: () => ({
      sectionOptions: {
        heading: 'Equityset’s Proprietary Model™️ on activities',
        description: 'Buy or Sell? Bear or Bullish on activities? What the competition does?',
        darkBg: true
      },
      seeMoreData: [
        { title: 'See more in Structure', url: '' },
        { title: 'Learn more', url: '' },
      ],
      evaluation: {
        title: 'Tesla’s Evaluation',
        description: 'Market Valuations and how they have trended over time',
        listCheck: true,
        line: true,
        chartOptions: {
          areaColor: '#8D57FF',
          dataValue: [7000, 10000, 7000, 7000, 10000, 5000, 7000, 10000],
          lineColor: '#8D57FF'
        },
        listStats: [
          {
            id: '1',
            positive: true,
            title: [{ data: 'AAPL has a 25% upwards', standard: true }]
          },
          {
            id: '2',
            positive: true,
            title: [{ data: 'AAPL has a 25% upwards', standard: true }]
          },
          {
            id: '3',
            positive: true,
            title: [{ data: 'AAPL has a 25% upwards', standard: true }]
          },
        ],
        tagCharts: { title: 'Industry', active: false }
      },
      mainCompetitors: {
        title: 'Main Competitors',
        description: 'Market Valuations and how they have trended over time',
        listCheck: true,
        line: true,
        listStats: [
          {
            id: '1',
            positive: true,
            title: [{ data: 'AAPL has a 25% upwards', standard: true }]
          },
          {
            id: '2',
            positive: true,
            title: [{ data: 'AAPL has a 25% upwards', standard: true }]
          },
          {
            id: '3',
            positive: true,
            title: [{ data: 'AAPL has a 25% upwards', standard: true }]
          },
        ],
        charts: [
          {
            id: '1',
            title: 'CNNN',
            icon: require('@/assets/img/pages/company/cnn.svg'),
            last: '$292.92',
            fairVal: '13% below Fair Value',
            rating: {
              title: 'Hold',
              data: {
                active: [3, 4, 5],
                boxLength: 9,
                color: '#ED9501'
              }
            },
            average: {
              active: [5],
              boxLength: 8,
              color: '#1B2230'
            },
            chartOptions: {
              lineColor: '#5B6270',
              data: [10000, 6000, 10000, 6000, 3000, 6000, 6000, 6000],
              areaColor: '#5B6270'
            }
          },
          {
            id: '2',
            title: 'CNNN',
            icon: require('@/assets/img/pages/company/cnn.svg'),
            last: '$292.92',
            fairVal: '13% below Fair Value',
            rating: {
              title: 'Hold',
              data: {
                active: [3, 4, 5],
                boxLength: 9,
                color: '#ED9501'
              }
            },
            average: {
              active: [5],
              boxLength: 8,
              color: '#1B2230'
            },
            chartOptions: {
              lineColor: '#5B6270',
              data: [10000, 6000, 10000, 6000, 3000, 6000, 6000, 6000],
              areaColor: '#5B6270'
            }
          },
          {
            id: '3',
            title: 'CNNN',
            icon: require('@/assets/img/pages/company/cnn.svg'),
            last: '$292.92',
            fairVal: '13% below Fair Value',
            rating: {
              title: 'Hold',
              data: {
                active: [6, 7],
                boxLength: 9,
                color: '#28A946'
              }
            },
            average: {
              active: [5],
              boxLength: 8,
              color: '#1B2230'
            },
            chartOptions: {
              lineColor: '#5B6270',
              data: [10000, 6000, 10000, 6000, 3000, 6000, 6000, 6000],
              areaColor: '#5B6270'
            }
          }
        ],
      }
    }),
  }
</script>
