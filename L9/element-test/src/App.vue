<template>
  <div id="app" class="flex flex-col">
    <Header></Header>
    <div class="flex-1 flex">
      <Left></Left>
      <div>
        <div ref="main" style="width:500px;height:300px">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Left from './components/Left'

import * as echarts from 'echarts';

export default {
  components: {
    Header,
    Left
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.main);
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [55, 20, 36, 10, 10, 20]
          },
          {
            name: '金额',
            type: 'bar',
            data: [100, 120, 336, 510, 180, 220]
          }
        ]
    });
  },
}
</script>

<style lang="scss">
#app{
  height: 100vh;
}
</style>
