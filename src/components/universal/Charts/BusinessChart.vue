<template>
  <v-chart ref="businessChart" class="h-[15rem]" :option="businessOptions"/>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";
export default {
  name: "BusinessChart",
  mixins: [ resizeChart ],
  props: {
    chartData: {
      type: Array,
      default: () => []
    },
    stepLineColor: {
      type: String,
      default: '#3B82F6'
    }
  },
  data() {
    const self = this
    return {
      businessOptions: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '-7%',
          right: '4%',
          bottom: '3%',
          top: '4%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          show: false,
          axisLine: {
            onZero: true,
          },
          data: self.chartData.map(el => el?.labelName)
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            name: 'Placeholder',
            type: 'bar',
            barWidth: 80,
            stack: 'Total',
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            emphasis: {
              itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
              }
            },
            data: self.chartData.map(el => el?.marginBottom)
          },
          {
            name: 'Life Cost',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'top',
              fontSize: 10,
              fontWeight: 'bold',
              overflow: 'truncate',
              ellipsis: '...',
              formatter: params => `${params.name} $${params.data.price}`
            },
            data: self.chartData.map(el => {
              return {
                value: el.value,
                price: el.price,
                itemStyle: {
                  color: el.color
                }
              }
            })
          },
          {
            name: 'Step Start',
            type: 'line',
            step: 'middle',
            connectNulls: true,
            symbol: 'none',
            endLabel: {
              show: true,
              color: self.stepLineColor,
              align: 'right',
              verticalAlign: 'bottom',
              distance: 80,
              formatter: params => {
                return `Markets ${params.data.price - 0.01}`
              }
            },
            lineStyle: {
              color: self?.stepLineColor,
              width: 1
            },
            data: self.chartData.map(el => {
              return {
                value: el?.value,
                price: el?.price
              }
            })
          },
        ]
      }
    }
  },
  mounted() {
    this.setRefElement('businessChart')
  }
}
</script>
