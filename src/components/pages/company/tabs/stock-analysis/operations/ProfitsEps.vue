<template>
  <OperationsSection :options="sectionOptions" :premiumAnalysis="premiumAnalysis">
    <div class="flex flex-col lg:flex-row items-start justify-between">
      <div>
        <Card class="lg:min-w-[840px]" :options="cards[0]">
          <div class="pl-2 pt-6">
            <div class="flex flex-col lg:flex-row">
              <div v-for="item in cards[0].lineStatistic" class="mb-4 lg:mb-0">
                <p class="text-xs leading-3 text-secondary-text pb-2">{{ item.title }}</p>
                <div class="flex pr-8">
                  <img
                    class="fill-bubble-gum"
                    :src="require(`@/assets/img/pages/company/${cards[0].positive ? 'income' : 'lose'}-arrow.svg`)"
                    alt="income-arrow"
                  />
                  <p class="flex items-center">
                    <span
                      class="text-[22px] font-bold leading-7 pl-1"
                      :class="cards[0].positive ? 'text-green' : 'text-red'"
                    >{{ item.percentage }}
                    </span>
                        <span class="text-footer-nav pl-1">
                      {{ item.earnings }}
                    </span>
                    <span class="text-xs leading-3 text-secondary-text pl-1">
                      {{ item.description }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <LineChart
              class="h-[14rem] mt-20"
              few-charts
              show-y-axis
              right="2%"
              left="2%"
              bottom="10%"
              xline-color="transparent"
              xtick-color="#DBDDE4"
              :y-axis-label="cards[0].lineXaxisLabel"
              :line-data="cards[0].lineData"
            />
            <div class="flex">
              <chart-tag text="Sales" color="blue"/>
              <chart-tag text="Revenues" color="primary"/>
              <chart-tag text="Revenues" color="primary"/>
            </div>
          </div>
        </Card>

        <Card class="lg:min-w-[840px] mt-6" :options="cards[1]">
         <div class="flex ">
           <div class="w-full pt-6 pl-2">
             <p class="text-lg text-footer-nav font-bold flex items-center">$
               <span class="text-[22px] leading-7">12%</span>
               <span class="px-1 font-normal">+25%</span>
               <span class="text-xs text-secondary-text font-normal">Last Fiscal Year</span>
             </p>
             <period-bar-chart
               class="h-[15rem]"
               align-with-axis
               bar-color="#A5B4FC"
               :bar-data="cards[1].barData"
             />
             <div class="flex justify-around px-2 pt-2">
               <div v-for="(item, index) in cards[1].barData[0].data" :key="index">
                 <p class="text-[8px] text-center text-primary leading-3">{{ item.mainSupply }}</p>
                 <p class="text-[8px] text-center leading-3 text-grey">{{ item.secondarySupply }}</p>
                 <p class="text-[8px] text-center leading-3 text-grey">{{ item.additionalSupply }}</p>
               </div>
             </div>
           </div>
           <div class="flex items-end pr-8">
             <div>
               <p class="text-[8px] text-primary leading-3">EPS</p>
               <p class="text-[8px] whitespace-nowrap leading-3 text-grey">Net Income</p>
               <p class="text-[8px] leading-3 text-grey">Buybacks</p>
             </div>
           </div>
         </div>
        </Card>
      </div>

      <Accordion class="mt-5 lg:mt-0 lg:px-3 lg:w-[332px]" :items="accordionItems"/>
    </div>
  </OperationsSection>
</template>

<script>
import OperationsSection from "@/components/pages/company/tabs/stock-analysis/operations/OperationsSection";
import Card from "@/components/universal/Card";
import Accordion from "@/components/pages/company/tabs/stock-analysis/operations/Accordion";
import LineChart from "@/components/universal/Charts/LineChart";
import ChartTag from "@/components/universal/chartTag";
import PeriodBarChart from "@/components/universal/Charts/periodBarChart";

export default {
  components: {
    PeriodBarChart,
    ChartTag,
    LineChart,
    Accordion,
    Card,
    OperationsSection,
  },
  data: () => ({
    sectionOptions: {
      count: 4,
      title: 'Profits & EPS',
      description: 'Market Valuations and how they have trended over time'
    },
    cards: [
      {
        title: '4.1 Sales and Revenue Growth',
        smallTitle: true,
        description: 'Cost of Debt Growth and % of Net Income',
        line: true,
        listCheck: true,
        bottomLinks: [
          { id: 1, title: 'Learn more', link: '/' },
        ],
        lineXaxisLabel: ['2010', '', '2012', '', '2014', '', '2016', '', '2018', '', '2020', '', '2022'],
        positive: true,
        lineStatistic: [
          {
            title: 'Net income',
            percentage: '15%',
            earnings: '$345B',
            description: 'Earnings Fiscal Year'
          },
          {
            title: 'Revenues',
            percentage: '25%',
            earnings: '$345B',
            description: 'Earnings Fiscal Year'
          }
        ],
        lineData: [
          {
            name: 'Sales',
            data: [100, 200, 50, 600, 400, 300, 500, 450, 500, 700, 750, 600, 800],
            lineColor: '#3B82F6'
          },
          {
            name: 'Revenues',
            data: [50, 100, 25, 300, 200, 150, 250, 225, 250, 350, 375, 300, 400],
            lineColor: '#6A38EB'
          }
        ]
      },
      {
        title: '4.2 Earnings Per Share ',
        smallTitle: true,
        description: 'Lorem',
        line: true,
        listCheck: true,
        bottomLinks: [
          { id: 1, title: 'Math Type', link: '/' },
          { id: 2, title: 'Learn more', link: '/' },
        ],
        barData: [
          {
            data: [
              {
                value: 120,
                yAxisLabel: '2016',
                pricePercentage: '0.16%',
                positive: true,
                mainSupply: '$43,887.00',
                secondarySupply: '$212,981.00',
                additionalSupply: '$0.00'
              },
              {
                value: 120,
                yAxisLabel: '2016',
                pricePercentage: '0.16%',
                positive: true,
                mainSupply: '$43,887.00',
                secondarySupply: '$212,981.00',
                additionalSupply: '$0.00'
              },
              {
                value: 120,
                yAxisLabel: '2016',
                pricePercentage: '0.16%',
                positive: true,
                mainSupply: '$43,887.00',
                secondarySupply: '$212,981.00',
                additionalSupply: '$12,981.00'
              },
              {
                value: 90,
                yAxisLabel: '2016',
                pricePercentage: '0.16%',
                positive: false,
                mainSupply: '$43,887.00',
                secondarySupply: '$212,981.00',
                additionalSupply: '$0.00'
              },
              {
                value: 90,
                yAxisLabel: '2016',
                pricePercentage: '0.16%',
                positive: false,
                mainSupply: '$43,887.00',
                secondarySupply: '$212,981.00',
                additionalSupply: '$0.00'
              }
            ],
            type: 'bar'
          }
        ]
      }
    ],
    accordionItems: [
      {
        id: 1,
        icon: require('@/assets/img/pages/company/operations/apple-icon.svg'),
        title: 'APPL',
        description: 'has worse margins in 2 of 3 areas',
        positive: true,
        listStats: [
          {
            id: '1',
            positive: true,
            title: [
              {data: 'AAPL has a 25% upwards', standard: true},
            ]
          },
          {
            id: '2',
            positive: true,
            title: [
              {data: 'AAPL has a 25% upwards', standard: true},
            ]
          },
          {
            id: '3',
            positive: true,
            title: [
              {data: 'AAPL has a 25% upwards', standard: true},
            ]
          }
        ]
      },
      {
        id: 2,
        icon: require('@/assets/img/pages/company/operations/q.svg'),
        title: 'APPL',
        description: 'has worse margins in 2 of 3 areas',
        positive: true,
        listStats: [
          {
            id: '1',
            positive: true,
            title: [
              {data: 'AAPL has a 25% upwards', standard: true},
            ]
          },
          {
            id: '2',
            positive: true,
            title: [
              {data: 'AAPL has a 25% upwards', standard: true},
            ]
          },
          {
            id: '3',
            positive: true,
            title: [
              {data: 'AAPL has a 25% upwards', standard: true},
            ]
          }
        ]
      },
      {
        id: 3,
        icon: require('@/assets/img/pages/company/operations/tesla-icon.svg'),
        title: 'APPL',
        description: 'has worse margins in 2 of 3 areas',
        positive: true,
        listStats: [
          {
            id: '1',
            positive: true,
            title: [
              {data: 'AAPL has a 25% upwards', standard: true},
            ]
          },
          {
            id: '2',
            positive: true,
            title: [
              {data: 'AAPL has a 25% upwards', standard: true},
            ]
          },
          {
            id: '3',
            positive: true,
            title: [
              {data: 'AAPL has a 25% upwards', standard: true},
            ]
          }
        ]
      }
    ],
    premiumAnalysis: [
      {
        id: '1',
        positive: true,
        title: [
          {data: 'Apple dividends affected', standard: true},
          {data: '25% upwards', positive: true},
          {data: 'the Fair Value', standard: true},
          {data: '25% upwards', positive: true},
        ]
      },
      {
        id: '2',
        positive: false,
        title: [
          {data: 'Apple dividends affected', standard: true},
          {data: '25% upwards', positive: true},
          {data: 'the Fair Value', standard: true},
          {data: '25% upwards', positive: true},
        ]
      },
    ]
  })
}
</script>
