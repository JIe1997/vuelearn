<template>
  <div class="about">
    <div ref="main" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let oData = [
      {
        name: "衬衫",
        value: 55,
        price: 100
      },
      {
        name: "羊毛衫",
        value: 20,
        price: 256
      },
      {
        name: "雪纺衫",
        value: 36,
        price: 120
      },
      {
        name: "裤子",
        value: 10,
        price: 180
      },
      {
        name: "高跟鞋",
        value: 20,
        price: 220
      }
    ]

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.main);
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
        left: "center",
        subtext: "Jie"
      },
      tooltip: {},
      xAxis: {
        data: oData.map(r => r.name)
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: oData.map(r => r.value)
        },
        {
          name: "金额",
          type: "bar",
          data: oData.map(r => r.price)
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
</style>