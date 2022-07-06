<template>
  <div>
    <v-chart ref="lineChart" :option="lineOptions"/>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import resizeChart from "@/mixins/resizeChart";

export default {
  name: "LineChart",
  mixins: [ resizeChart ],
  props: {
    lineColor: {
      type: String,
      default: '#3B82F6'
    },
    lineData: {
      type: Array,
      default: () => []
    },
    showYAxis: {
      type: Boolean,
      default: true
    },
    top: {
      type: [ String , Number],
      default: '2%'
    },
    bottom: {
      type: [ String , Number],
      default: '0%'
    }
  },
  data() {
    const self = this
    return {
      lineOptions: {
        grid: {
          left: '0',
          right: '0',
          bottom: self.bottom,
          top: self.top,
          containLabel: self.showYAxis,
        },
        tooltip: {
          position: cord => [cord[0] - 70, 0],
          trigger: 'axis',
          axisPointer: {
            type: 'line' ,
            lineStyle: {
              color: self.lineColor
            }
          },
          formatter: params => {
            return `<p class="text-cornflower-blue font-bold"># of Employees <span class="text-grey">${params.at().value}</span></p>`
          }
        },
        xAxis: {
          show: false,
          boundaryGap: false,
          type: 'category',
          axisLabel: {
            fontSize: 10
          }
        },
        yAxis: {
          show: self.showYAxis,
          type: 'value',
          position: 'right',
          axisLabel: {
            fontSize: 10
          }
        },
        series: [
          {
            data: self.lineData,
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: self.lineColor
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: self.lineColor
                },
                {
                  offset: 1,
                  color: 'rgba(59, 130, 246, 0)'
                }
              ])
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.setRefElement('lineChart')
  }
}
</script>
