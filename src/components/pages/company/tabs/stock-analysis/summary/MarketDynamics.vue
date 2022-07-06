<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <div class="lg:flex mt-9">
        <div class="lg:mr-8 lg:mb-0 mb-5">
          <div class="md:flex mb-5">
            <Card
              :key="cards[0].id"
              :options="cards[0]"
              class="w-full mr-4 lg:min-w-[320px] md:mb-0 mb-4"
            >
              <div class="pl-4 pr-1.5 pt-4 pb-3">
                <div v-for="i in 2" :key="i" :class="{ 'mb-7': i === 1 }">
                  <div class="font-bold text-footer-nav flex items-end">
                    <span class="text-2xl leading-7">72</span>
                    <span class="text-lg leading-none mb-[3px]">%</span>
                  </div>
                  <div class="text-xs leading-none font-bold text-secondary-text">
                    Total ownership
                  </div>
                </div>
              </div>

              <div class="px-2 py-3">
                <ListStats :items="cards[0].itemsStats" />
              </div>
            </Card>

            <Card
              :key="cards[1].id"
              :options="cards[1]"
              class="w-full lg:min-w-[320px]"
            >
              <div class="pl-4 pr-1.5 pt-4 pb-3">
                <div v-for="i in 2" :key="i" :class="{ 'mb-7': i === 1 }">
                  <div class="font-bold text-footer-nav flex items-end">
                    <span class="text-2xl leading-7">72</span>
                    <span class="text-lg leading-none mb-[3px]">%</span>
                  </div>
                  <div class="text-xs leading-none font-bold text-secondary-text">
                    Total ownership
                  </div>
                </div>
              </div>

              <div class="px-2 py-3">
                <ListStats :items="cards[1].itemsStats" />
              </div>
            </Card>
          </div>

          <Card
            :key="cards[2].id"
            :options="cards[2]"
            class="w-full"
          >
            <div class="pl-[26px] pr-1.5 pt-5 pb-7">
              <MarketTable :options="cards[2].table" />
            </div>

            <div class="px-2 py-3">
              <ListStats :items="cards[2].itemsStats" />
            </div>
          </Card>
        </div>

        <Card
          :key="cards[3].id"
          :options="cards[3]"
          class="w-full"
        >
          <div class="pl-2 pr-1.5 pt-3.5">
            <div class="flex items-end">
              <div class="text-footer-nav font-bold mr-1.5">
                <span class="text-2xl leading-7">2.3</span>
                <span class="text-lg leading-none mb-[3px]">%</span>
              </div>

              <div class="px-2 py-0.5 rounded-[2px] bg-green text-white leading-none">
                <span class="font-semibold">+25</span>
                <span class="text-xs font-medium">% / Last Fical year</span>
              </div>
            </div>

            <div class="mx-[52px] mt-[102px] mb-[43px] h-[167px]">
              <ColumnsLineChart
                :items="cards[3].columnsLineChart.lines"
                :boxes="cards[3].columnsLineChart.boxes"
              />
            </div>
          </div>

          <div class="px-2 py-3">
            <ListStats :items="cards[3].itemsStats" />
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
import MarketTable from "@/components/pages/company/tabs/stock-analysis/summary/MarketTable";
import ColumnsLineChart from "@/components/universal/Charts/ColumnsLineChart";

