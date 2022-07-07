<template>
  <OperationsSection :options="sectionOptions" :premiumAnalysis="premiumAnalysis">
    <div class="flex flex-col lg:flex-row items-start justify-between">
      <div>
        <Card class="lg:min-w-[840px]" :options="cards[0]">
          <div class="pl-2 pt-6">
            <div class="flex">
              <p class="flex items-center text-footer-nav">
                <span class="text-lg leading-[18px] font-bold">$</span>
                <span class="text-[22px] leading-7 font-bold">212M</span>
                <span class="pl-1">+25%</span>
                <span class="text-xs leading-3 text-secondary-text pl-1">
                  Last Fiscal Year
                </span>
              </p>
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
          <div class="pl-[11px] pt-4 pb-0.5 mt-2 mb-1 flex items-end">
            <div class="flex items-center">
              <div class="font-semibold leading-[14px] text-red mr-0.5">
                ↓
              </div>

              <div class="flex items-end text-footer-nav font-bold ">
                <span class="text-2xl leading-7">14</span>
                <span class="text-lg leading-none mb-[3px]">%</span>
              </div>
            </div>

            <div class="text-xs leading-none text-secondary-text mb-[5px] ml-1.5">Total Expenses from 2020</div>
          </div>

          <div class="px-3 py-7">
            <div class="text-xs text-secondary-text leading-none">Last Fiscal Year</div>

            <div class="flex flex-col lg:flex-row justify-between flex-start lg:pl-3 pt-5">
              <BigPieChart :chart="cards[1].mainChart" />

              <div class="mt-5 lg:mt-0">
                <div class="text-xs leading-none text-secondary-text">vs Market Industry and Sector</div>

                <SmallPieChartList :data="cards[1].charts" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Accordion class="mt-5 lg:mt-0 lg:px-3 lg:w-[332px]" :items="accordionItems" />
    </div>
  </OperationsSection>
</template>

<script>
import OperationsSection from "@/components/pages/company/tabs/stock-analysis/operations/OperationsSection";
import Card from "@/components/universal/Card";
import Accordion from "@/components/pages/company/tabs/stock-analysis/operations/Accordion";
import LineChart from "@/components/universal/Charts/LineChart";
import ChartTag from "@/components/universal/chartTag";
import PieChart from "@/components/universal/Charts/PieChart";
import SwitchCheckbox from "@/components/universal/SwitchCheckBox";
import BigPieChart from "@/components/pages/company/tabs/stock-analysis/operations/BigPieChart";
import SmallPieChartList from "@/components/pages/company/tabs/stock-analysis/operations/SmallPieChartList";

export default {
  components: {
    SmallPieChartList,
    BigPieChart,
    SwitchCheckbox,
    PieChart,
    Accordion,
    Card,
    OperationsSection,
    LineChart,
    ChartTag,
  },
  data: () => ({
    sectionOptions: {
      count: 3,
      title: 'Costs',
      description: 'Market Valuations and how they have trended over time'
    },
    cards: [
      {
        title: '3.1 Costs of Goods Sold vs Sales',
        smallTitle: true,
        description: 'What is APPL’s overall trend of Cost of Goods Sold',
        line: true,
        listCheck: true,
        bottomLinks: [
          { id: 1, title: 'Learn more', link: '/' },
        ],
        lineXaxisLabel: ['2010', '', '2012', '', '2014', '', '2016', '', '2018', '', '2020', '', '2022'],
        positive: true,
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
        title: '3.2 Operating vs non operating expenses',
        smallTitle: true,
        description: 'Lorem ipsum',
        line: true,
        listCheck: true,
        bottomLinks: [
          { id: 1, title: 'Learn more', link: '/' },
        ],
        charts: [
          {
            id: 1,
            series: [
              {
                name: 'Sector',
                silent: true,
                type: 'pie',
                radius: ['60%', '100%'],
                label: {
                  show: false,
                  position: 'center'
                },
                data: [
                  { value: 120, name: '', itemStyle: { color: '#6A38EB' } },
                  { value: 245, name: '', itemStyle: { color: '#CB00BA'} }
                ]
              }
            ],
          },
          {
            id: 2,
            series: [
              {
                name: 'Industry',
                silent: true,
                type: 'pie',
                radius: ['60%', '100%'],
                label: {
                  show: false,
                  position: 'center'
                },
                data: [
                  { value: 120, name: '', itemStyle: { color: '#6A38EB' } },
                  { value: 245, name: '', itemStyle: { color: '#CB00BA'} }
                ]
              }
            ],
          },
          {
            id: 3,
            series: [
              {
                name: 'Market',
                silent: true,
                type: 'pie',
                radius: ['60%', '100%'],
                label: {
                  show: false,
                  position: 'center'
                },
                data: [
                  { value: 120, name: '', itemStyle: { color: '#6A38EB' } },
                  { value: 245, name: '', itemStyle: { color: '#CB00BA'} }
                ]
              }
            ],
          },
        ],
        mainChart: {
          centerText: '2021',
          series: [
            {
              name: 'Last 5Y',
              silent: true,
              type: 'pie',
              radius: ['77%', '95%'],
              itemStyle: {
                shadowBlur: 3,
              },
              label: {
                show: true,
                lineHeight: 15,
                formatter: (params) => {
                  return `${params.name}\n${params.percent}%`
                }
              },
              labelLine: {
                show: true,
                length: 10,
                length2: 0,
                lineStyle: {
                  color: '#000'
                }
              },
              data: [
                { value: 265, name: 'Non-Operating', itemStyle: { color: '#CB00BA'}, show: true },
                { value: 190, name: 'Operating', itemStyle: { color: '#6A38EB' }, show: true },
              ]
            },
            {
              name: '2021',
              silent: true,
              type: 'pie',
              radius: ['43%', '64%'],
              label: {
                show: false
              },
              data: [
                { value: 245, name: '', itemStyle: { color: '#CB00BA'}, show: true },
                { value: 120, name: '', itemStyle: { color: '#6A38EB' }, show: true },
              ]
            }
          ]
        }
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
              { data: 'AAPL has a 25% upwards', standard: true },
            ]
          },
          {
            id: '2',
            positive: true,
            title: [
              { data: 'AAPL has a 25% upwards', standard: true },
            ]
          },
          {
            id: '3',
            positive: true,
            title: [
              { data: 'AAPL has a 25% upwards', standard: true },
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
              { data: 'AAPL has a 25% upwards', standard: true },
            ]
          },
          {
            id: '2',
            positive: true,
            title: [
              { data: 'AAPL has a 25% upwards', standard: true },
            ]
          },
          {
            id: '3',
            positive: true,
            title: [
              { data: 'AAPL has a 25% upwards', standard: true },
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
              { data: 'AAPL has a 25% upwards', standard: true },
            ]
          },
          {
            id: '2',
            positive: true,
            title: [
              { data: 'AAPL has a 25% upwards', standard: true },
            ]
          },
          {
            id: '3',
            positive: true,
            title: [
              { data: 'AAPL has a 25% upwards', standard: true },
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
          { data: 'Apple dividends affected', standard: true },
          { data: '25% upwards', positive: true },
          { data: 'the Fair Value', standard: true },
          { data: '25% upwards', positive: true },
        ]
      },
      {
        id: '2',
        positive: false,
        title: [
          { data: 'Apple dividends affected', standard: true },
          { data: '25% upwards', positive: true },
          { data: 'the Fair Value', standard: true },
          { data: '25% upwards', positive: true },
        ]
      },
    ]
  }),
}
</script>
