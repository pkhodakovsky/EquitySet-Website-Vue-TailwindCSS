<template>
  <div class="flex flex-wrap lg:flex-row items-center justify-between pt-7 lg:pt-[57px]">
    <div
        v-for="(item, j) in data"
        :key="item.id"
        :class="j !== data.length - 1 && 'lg:pr-[50px]'"
    >
      <PieChart :data="item.series" class="h-20 w-20 mb-5" />

      <div v-for="(chart, k) in item.series" :key="k" class="text-center">
        <div class="text-[10px] leading-3 font-medium text-footer-nav mb-3.5">{{ chart.name }}</div>
        <div
            v-for="(val, i) in chart.data"
            :key="i"
            :style="`color: ${val.itemStyle.color}`"
            class="font-semibold text-xs leading-3 mb-2.5"
        >
          ${{ val.value }}M
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "@/components/universal/Charts/PieChart";

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    PieChart
  }
}
</script>
