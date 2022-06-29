<template>
  <div>
    <div class="flex lg:items-center justify-between mb-[-3.5rem] lg:mb-0">
      <div class="mb-6 flex flex-col lg:flex-row lg:items-center">
        <SwitchTimePeriod class="mb-4 lg:mb-0" />

        <div class="text-xs leading-4 flex items-center">
          <div class="ml-2">
            <span class="text-secondary-text">Open:</span>
            <span class="ml-[3px] text-footer-nav">$292.92</span>
          </div>

          <div class="ml-3">
            <span class="text-secondary-text">Close:</span>
            <span class="ml-[3px] text-footer-nav">$292.92</span>
          </div>

          <div class="ml-3">
            <span class="text-secondary-text">Diff.:</span>
            <span class="ml-[3px] text-japanese-laurel">%2.10</span>
          </div>
        </div>
      </div>

      <div class="shrink-0 h-[30px] lg:h-auto flex items-center">
        <ThreeCircleDropBtn />
      </div>
    </div>

    <v-chart ref="priceChart" class="chart h-[15rem] md:h-[26.25rem]" :option="priceOptions"/>

    <div class="mt-3 flex items-center">
      <button class="flex items-center py-1 px-1.5 border border-athens-gray rounded-[2px]">
        <span class="block h-2 w-2 rounded-full mr-1.5 mb-0 bg-dark-blue" />
        <span class="block text-dark-blue mb-0 text-[10px] leading-3">Fair Value</span>
      </button>

      <div class="h-4 w-[1px] bg-profile-icon mx-2"></div>

      <div class="flex items-center">
        <div class="text-[10px] leading-4 text-grey mr-2">Rating Changes</div>

        <SwitchCheckBox />
      </div>
    </div>
  </div>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";
import * as echarts from 'echarts';
import ThreeCircleDropBtn from "@/components/universal/ThreeCircleDropBtn";
import SwitchTimePeriod from "@/components/universal/SwitchTimePeriod";
import SwitchCheckBox from "@/components/universal/SwitchCheckBox";
export default {
  name: "PriceChart",
  mixins: [ resizeChart ],
  components: {SwitchCheckBox, SwitchTimePeriod, ThreeCircleDropBtn},
  props: {
    lineData: {
      type: Array,
      default : () => []
    },
    lineColor: {
      type: String,
      default: '#28A946'
    },
    stepLineData: {
      type: Array,
      default : () => []
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
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          backgroundColor: 'rgba(250,250,252,0.5)',
          xAxis: {
            type: 'category',
            data: [],
            boundaryGap: false,
            axisLabel: {
              formatter: '{value}',
              fontSize: 10
            }
          },
          yAxis: {
            max: 300,
            type: 'value',
            position: 'right',
            axisLabel: {
              fontSize: 10
            }
          },
          series: [
            {
              name: 'Fake Data',
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
                color: self?.stepLineColor
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
              data: [70, 90, 70, 97, 35, 145, 120, 50, 90, 60, 57, 55, 125, 110, 70, 60, 70, 77, 65, 105, 110],
            },
            {
              name: 'Step Start',
              type: 'line',
              step: 'start',
              symbol: 'none',
              lineStyle: {
                color: self?.stepLineColor
              },
              data: [80, 80, 50, 67, 45, 115, 100, 60, 80, 50, 67, 45, 115, 100, 60, 80, 50, 67, 45, 115, 100]
            }
          ]
        }
    }
  },
  methods: {
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
    generateXAxisData () {
      const arrayLength = this.priceOptions.series[0]?.data?.length
      if(arrayLength) {
        const currentMonth = new Date().getMonth() + 1
        const dateOptions = { month: 'long', day: 'numeric' }

        for (let i = 1; i <= arrayLength; i++) {
          const date = new Date(`2022-${currentMonth}-${i}`).toLocaleDateString("en-US", dateOptions)
          this.xAxisData.push(date)
        }

        this.priceOptions.xAxis.data = this.xAxisData
      }
    }
  },
  mounted() {
    this.setRefElement('priceChart')
    this.generateXAxisMarker()
    this.generateXAxisData()
  }
}
</script>
