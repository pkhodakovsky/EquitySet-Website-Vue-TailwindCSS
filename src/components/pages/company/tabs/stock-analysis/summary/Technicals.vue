<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <div class="lg:flex mt-9">
        <Card
          :options="cards[0]"
          class="w-full lg:mb-0 mb-4 mr-[30px]"
        >
          <div class="pl-2 pr-1.5 pt-4 pb-5">
            <div class="flex items-center mb-6">
              <div
                v-for="item in cards[0].statistics"
                :key="item.id"
                class="mr-[29px]"
              >
                <div class="flex items-center">
                  <div class="mr-1.5 font-bold text-footer-nav">
                    <span class="text-2xl leading-7">{{ item.val }}</span>
                    <span class="mb-[3px] text-lg leading-none">%</span>
                  </div>

                  <div class="text-xs leading-none font-medium text-green">{{ item.description }}</div>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-[928px] h-[168px] px-2">
              <ColumnsLineChart
                :items="cards[0].columnsLineChart.lines"
                :boxes="cards[0].columnsLineChart.boxes"
                :start="cards[0].columnsLineChart.start"
                :end="cards[0].columnsLineChart.end"
              />
            </div>
          </div>
          <div class="px-2 py-3">
            <ListStats :items="cards[0].itemsStats" />
          </div>
        </Card>

        <Card
          :options="cards[1]"
          class="w-full"
        >
          <div class="pl-2 pr-1.5 pt-3.5 pb-1">
            <div class="flex items-end">
              <div class="text-footer-nav font-bold flex items-end mr-1.5">
                <span class="text-2xl leading-7">29.0</span>
                <span class="text-lg leading-none mb-[3px]">x</span>
              </div>
              <div class="text-red">
                <span class="leading-none font-semibold">4</span>
                <span class="text-xs leading-none font-medium">x / Last Fiscal year</span>
              </div>
            </div>
            <GaugeTrippleChart
              class="md:w-7/12 w-full mx-auto"
              :gauge-data="{ first: 20, second: 40, third: 60 }"
              :color-section="{ first: '#E67E78', second: '#DBDDE4', third: '#8C94AB' }"
            />
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
import ColumnsLineChart from "@/components/universal/Charts/ColumnsLineChart";
import GaugeTrippleChart from "@/components/universal/Charts/GaugeThrippleChart";

export default {
  components: {
    ColumnsLineChart,
    SeeMoreIdeas,
    ListStats,
    Card,
    SectionWrapper,
    GaugeTrippleChart,
  },
  data: () => ({
    sectionOptions: {
      heading: 'Technicals',
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
        title: 'Moving Averages',
        listCheck: true,
        line: true,
        statistics: [
          { id: '1', val: 25, description: 'above 200-day moving average distance' },
          { id: '2', val: 18, description: 'above 50-day moving average distance' },
        ],
        columnsLineChart: {
          start: 'Potential Overextended',
          end: 'Potential Overextended',
          lines: [
            {
              id: '1',
              color: '#0038D8',
              textColor: '#0038D8',
              position: 40,
              height: '137px',
              title: false,
              price: '$125,12',
              other: '200-day',
              subTitle: false,
              textPosition: 'right'
            },
            {
              id: '2',
              color: '#0F7670',
              textColor: '#0F7670',
              position: 50,
              height: '114px',
              title: false,
              price: '$128,12',
              other: '50-day',
              subTitle: false,
              textPosition: 'right'
            },
            {
              id: '3',
              color: '#1B2230',
              textColor: '#1B2230',
              position: 80,
              height: '89px',
              title:  false,
              price: '$165,56',
              other: '-1.15%',
              subTitle: false,
              textPosition: 'right'
            },
          ],
          boxes: [
            { id: 'box-1', color: '#EDFCF2', width: 23, start: 0 },
            { id: 'box-2', color: 'rgba(242, 83, 69, 0.12)', width: 23, start: 77 },
          ]
        },
        itemsStats: [
          {
            id: '1',
            positive: true,
            title: [
              { data: 'AAPL has a 25% upwards', standard: true }
            ]
          }
        ]
      },
      {
        id: '2',
        title: 'Relative Strentgh Indicator',
        listCheck: true,
        line: true,
        itemsStats: [
          {
            id: '1',
            positive: true,
            title: [
              { data: 'AAPL has a', standard: true },
              { data: 'P/E lower', positive: true },
              { data: 'than the industry and market, but a', standard: true },
              { data: 'relatively high ratio.' }
            ]
          }
        ]
      },
    ]
  })
}
</script>
