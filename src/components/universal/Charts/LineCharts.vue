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
    items: {
      type: Array,
      default: () => []
    },
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
          left: '2%',
          right: '2%',
          bottom: self.bottom,
          top: self.top,
          containLabel: self.showYAxis,
        },
        tooltip: {
          position: cord => [cord[0] - 70, -50],
          trigger: 'axis',
          axisPointer: {
            type: 'line' ,
            lineStyle: {
              color: [...self.items].pop()?.lineColor,
              width: 2
            }
          },
          formatter: params => {
            console.log(params)
            return ''
          }
        },
        xAxis: {
          show: true,
          data: ['2016', '2017', '2018', '2019', '2020', '2021'],
          boundaryGap: false,
          type: 'category',
          axisLabel: {
            fontSize: 10,
          },
          axisLine: {
            lineStyle: {
              opacity: 0,
            }
          },
          axisTick: {
            // show: false,
            lineStyle: {
              color: '#DBDDE4'
            },
          },
          splitLine: {
            show: true,
          }
        },
        yAxis: {
          max: 1000,
          show: true,
          type: 'value',
          position: 'right',
          axisLabel: {
            show: false,
            fontSize: 10
          }
        },
        series: self.items.map(item => ({
          data: item.lineData,
          type: 'line',
          symbol: 'none',
          lineStyle: {
            color: item.lineColor
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: item.lineColor
              },
              {
                offset: 1,
                color: 'rgba(59, 130, 246, 0)'
              }
            ])
          }
        })),
      }
    }
  },
  mounted() {
    this.setRefElement('lineChart')
  }
}
</script>
