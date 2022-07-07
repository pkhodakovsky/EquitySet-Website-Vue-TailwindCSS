<template>
  <v-chart ref="periodBarChart" :option="periodBarChart"/>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";
export default {
  name: "periodBarChart",
  mixins: [ resizeChart ],
  props: {
    barColor: {
      type: String,
      default: ''
    },
    barData: {
      type: [Object, Array],
      default: () => []
    },
    alignWithAxis: {
      type: Boolean,
      default: false
    },
    showYAxis: {
      type: Boolean,
      default: true
    },
    labelYFormatter: {
      type: String,
      default: ''
    },
    hasMarkArea: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const self = this
    return {
      periodBarChart: {
        grid: {
          containLabel: true,
          left: '0%',
          right: '1%',
          bottom: '1%',
        },
        xAxis: {
          type: 'category',
          data: self?.barData?.length ? self?.barData[0]?.data.map(el => el.yAxisLabel) : ['200'],
          axisTick: {
            alignWithLabel: self?.alignWithAxis
          },
        },
        yAxis: {
          type: 'value',
          show: self?.showYAxis,
          axisLabel: {
            fontSize: 10,
            interval: 0,
            color: '#5B6270',
            formatter: self?.labelYFormatter,
          },
        },
        series: self?.barData.map(el => {
          return {
            type: 'bar',
            data: el.data,
            itemStyle: {
              color: self.barColor
            },
            label: {
              type: 'category',
              show: true,
              position: 'outside',
              formatter: params => {
                return `${params.data.pricePercentage} `
              }
            },
            markLine: {
              data: [
                {
                yAxis: 50,
                  label: {
                    show: true,
                    color: '#FAAD14',
                    position: 'insideEndTop',
                    formatter: params => {
                      return `Industry $0.16`
                    },
                    fontSize: 10
                  },
                  lineStyle: {
                    type: 'solid',
                    width: 2,
                    color: '#FAAD14'
                  }
                },
                {
                  yAxis: 70,
                  label: {
                    show: true,
                    color: 'black',
                    position: 'middle',
                    formatter: '$0.16$',
                    fontSize: 10,
                  },
                  lineStyle: {
                    type: 'solid',
                    width: 1,
                    color: '#A5B4FC'
                  },
                }
              ],
              symbol: ['none']
            },
            markArea: self?.hasMarkArea
              ? {
                data: [
                  [{
                    x:0,
                    yAxis: 0,
                    itemStyle: {
                      color: '#EDFCF2'
                    }
                  }, {
                    x: 800,
                    yAxis: 30,
                    itemStyle: {
                      color: '#EDFCF2'
                    }
                  }],
                  [{
                    x:0,
                    yAxis: 90,
                    itemStyle: {
                      color: 'rgba(242, 83, 69, 0.12)'
                    }
                  }, {
                    x: 800,
                    yAxis: 120,
                    itemStyle: {
                      color: 'rgba(242, 83, 69, 0.12)'
                    }
                  }]
                ],
                silent: true
              } : ''
          }
        })
      }
    }
  },
  mounted() {
    this.setRefElement('periodBarChart')
  }
}
</script>
