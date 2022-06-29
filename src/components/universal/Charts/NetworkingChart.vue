<template>
  <v-chart ref="networkingChart" :option="networkingOptions"/>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";
export default {
  name: "NetworkingChart",
  mixins: [ resizeChart ],
  props: {
    areaColor: {
      type: String,
      default: '#5B6270'
    },
    lineColor: {
      type: String,
      default: ''
    },
    dataValue: {
      type: Array,
      default: () => [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000]
    }
  },
  data() {
    const self = this
    return {
      networkingOptions: {
        radar: {
          axisName: {
            color: "#1B2230",
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: '#DBDDE4'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#DBDDE4'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['#ECECF4'],
              shadowColor: 'rgba(0, 0, 0, 0.2)',
            }
          },
          indicator: [
            { name: 'Sentiment', max: 10000 },
            { name: 'Market Dynamics', max: 10000 },
            { name: 'Cash Mngmt', max: 10000 },
            { name: 'Dividends', max: 10000 },
            { name: 'Development', max: 10000 },
            { name: 'Technicals', max: 10000 },
            { name: 'Structure', max: 10000 },
            { name: 'Valuation', max: 10000 },
            { name: 'Operations', max: 10000 },
          ]
        },
        series: [
          {
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            itemStyle: {
              color: self?.lineColor
            },
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: self?.dataValue,
                name: 'Allocated Budget',
                areaStyle: {
                  color: self?.areaColor,
                  opacity: '0.12'
                }
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.resizeChart('networkingChart')
  }
}
</script>
