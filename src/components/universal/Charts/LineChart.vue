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
    showXAxis: {
      type: Boolean,
      default: true
    },
    yAxisLabel: {
      type: Array,
      default: () => []
    },
    customYAxisLabelFormatter: {
      type: String,
      default: ''
    },
    XlineColor: {
      type: String,
      default: '#5B6270'
    },
    XtickColor: {
      type: String,
      default: '#5B6270'
    },
    top: {
      type: [ String , Number],
      default: '2%'
    },
    bottom: {
      type: [ String , Number],
      default: '2%'
    },
    left: {
      type: [ String , Number],
      default: '0%'
    },
    right: {
      type: [ String , Number],
      default: '0%'
    },
    fewCharts: {
      type: Boolean,
      default: false
    },
    hasBackground: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const self = this
    return {
      lineOptions: {
        grid: {
          show: true,
          borderWidth: 0,
          left: self.left,
          right: self.right,
          bottom: self.bottom,
          top: self.top,
          containLabel: self.showYAxis,
          backgroundColor: self.hasBackground ? 'rgba(250,250,252,0.5)' : 'transparent',
        },
        tooltip: {
          padding: [1, 10],
          position: (cord, params, dom, rect, size) => [cord[0] - size.contentSize[0] / 2, -size.contentSize[1]],
          trigger: 'axis',
          axisPointer: {
            type: 'line' ,
            lineStyle: {
              color: self.lineColor,
              width: 2
            }
          },
          formatter: params => {
            const toolTipData = []
            params.forEach((item, i, arr) =>
              toolTipData.push(
                `<p class="flex justify-between items-center py-1 ${i !== arr.length - 1 && 'border-b border-border'}">
                  <span class="mr-2 text-primary text-[10px] leading-none font-medium">${item.seriesName}</span>
                  <span class="text-grey text-[10px] leading-none font-medium">${item.data}</span>
                </p>`
              ))
            let el = '<div>'
            toolTipData.forEach(item => el += item)
            el += '</div>'
            return self?.fewCharts
              ? el
              : `<p class="text-cornflower-blue font-bold"># of Employees <span class="text-grey">${params.at().value}</span></p>`
          }
        },
        xAxis: {
          show: true,
          boundaryGap: false,
          data: self?.yAxisLabel.length ? self.yAxisLabel :  self?.lineData[0]?.data?.map((el, index) => index),
          type: 'category',
          axisLine: {
            lineStyle: {
              color: self?.XlineColor
            }
          },
          splitLine: {
            show: true
          },
          axisTick: {
            lineStyle: {
              color: self?.XtickColor
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#5B6270'
          }
        },
        yAxis: {
          show: self?.showYAxis,
          type: 'value',
          position: 'right',
          max: 1000,
          axisLabel: {
            fontSize: 10,
            formatter: self?.customYAxisLabelFormatter
          }
        },
        series: self.lineData.map(el => {
          return {
            name: el.name,
            data: el.data,
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: el?.lineColor
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: el?.lineColor
                },
                {
                  offset: 1,
                  color: 'rgba(59, 130, 246, 0)'
                }
              ])
            }
          }
        })
      }
    }
  },
  mounted() {
    this.setRefElement('lineChart')
  }
}
</script>
