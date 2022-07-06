<template>
  <v-chart ref="horizontalChart" class="h-[14rem]" :option="barOptions"/>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";

const average = {
    data: [{
      type: "average"
    }],
    lineStyle: {
      type: 'solid'
    },
    label: {
      show: true,
      position: 'end',
      formatter: '  ${c} \n Average'
    },
    symbol: "none"
  }
export default {
  name: "BarHorizontalChart",
  mixins: [ resizeChart ],
  props: {
    backgroundColor: {
      type: String,
      default: '#ECECF4'
    },
    itemColor: {
      type: String,
      default: '#5B6270'
    },
    barWidth: {
      type: [String, Number],
      default: 'auto'
    },
    dataChart: {
      type: Array,
      default: () => []
    },
    dataYAxis: {
      type: Array,
      default: () => []
    },
    showYLabels: {
      type: Boolean,
      default: true
    },
    showBarLabels: {
      type: Boolean,
      default: false
    },
    isGradient: {
      type: Boolean,
      default: false
    },
    haveAverage: {
      type: Boolean,
      default: false
    },
    markLineOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    const self = this
    return {
      barOptions: {
        grid: {
          left: self.showYLabels ? '0%' : '-20%',
          right: '2%',
          bottom: '2%',
          top: '20%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          },
          formatter: params => {
            return `<p>$${params.value}</p>`
          }
        },
        label: {
          show: self.showBarLabels,
          position: 'right',
          formatter: '{b}',
          fontStyle: 10
        },
        legend: {
          show: false
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          show: false,
          max: 30000
        },
        yAxis: {
          type: 'category',
          data: self.dataYAxis,
          show: self.showYLabels,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            fontSize: 10
          }
        },
        series: [
          {
            barWidth: self.barWidth,
            showBackground: true,
            backgroundStyle: {
              color: self.isGradient ? {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(0, 255, 0, 0.05)' // color at 0%
                }, {
                  offset: 1, color: 'rgba(255, 0, 0, 0.05)' // color at 100%
                }],
                global: false // default is false
              } : self.backgroundColor,
              borderRadius: [0, 3, 3 ,0]
            },
            itemStyle: {
              color: self.itemColor,
              borderRadius: [0, 3, 3, 0],
              borderWidth: 1,
              borderType: 'solid'
            },
            type: 'bar',
            data: self.dataChart,
            markLine: self.haveAverage ? average : self.markLineOptions
          }
        ]
      }
    }
  },
  mounted() {
    this.setRefElement('horizontalChart')
  }
}
</script>
