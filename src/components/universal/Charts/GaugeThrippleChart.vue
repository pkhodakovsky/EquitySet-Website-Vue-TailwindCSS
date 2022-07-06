<template>
  <v-chart ref="gaugeChart" class="h-[14rem]" :option="gaugeThrippleOptions"/>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";
export default {
  name: "GaugeTrippleChart",
  mixins: [ resizeChart ],
  props: {
    gaugeData: {
      type: Object,
      default: () => {}
    },
    colorSection: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    const self = this
    return {
      gaugeThrippleOptions: {
        series: [
          {
            type: 'gauge',
            radius: '100%',
            center: ["50%", "70%"],
            startAngle: 200,
            endAngle: -20,
            anchor: {
              show: true,
              showAbove: true,
              size: 15,
              itemStyle: {
                color: '#DBDDE4'
              }
            },
            pointer: {
              width: 3,
              length: '95%',
              offsetCenter: [0, 0]
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: '#8C94AB',
              },
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false,
              distance: 0
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [0.3, (self?.colorSection?.first || '#DBDDE4') ],
                  [0.7, (self?.colorSection?.second || '#DBDDE4')],
                  [1, (self?.colorSection?.third || '#DBDDE4')]
                ],
                shadowColor: "rgb(187,187,187)",
                shadowOffsetY: 2.5,
                shadowBlur: 10.5,
                width: 15
              },
            },
            data: [
              {
                value: self?.gaugeData?.first,
                itemStyle: {
                  color: '#6A38EB'
                }
              },
              {
                value: self?.gaugeData?.second,
                itemStyle: {
                  color: '#6A38EB'
                }
              },
              {
                value: self?.gaugeData?.third,
                itemStyle: {
                  color: '#6A38EB'
                }
              }
            ],
            detail: {
              show: false
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.setRefElement('gaugeChart')
  }
}
</script>
