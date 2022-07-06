<template>
  <div class="py-3 px-2 flex flex-col lg:flex-row">
    <div
      v-for="item in items"
      :key="item.id"
      class="border border-grey-bg-footer px-2 pt-2 pb-4 max-w-[294px] mb-5 lg:mb-0 lg:mr-[60px]"
    >
      <h4 class="text-lg leading-8 font-medium text-grey mb-4">{{ item.title }}</h4>

      <div class="h-[230px] w-[200px] mx-auto">
        <NetworkingChart
          :area-color="item.chartOptions.areaColor"
          :data-value="item.chartOptions.dataValue"
          :line-color="item.chartOptions.lineColor"
        />
      </div>

      <div class="h-0.5 bg-border mt-1 mb-2.5"></div>

      <div class="flex items-center text-xs leading-4 text-river-bed mb-0.5">
        <div class="font-bold ">{{ item.topData.count }}</div>
        <span class="font-medium mx-[3px]"> - </span>
        <div class="font-light">{{ item.topData.title }}</div>
      </div>

      <div class="flex items-center">
        <span class="text-xs leading-4 text-secondary-text mr-[3px]">{{ item.list.title }}:</span>
        <div
          v-for="(el, i) in item.list.list"
          :key="i"
          class="flex items-center mr-2"
        >
          <img :src="el.icon" :alt="`${el.title} icon`" class="mr-[3px]">

          <span class="text-xs leading-4 text-footer-nav">{{ el.title }}</span>
        </div>
      </div>

      <p class="text-sm leading-5 text-grey my-3.5">{{ item.description }}</p>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button
            class="border border-grey-bg-footer rounded-[4px] py-[7px] px-2 text-xs leading-4 font-medium text-tabs mr-3"
          >
            Show
          </button>
          <ButtonLink :link="item.link.url" :text-content="item.link.title" />
        </div>

        <div class="flex items-center">
          <div class="mr-2 cursor-pointer">
            <img :src="require('@/assets/img/pages/company/save-icon.svg')" alt="Save icon" />
          </div>

          <div class="cursor-pointer">
            <img :src="require('@/assets/img/pages/company/share-icon.svg')" alt="Share icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NetworkingChart from "@/components/universal/Charts/NetworkingChart";
  import ButtonLink from "@/components/universal/ButtonLink";
  export default {
    components: {NetworkingChart, ButtonLink},
    props: {
      items: { type: Array, default: () => [] }
    }
  }
</script>
