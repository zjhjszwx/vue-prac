<template lang="">
  <div>
    <tabs-comp></tabs-comp>
  </div>
</template>
<script>
import BarChartComponent from './bar';
import TabsComp from './tabs'
export default {
  name: 'LargeScreenZongHeRight',
  components: {
    BarChartComponent,
    TabsComp
  },
  data() {
    return {
      firstBarChart: {
        id: 'firstBarChart',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ],
        legend: ['收益水费/万元', '无收益水费/万元'],
        title: { text: '水费营收情况' },
        height: '280px',
        width: '60%'
      }
    }
  }
}
</script>
<style lang=""></style>