export default {
  components: {
    MarketTable,
    SeeMoreIdeas,
    ListStats,
    Card,
    SectionWrapper,
    ColumnsLineChart
  },
  data: () => ({
    sectionOptions: {
      heading: 'Market Dynamics',
      description: 'How the company has returned money to shareholders via dividends',
      darkBg: true,
    },
    seeMore: [
      { title: 'See more in Operations', url: '' },
      { title: 'Learn more', url: '' },
    ],
    cards: [
      {
        id: '1',
        title: 'Institutional Holdings',
        listCheck: true,
        line: true,
        itemsStats: [
          {
            id: '1',
            positive: true,
            title: [
              { data: 'AAPL has 25% upwards in the 5 years', standard: true },
            ]
          }
        ]
      },
      {
        id: '2',
        title: 'Short Interest',
        listCheck: true,
        line: true,
        itemsStats: [
          {
            id: '1',
            positive: true,
            title: [
              { data: 'AAPL has 25% upwards in the 5 years', standard: true },
            ]
          }
        ]
      },
      {
        id: '3',
        title: 'Module Title',
        description: 'Market Valuations and how they have trended over time',
        listCheck: true,
        line: true,
        itemsStats: [
          {
            id: '1',
            positive: true,
            title: [
              { data: 'TESL has a P/E lower than the industry and market, but a relative high ratio.', standard: true }
            ]
          }
        ],
        table: {
          header: ['Competitors', 'Industry', 'Market'],
          items: [
            {
              id: '1',
              title: 'MTD',
              competitors: 'Under',
              industry: 'Over',
              market: 'Over'
            },
            {
              id: '2',
              title: 'YTD',
              competitors: 'Under',
              industry: 'Under',
              market: 'Under'
            },
          ]
        }
      },
      {
        id: '4',
        title: 'Module Title',
        description: 'Market Valuations and how they have trended over time',
        listCheck: true,
        line: true,
        columnsLineChart: {
          lines: [
            {
              id: '1',
              color: '#0038D8',
              textColor: '#0038D8',
              position: 0,
              height: '153px',
              title: 'Market',
              price: '$165,56',
              other: '-1.15%',
              subTitle: false,
              textPosition: 'right'
            },
            {
              id: '2',
              color: '#ED9501',
              textColor: '#ED9501',
              position: 10,
              height: '116px',
              title: 'Industry',
              price: '$165,56',
              other: '50-day',
              subTitle: false,
              textPosition: 'right'
            },
            {
              id: '3',
              color: '#6A38EB',
              textColor: '#6A38EB',
              position: 20,
              height: '85px',
              title: 'Tesla Inc.',
              price: '$165,56',
              other: '-1.15%',
              subTitle: false,
              textPosition: 'right'
            },
            {
              id: '4',
              color: '#5B6270',
              textColor: '#1B2230',
              position: 50,
              height: '61px',
              title: false,
              price: '$166,56',
              other: false,
              subTitle: 'Market Price',
              textPosition: 'center'
            },
            {
              id: '5',
              color: '#5B6270',
              textColor: '#1B2230',
              position: 80,
              height: '78px',
              title: 'Tesla Inc.',
              price: '$167,56',
              other: '-1.15%',
              subTitle: false,
              textPosition: 'left'
            },
            {
              id: '6',
              color: '#ED9501',
              textColor: '#ED9501',
              position: 90,
              height: '117px',
              title: 'Industry',
              price: '$167,56',
              other: '50-day',
              subTitle: false,
              textPosition: 'left'
            },
            {
              id: '7',
              color: '#0038D8',
              textColor: '#0038D8',
              position: 100,
              height: '153px',
              title: 'Market',
              price: '$167,56',
              other: '+1.15%',
              subTitle: false,
              textPosition: 'left'
            }
          ],
          boxes: [
            { id: 'box-1', color: '#ECECF4', start: 0, width: 20 },
            { id: 'box-2', color: '#ECECF4', start: 80, width: 20 },
          ]
        },
        itemsStats: [
          {
            id: '1',
            positive: true,
            title: [
              { data: 'TESL fact 1 ', standard: true }
            ]
          },
          {
            id: '2',
            positive: true,
            title: [
              { data: 'TESL fact 2 ', standard: true }
            ]
          },
          {
            id: '3',
            positive: true,
            title: [
              { data: 'TESL fact 3 ', standard: true }
            ]
          }
        ]
      },
    ]
  })
}
</script>
