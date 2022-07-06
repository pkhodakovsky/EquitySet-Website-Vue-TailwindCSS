<template>
  <v-chart ref="networkingChart" :option="networkingOptions" :init-options="{renderer: 'svg' }" @finished="onRendered" />
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
              color: ['rgba(236,236,244,0.5)'],
              shadowColor: 'rgba(0, 0, 0, 0.2)',
            }
          },
          indicator: [
            { name: 'Sentiment', max: 10000 },
            { name: 'Market Dynamics', max: 10000 },
            { name: 'Cash Mngmt', max: 10000 },
            { name: 'Dividends', max: 10000 },
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
  methods: {
    onRendered() {

    }
  },
  mounted() {
    this.resizeChart('networkingChart');

    const allText = this.$refs.networkingChart.$el.querySelectorAll('svg text');

    const deg = 360 / allText?.length;
    allText.forEach((text, index) => {
      const degrees = deg * index > 90 && deg * index < 270 ? -(deg * index) - 180 : -(deg*index)
      const attributeValue = `${text.getAttribute( 'transform')} rotate(${degrees})`;
      text.setAttribute('transform', attributeValue)
      text.setAttribute('text-anchor', 'middle');
    })
  }
}
</script>
