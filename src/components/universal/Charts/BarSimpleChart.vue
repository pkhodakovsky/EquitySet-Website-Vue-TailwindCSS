<template>
  <div>
    <v-chart ref="barChart" :option="barOptions"></v-chart>
  </div>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";
import resizeWindow from "@/mixins/resizeWindow";
export default {
  name: "BarSimpleChart",
  mixins: [ resizeChart, resizeWindow ],
  props: {
    color: {
      type: String,
      default: ''
    },
    rightMargin: {
      type: [String, Number],
      default: '0'
    },
    showYAxis: {
      type: Boolean,
      default: true
    },
    barData: {
      type: Array,
      default: () => []
    },
    barItemWidth: {
      type: [String, Number],
      default: '20'
    },
    maxYaxis: {
      type: [String, Number],
      default: ''
    },
    borderRadius: {
      type: [String, Number, Array],
      default: () => []
    }
  },
  data() {
    const self = this
    return {
      barOptions: {
        grid: {
          left: '0%',
          right: self?.rightMargin,
          bottom: '2%',
          top: '4%',
          containLabel: true,
        },
        xAxis: {
          axisLabel: {
            fontSize: 10,
            interval: 0,
            formatter: '{value}'
          },
          type: 'category',
          data: self?.barData[0]?.xAxisLabel
            ? self?.barData?.map(el => el?.xAxisLabel)
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          show: self?.showYAxis,
          type: 'value',
          position: 'right',
          max: self?.maxYaxis || null ,
        },
        series: [
          {
            barWidth: self?.barItemWidth,
            itemStyle: {
              borderRadius: self?.borderRadius,
              borderWidth: 1,
              borderType: 'solid'
            },
            data: self?.barData.map(el => {
              return {
                value: el?.value || el,
                itemStyle: {
                  color: el?.color || '#6A38EB'
                }
              }
            }),
            type: 'bar'
          }
        ]
      }
    }
  },

  watch: {
    windowSize: {
      handler(val) {
        if(val < 996) {
          this.barOptions.grid.right = '0'
        } else this.barOptions.grid.right = this.rightMargin
      },
      deep: true
    }
  },
  mounted() {
    this.setRefElement('barChart')
  }
}
</script>
