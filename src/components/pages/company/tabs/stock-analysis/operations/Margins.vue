<template>
  <OperationsSection :options="sectionOptions" :premiumAnalysis="premiumAnalysis">
    <div class="flex flex-wrap items-start justify-between max-w-[1067px]">
      <Card v-for="(item, i) in cards" :key="i" class="lg:min-w-[319px] mb-4 mx-auto" :options="item">
          <GaugeTrippleChart
            :gauge-data="{ first: 20, second: 40, third: 60 }"
            :color-section="item.gaugeData.colorSection"
          />
        <GaugeInfo
          v-if="item.gaugeData.gaugeSection.length"
          :gauge-section="item.gaugeData.gaugeSection"/>
        <BarSimpleChart
          v-if="item.barData.length"
          class="h-[150px] px-8"
          right-margin="-10%"
          :show-y-axis="false"
          :bar-data="item.barData"
          bar-item-width="44"
          :border-radius="[0]"
        />
        <ListStats class="pt-[38px]" :items="item.listStats"/>
      </Card>
    </div>
  </OperationsSection>
</template>

<script>
import OperationsSection from "@/components/pages/company/tabs/stock-analysis/operations/OperationsSection";
import Card from "@/components/universal/Card";
import Accordion from "@/components/pages/company/tabs/stock-analysis/operations/Accordion";
import GaugeTrippleChart from "@/components/universal/Charts/GaugeThrippleChart";
import GaugeInfo from "@/components/universal/GaugeInfo";
import BarSimpleChart from "@/components/universal/Charts/BarSimpleChart";
import ListStats from "@/components/universal/ListStats";

export default {
  components: {
    ListStats,
    BarSimpleChart,
    GaugeInfo,
    GaugeTrippleChart,
    Accordion,
    Card,
    OperationsSection,
  },
  data: () => ({
    sectionOptions: {
      count: 5,
      title: 'Margins',
      description: 'Some text here would be great'
    },
    cards: [
      {
        title: '5.1. Operating Margins',
        smallTitle: true,
        line: true,
        listCheck: true,
        learnMoreLink: '/',
        gaugeData: {
          colorSection: {
            first: '#FF342A', second: '#DBDDE4', third: '#8C94AB'
          },
          gaugeSection: [
            {
              title: 'Company',
              color: '#6A38EB',
              price: '$120M'
            },
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
        },
        barData: [
          {
            value: 900,
            color: '#6A38EB',
            xAxisLabel: 'TESL'
          },
          {
            value: 500,
            color: '#A5B4FC',
            xAxisLabel: 'NVDIA'
          },
          {
            value: 600,
            color: '#A5B4FC',
            xAxisLabel: 'DELL'
          },
          {
            value: 600,
            color: '#A5B4FC',
            xAxisLabel: 'AMZN'
          }
        ],
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
        title: '5.2. EBITDA',
        smallTitle: true,
        line: true,
        listCheck: true,
        learnMoreLink: '/',
        gaugeData: {
          colorSection: {
            first: '#8C94AB', second: '#DBDDE4', third: '#28A946'
          },
          gaugeSection: [
            {
              title: 'Company',
              color: '#6A38EB',
              price: '$120M'
            },
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
        },
        barData: [
          {
            value: 900,
            color: '#6A38EB',
            xAxisLabel: 'TESL'
          },
          {
            value: 500,
            color: '#A5B4FC',
            xAxisLabel: 'NVDIA'
          },
          {
            value: 600,
            color: '#A5B4FC',
            xAxisLabel: 'DELL'
          },
          {
            value: 600,
            color: '#A5B4FC',
            xAxisLabel: 'AMZN'
          }
        ],
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
        title: '5.3. Profit Margin',
        smallTitle: true,
        line: true,
        listCheck: true,
        learnMoreLink: '/',
        gaugeData: {
          colorSection: {
            first: '#8C94AB', second: '#DBDDE4', third: '#28A946'
          },
          gaugeSection: [
            {
              title: 'Company',
              color: '#6A38EB',
              price: '$120M'
            },
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
        },
        barData: [
          {
            value: 900,
            color: '#6A38EB',
            xAxisLabel: 'TESL'
          },
          {
            value: 500,
            color: '#A5B4FC',
            xAxisLabel: 'NVDIA'
          },
          {
            value: 600,
            color: '#A5B4FC',
            xAxisLabel: 'DELL'
          },
          {
            value: 600,
            color: '#A5B4FC',
            xAxisLabel: 'AMZN'
          }
        ],
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
  })
}
</script>
