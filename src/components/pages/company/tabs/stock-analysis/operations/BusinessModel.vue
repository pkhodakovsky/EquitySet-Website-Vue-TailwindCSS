<template>
  <OperationsSection :options="sectionOptions" :premiumAnalysis="premiumAnalysis">
    <div class="flex flex-col lg:flex-row items-start justify-between">
      <Card class="lg:min-w-[840px]" :options="cardOptions">
        <div class="pl-2">
          <div class="pt-6 pb-[23px]">
            <span class="text-lg font-bold leading-[18px]">$</span>
            <span class="text-[22px] font-bold leading-[28px]">212M</span>
            <span class="text-base text-grey"> 13%</span>
            <span class="font-normal text-xs text-grey"> of Net Income | Previous FY</span>
          </div>
          <BusinessChart class="border-b-[1px] border-[#DBDDE4]" :chart-data="businessDataChart" step-line-color="#3B82F6" />
        </div>
      </Card>

      <Accordion class="mt-5 lg:mt-0 lg:px-3 lg:w-[332px]" :items="accordionItems" />
    </div>
  </OperationsSection>
</template>

<script>
import OperationsSection from "@/components/pages/company/tabs/stock-analysis/operations/OperationsSection";
import Card from "@/components/universal/Card";
import Accordion from "@/components/pages/company/tabs/stock-analysis/operations/Accordion";
import BusinessChart from "@/components/universal/Charts/BusinessChart";

export default {
  components: {
    Accordion,
    BusinessChart,
    Card,
    OperationsSection,
  },
  data: () => ({
    sectionOptions: {
      count: 1,
      title: 'Business Model',
      description: 'Market Valuations and how they have trended over time'
    },
    cardOptions: {
      title: '1.1 How profitable is APPL’s business model? How does a dollar do when it enters a company?',
      smallTitle: true,
      description: 'Cost of Debt Growth and % of Net Income',
      line: true,
      listCheck: true,
      gridBtn: true,
      bottomLinks: [
        { id: 1, title: 'Learn more', link: '/' },
      ],
    },
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
    businessDataChart: [
      {
        value: 2900,
        marginBottom: 0,
        color: '#A5B4FC',
        price: 1.00,
        labelName: 'Revenue',
      },
      {
        value: 900,
        marginBottom: 2000,
        color: '#FDA4AF',
        price: 0.56,
        labelName: 'COGS',
      },
      {
        value: 1200,
        marginBottom: 0,
        color: '#A5B4FC',
        price: 0.44,
        labelName: 'Utilities',
      },
      {
        value: 700,
        marginBottom: 500,
        color: '#FDA4AF',
        price: 0.10,
        labelName: 'Operating Income',
      },
      {
        value: 500,
        marginBottom: 0,
        color: '#A5B4FC',
        price: 0.34,
        labelName: 'Operating Expanse',
      },
      {
        value: 200,
        marginBottom: 300,
        color: '#FDA4AF',
        price: 0.16,
        labelName: 'EBIT',
      },
      {
        value: 400,
        marginBottom: 0,
        color: '#00C0B6',
        price: 0.27,
        labelName: 'Tax',
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
