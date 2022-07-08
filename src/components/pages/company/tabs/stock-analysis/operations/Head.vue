<template>
  <section class="mt-3.5 rounded-[12px] border border-grey-bg-footer pt-2 pb-7 px-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <h2 class="font-bold text-[28px] leading-[32px] mr-3">Operations</h2>
        <div class="flex items-center px-3 py-[5px] rounded-[2px] bg-green cursor-pointer">
          <img :src="require('@/assets/img/pages/company/bull-white.svg')" alt="Bull" />
          <p class="text-white font-semibold leading-4 p-0 ml-1">Bullish</p>
        </div>
        <div class="h-5 w-5 cursor-pointer ml-1.5">
          <img
              class="h-full w-full object-contain"
              :src="require('@/assets/img/pages/profile/info-icon.svg')"
              alt="Info icon"
          />
        </div>
      </div>

      <div class="flex items-center">
        <GridBtn class="mr-2" />
        <ThreeCircleDropBtn />
      </div>
    </div>

    <div class="pt-[18px] flex justify-between">
      <div class="text-sm leading-4 text-secondary-text">
        What the market is currently paying based on a company's financial prospects, and what the market has been willing to pay in the past.
      </div>

      <div class="max-w-[352px] py-3 px-2 grid grid-cols-2 gap-y-1 gap-x-[34px]">
        <div v-for="item in list" :key="item.id" class="flex items-center">
          <div class="h-4 w-4 mr-1">
            <img class="h-full w-full" :src="item.icon" :alt="`${item.title} icon`">
          </div>
          <div class="text-sm leading-4 text-grey underline">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ThreeCircleDropBtn from "@/components/universal/ThreeCircleDropBtn";
import GridBtn from "@/components/universal/GridBtn";
export default {
  components: {
    GridBtn,
    ThreeCircleDropBtn
  },
  data: () => ({
    list: [
      { id: '1', title: 'Sales & Earnings', icon: require('@/assets/img/pages/company/operations/bull-green.svg') },
      { id: '2', title: 'Margins', icon: require('@/assets/img/pages/company/operations/bear-red.svg') },
      { id: '3', title: 'Costs', icon: require('@/assets/img/pages/company/operations/bear-red.svg') },
      { id: '4', title: 'Earnigns per share', icon: require('@/assets/img/pages/company/operations/bull-green.svg') },
      { id: '5', title: 'Profits', icon: require('@/assets/img/pages/company/operations/bull-green.svg') },
      { id: '6', title: 'Outlook', icon: require('@/assets/img/pages/company/operations/bear-red.svg') },
    ]
  })
}
</script>
