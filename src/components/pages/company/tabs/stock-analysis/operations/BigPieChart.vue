<template>
  <div class="lg:w-[376px]">
    <PieChart
      v-if="chartData"
      class="h-[180px]"
      :data="chartData.series"
      :centerText="chart.centerText"
    />

    <div class="flex mt-[55px] max-w-[90vw] overflow-auto">
      <div class="flex flex-col justify-end">
        <div
          v-for="(item, i) in chart.series[0].data"
          :key="`head-${i}`"
          class="py-2.5 pl-3 pr-1 flex items-center"
        >
          <SwitchCheckBox
            :active="checkActive(chart, i)"
            :height="16"
            class="mr-2"
            @changeActive="changeActive(chart, i)"
          />

          <div
            class="text-[10px] leading-4 font-medium"
            :style="`color: ${item.itemStyle.color}`"
          >
            {{ item.name }}
          </div>
        </div>
      </div>

      <div v-for="(item, i) in chart.series" :key="i">
        <div
          class="py-3 px-6 bg-icon-bg text-center"
        >
          <span class="text-xs leading-4 font-medium text-grey tracking-[0.05em] uppercase whitespace-nowrap">
            {{ item.name }}
          </span>
        </div>

        <div
          v-for="(val, j) in item.data"
          :key="`${i}${j}`"
          class="text-center py-2.5 text-sm leading-none font-semibold"
          :style="`color: ${val.itemStyle.color}`"
        >
          {{ val.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "@/components/universal/Charts/PieChart";
import SwitchCheckBox from "@/components/universal/SwitchCheckBox";

export default {
  props: {
    chart: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    PieChart,
    SwitchCheckBox
  },
  data: () => ({
    chartData: null,
  }),
  methods: {
    checkActive(data, i) {
      return data.series.every(item => item.data[i].show)
    },
    changeActive(data, i) {
      data.series = data.series.map(item =>
          ({ ...item, data: item.data.map((el, j) => ({ ...el, show: j === i ? !el.show : el.show })) }))
      this.chartData.series = { ...this.chart }.series.map(item =>
          ({ ...item, data: item.data.filter(el => el.show)}))
      if (this.chartData.series.every(item => item.data.length === 1)) {
        this.chartData.series = this.chartData.series.map(item => ({ ...item, label: { show: false }}))
      }
    },
    chartInit() {
      this.chartData = { ...this.chart }
    }
  },
  mounted() {
    this.chartInit()
  }
}
</script>
