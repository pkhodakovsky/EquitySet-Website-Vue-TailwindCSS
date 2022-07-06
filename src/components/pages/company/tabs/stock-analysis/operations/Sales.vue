<template>
  <OperationsSection :options="sectionOptions" :premiumAnalysis="premiumAnalysis">
    <div class="flex items-start justify-between">
      <div>
        <Card class="lg:min-w-[840px]" :options="cards[0]">
          <div class="pl-[11px] pt-4 pb-0.5 mt-2 mb-1">

          </div>
        </Card>

        <Card class="lg:min-w-[840px] mt-6" :options="cards[1]">
        </Card>
      </div>

      <Accordion class="px-3 lg:w-[332px]" :items="accordionItems" />
    </div>
  </OperationsSection>
</template>

<script>
import OperationsSection from "@/components/pages/company/tabs/stock-analysis/operations/OperationsSection";
import Card from "@/components/universal/Card";
import Accordion from "@/components/pages/company/tabs/stock-analysis/operations/Accordion";

export default {
  components: {
    Accordion,
    Card,
    OperationsSection,
  },
  data: () => ({
    sectionOptions: {
      count: 2,
      title: 'Sales',
      description: 'Market Valuations and how they have trended over time'
    },
    cards: [
      {
        title: '2.1 How has Apple performed in recent years',
        smallTitle: true,
        description: 'Cost of Debt Growth and % of Net Income',
        line: true,
        listCheck: true,
        learnMoreLink: '/'
      },
      {
        title: '2.2 Receivable Collection Period',
        smallTitle: true,
        description: 'The number of days it takes to collect accounts receivable',
        line: true,
        listCheck: true,
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
  })
}
</script>
