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
    }
  },
  data() {
    const self = this
    return {
      lineOptions: {
        grid: {
          left: '0',
          right: '0',
          bottom: '3%',
          containLabel: true,
        },
        tooltip: {
          position: cord => [cord[0] - 70, 0],
          trigger: 'axis',
          axisPointer: {
            type: 'line' ,
            lineStyle: {
              color: '#341A9F'
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
          type: 'value',
          position: 'right',
          axisLabel: {
            fontSize: 10
          }
        },
        series: [
          {
            data: [100, 200, 50, 600, 400, 300, 500, 450, 500, 700, 750, 600, 800],
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: self?.lineColor
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(59, 130, 246, 0.63)'
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
