<template>
  <div class="relative">
    <v-chart ref="lineChart" :option="options"/>

    <div v-if="centerText" class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <span class="font-medium text-sm leading-none">{{ centerText }}</span>
    </div>
  </div>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";

export default {
  name: "PieChart",
  mixins: [ resizeChart ],
  props: {
    centerText: {
      type: String,
      default: null
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const self = this
    return {
      options: {
        series: self.data
      }
    }
  },
  watch: {
    data(val) {
      this.options.series = val
    }
  },
  mounted() {
    this.setRefElement('lineChart')
  }
}
</script>
