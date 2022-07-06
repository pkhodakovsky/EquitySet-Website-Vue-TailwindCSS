<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <Card
        :options="{
          title: '3.1. Top Level management',
          description: 'Market Valuations and how they have trended over time',
          line: true
        }"
        class="mb-6 mt-8"
      >
        <Table class="mt-1" :data="tableData" />
      </Card>

      <div class="flex justify-between items-start">
        <div class="lg:mr-4 w-full">
          <Card
            :options="{
              title: '3.2. Website',
              description: 'Market Valuations and how they have trended over time',
              line: true,
            }"
            class="mb-6"
          >
            <div class="px-3 py-5 my-0.5">
              <a :href="companyLink" class="flex items-center text-lg text-primary underline font-medium leading-none">
                <span>{{ companyLink }}</span>
                <img :src="require('@/assets/img/icons/link-icon.svg')" alt="Link icon" class="ml-3.5" />
              </a>
            </div>
          </Card>


          <!-- mobile card should change -->
          <Card
            :options="{
              title: '3.3. Headquarters',
              description: 'Market Valuations and how they have trended over time',
              line: true
            }"
            class="lg:hidden w-full mb-6"
          >
            <div class="py-3 px-2">
              <div class="flex items-end justify-between mb-4">
                <div class="text-sm leading-5 text-grey">
                  <div>Address Line 1</div>
                  <div>Address Line 2</div>
                  <div>City Postal Code</div>
                </div>

                <ButtonLink text-content="View on Map" />
              </div>

              <LMap :height="LMapHeight" />
              <ListStats :items="mapListStats" class="mt-7" />
            </div>
          </Card>
          <!-- ^^^^^ mobile card should change ^^^^^^ -->

          <Card
            :options="{
              title: '3.4 Personnel Growth',
              listCheck: true,
              line: false,
              lightTitle: true
            }"
          >
            <div class="pt-3 pb-4 pl-2 pr-[22px]">
              <h4 class="text-2xl leading-7 font-bold text-footer-nav mb-5">Increasing</h4>

              <div class="flex items-center">
                <div class="flex items-center justify-center h-[26px] w-[26px] rounded-[4px] bg-icon-bg">
                  <img :src="require('@/assets/img/pages/company/arrow-up.svg')" alt="Arrow up" />
                </div>
                <div class="ml-[5px]">
                  <div class="flex items-end">
                    <span class="leading-none text-green font-bold">5</span>
                    <span class="text-green text-xs leading-none font-medium">%</span>
                  </div>

                  <p class="text-xs leading-none text-secondary-text">In the last 5 years</p>
                </div>
              </div>

            <div>
              <LineChart
                :line-color="'#3B82F6'"
                :line-data="[100, 200, 50, 600, 400, 300, 500, 450, 500, 700, 750, 600, 800]"
                class="mb-1.5 h-[159px] lg:h-[239px]"
              />

                <div class="flex items-center ml-2 py-1 px-1.5 border border-grey-bg-footer rounded-[2px] w-fit">
                  <div class="h-2 w-2 rounded-full bg-blue mr-1.5"></div>

                  <span class="text-[10px] leading-3 font-medium text-blue">Number of Employees</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card
          :options="{
            title: '3.3. Headquarters',
            description: 'Market Valuations and how they have trended over time',
            line: true,
          }"
          class="ml-4 w-full hidden lg:block"
        >
          <div class="py-3 px-2">
            <div class="flex items-end justify-between mb-4">
              <div class="text-sm leading-5 text-grey">
                <div>Address Line 1</div>
                <div>Address Line 2</div>
                <div>City Postal Code</div>
              </div>

              <ButtonLink text-content="View on Map" />
            </div>
          </div>

          <LMap :height="LMapHeight" />
          <ListStats class="mt-7" :items="mapListStats" />
        </Card>
      </div>
    </SectionWrapper>

    <SeeMoreIdeas />
  </div>
</template>

<script>
import SectionWrapper from "@/components/pages/company/SectionWrapper";
import Card from "@/components/universal/Card";
import Table from "@/components/pages/company/Table";
import LineChart from "@/components/universal/Charts/LineChart";
import LMap from "@/components/universal/LMap/LMap";
import { WINDOW_SCREEN } from "@/constants/constants";
import resizeWindow from "@/mixins/resizeWindow";
import SeeMoreIdeas from "@/components/universal/SeeMoreIdeas";
import ButtonLink from "@/components/universal/ButtonLink";
import ListStats from "@/components/universal/ListStats";

export default {
  components: {
    ListStats,
    ButtonLink,
    LineChart,
    Table,
    Card,
    SectionWrapper,
    LMap,
    SeeMoreIdeas,
  },
  mixins: [ resizeWindow ],
  data: () => ({
    WINDOW_SCREEN,
    companyLink: 'https://www.tesla.com',
    sectionOptions: {
      heading: 'Corporate Information',
      darkBg: true,
    },
    tableData: {
      header: [
        {title: 'Name'},
        {title: 'Title'},
        {title: 'Ownership'},
        {title: 'Tenure'}
      ],
      items: [
        {
          id: '1',
          name: 'Elliot Musk',
          title: 'Chief Executive Officer',
          ownership: '0.020% - $ 488.1m',
          tenure: '10 years'
        },
        {
          id: '2',
          name: 'Cody Fisher',
          title: 'Chief Financial Officer',
          ownership: '0.020% - $ 488.1m',
          tenure: '12 years'
        },
        {
          id: '3',
          name: 'Esther Howard',
          title: 'Chief Operations Officer',
          ownership: '0.020% - $ 488.1m',
          tenure: '15 years'
        }
      ]
    },
    mapListStats: [
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
  }),
  computed: {
    LMapHeight () {
      return this.windowSize < WINDOW_SCREEN.LG ? '200px' : '290px'
    }
  }
}
</script>
