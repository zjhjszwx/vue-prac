<template>
  <div :id="id" class="bar-chart" :style="{width: width, height: height}"></div>
</template>

<script>
  import Vue from 'vue'
  import echarts from 'echarts'
  // 柱状图图表组件

  Vue.prototype.$echarts = echarts

  const axisStyle = {
    axisLine: { lineStyle: { color: '#bcbcbc' }},
    splitLine: {
      show: true,
      lineStyle: {
        color: '#f2f2f2',
        width: 1,
        type: 'solid'
      }
    }
  }

  export default {
    name: 'BarChartComponent',
    props: {
      x: {
        type: Object,
        default: function() {
          return {}
        }
      },
      y: {
        type: Object,
        default: function() {
          return {}
        }
      },
      tooltip: {
        type: Object,
        default: function() {
          return {}
        }
      },
      grid: {
        type: Object,
        default: function() {
          return {}
        }
      },
      legend: {
        type: Array,
        default: function() {
          return []
        }
      },
      title: {
        type: Object,
        default: function() {
          return {}
        }
      },
      legendStyle: {
        type: Object,
        default: function() {
          return {}
        }
      },
      series: {
        type: Array,
        default: function() {
          return []
        }
      },
      width: {
        type: String,
        default: function() {
          return '700px'
        }
      },
      height: {
        type: String,
        default: function() {
          return '100%'
        }
      },
      id: {
        type: String,
        default: function() {
          // 在页面中只有一张柱状图时，使用默认 id 即可
          return 'barChart'
        }
      }
    },
    data() {
      return {
        myChart: null
      }
    },
    watch: {
      series: {
        handler() {
          this.drawLine()
        },
        deep: true
      }
    },
    mounted() {
      this.drawLine()
      const me = this
      // 随着屏幕尺寸的变化，使
      window.addEventListener('resize', () => {
        me.myChart.resize()
      })
    },
    methods: {
      drawLine() {
        const myChart = this.$echarts.init(document.getElementById(this.id))
        this.myChart = myChart
        myChart.setOption({
          // 图表标题
          title: this.title,
          // 鼠标经过图表的半透明提示框
          tooltip: this.tooltip,
          legend: {
            ...this.legendStyle,
            data: this.legend
          },
          // x 和 y 轴的样式，以及各自方向的网格线设置
          xAxis: {
            ...this.x,
            ...axisStyle
          },
          yAxis: {
            ...this.y,
            ...axisStyle
          },
          series: this.series,
          // 设置图表在 canvas 中的位置
          grid: this.grid
        })
      }
    }
  }
</script>

<style>
  .bar-chart {
    display: inline-block;
  }
</style>
