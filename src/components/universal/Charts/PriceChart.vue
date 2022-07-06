<template>
  <PriceChartWrapper class="relative" @toggle-checkbox="onToggleCheckbox" @stepLineData="setStepLineData">
    <img class="absolute z-50 left-6 top-24 lg:top-5" :src="require('@/assets/img/logos/logo-chart.svg')" alt="logo"/>
    <v-chart ref="priceChart" class="h-[15rem] md:h-[26.25rem]" :option="priceOptions"/>
  </PriceChartWrapper>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";
import * as echarts from 'echarts';
import PriceChartWrapper from "@/components/universal/Charts/PriceChartWrapper";

const BOTTOM_COLOR_GREEN = '#28A946'
const BOTTOM_COLOR_RED = '#FF342A'

const createBottomLine = (startX, endX, color, hasMarkArea) => {
  const markAreaOptions = {
    itemStyle: {
      color: color,
      opacity: 0.15
    },
    data: [
      [ { xAxis: startX }, { xAxis: endX } ]
    ]
  }
  return {
    type: 'line',
    symbol: 'none',
    color,
    data: [[startX, 0], [endX, 0]],
    markArea: hasMarkArea ? markAreaOptions : null
  }
}

const priceChartSeries = (self, hasMarkArea = false) => {
  return [
    {
      name: 'Price Data',
      type: 'line',
      smooth: true,
      symbol: 'none',
      symbolSize: 4,
      sampling: 'average',
      markLine: {
        symbol: ['none', 'none'],
        label: {show: false},
        lineStyle: {
          color: '#e1e1e1',
          type: 'solid',
        },
        data: []
      },
      lineStyle: {
        color: self?.lineColor
      },
      itemStyle: {
        color: 'rgba(40, 180, 62, 0.25)'
      },
      stack: 'a',
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(40, 180, 62, 0.25)'
          },
          {
            offset: 1,
            color: 'rgba(40, 180, 62, 0)'
          }
        ])
      },
      data: self?.stepLineData,
    },
    {
      name: 'Step Start',
      type: 'line',
      step: 'start',
      symbol: 'none',
      lineStyle: {
        color: self?.stepLineColor
      },
      data: self?.stepLineData?.map(item => 0)
    },
    // createBottomLine(0, 2, BOTTOM_COLOR_RED, hasMarkArea),
    // createBottomLine(2, 5, BOTTOM_COLOR_GREEN, hasMarkArea),
    // createBottomLine(5, 10, BOTTOM_COLOR_RED, hasMarkArea),
    // createBottomLine(10, 13, BOTTOM_COLOR_GREEN, hasMarkArea),
    // createBottomLine(13, 19, BOTTOM_COLOR_RED, hasMarkArea),
    // createBottomLine(19, 20, BOTTOM_COLOR_GREEN, hasMarkArea),
  ]
}

export default {
  name: "PriceChart",
  components: { PriceChartWrapper },
  mixins: [ resizeChart ],

  props: {
    lineData: {
      type: Array,
      default : () => []
    },
    lineColor: {
      type: String,
      default: '#28A946'
    },
    stepLineColor: {
      type: String,
      default: '#0770FF'
    },
  },
  data() {
    const self = this
    return {
        xAxisMarkerLineData: [],
        xAxisData: [],
        priceOptions: {
          renderMode: "svg",
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            show: true,
            left: '1%',
            right: '1%',
            bottom: '3%',
            top: '2%',
            containLabel: true,
            backgroundColor: 'rgba(250,250,252,0.5)',
          },
          xAxis: {
            type: 'category',
            data: [],
            boundaryGap: false,
            axisLabel: {
              formatter: params => {
                return new Date(params).toLocaleDateString('en-us', { month:"short", day:"numeric"})
              },
              fontSize: 10,
              align: 'center'
            }
          },
          yAxis: {
            // max: 120,
            type: 'value',
            position: 'right',
            axisLabel: {
              fontSize: 10
            }
          },
          series: priceChartSeries(self)
        },
        stepLineData: [],
    }
  },
  methods: {
    onToggleCheckbox(value) {
      this.priceOptions.series = priceChartSeries(this, value)
    },
    generateXAxisMarker () {
      const arrayLength = this.priceOptions.series[0]?.data?.length
      if(arrayLength) {
        for (let i = 0; i <= arrayLength; i++) {
          this.xAxisMarkerLineData.push({
            xAxis: i
          })
        }
        const [firstSeriesElement] = this.priceOptions.series
        firstSeriesElement.markLine.data = this.xAxisMarkerLineData
      }
    },
    generateXAxisData (dates) {
      const arrayLength = this.priceOptions.series[0]?.data?.length
      const dateOptions = { month: 'long', day: 'numeric' }

      if (dates && dates.length) {
        this.xAxisData = []
        dates.forEach(item => {
          const date = new Date(item).toLocaleDateString('en-US', dateOptions)
          this.xAxisData.push(date)
        })

        this.priceOptions.xAxis.data = this.xAxisData
      } else if (arrayLength) {
        const currentMonth = new Date().getMonth() + 1

        for (let i = 1; i <= arrayLength; i++) {
          const date = new Date(`2022-${currentMonth}-${i}`).toLocaleDateString("en-US", dateOptions)
          this.xAxisData.push(date)
        }

        this.priceOptions.xAxis.data = this.xAxisData
      }
    },
    setStepLineData(data) {
      this.stepLineData = data.map(item => item.open)
      this.priceOptions.series = priceChartSeries(this)
      this.generateXAxisData(data.map(item => item.date))
    }
  },
  mounted() {
    this.setRefElement('priceChart')
    this.generateXAxisMarker()
    this.generateXAxisData()
  },
}
</script>
