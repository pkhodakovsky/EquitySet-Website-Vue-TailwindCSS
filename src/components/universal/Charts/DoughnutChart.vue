<template>
  <v-chart ref="doughnutChart" class="h-[14rem]" :option="chartOptions"/>
</template>

<script>
import resizeChart from "@/mixins/resizeChart";
export default {
  name: "DoughnutChart",
  mixins: [ resizeChart ],
  props: {
    color: {
      type: String,
      default: ''
    },
    chartData: {
      type: [Array, Object, String, Number],
      default: () => {}
    }
  },
  data() {
    const self = this
    return {
      chartOptions: {
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            showEmptyCircle: true,
            emptyCircleStyle: {
              color: '#ccc'
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: self.chartData,
                itemStyle: {
                  color: self.color,
                  shadowColor: "rgb(187,187,187)",
                  shadowOffsetY: 2.5,
                  shadowBlur: 10.5,
                }
              },
              {
                value: 60,
                itemStyle: {
                  color: '#FAFAFC',
                  shadowColor: "rgba(118, 6, 6, 0.1)",
                  shadowOffsetY: 10,
                  shadowBlur: 15,
                }
              },
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.setRefElement('doughnutChart')
  }
}
</script>
