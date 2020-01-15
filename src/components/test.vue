<template>
  <div>
    <Table :columns="pictureColumn" :data="pictureData"></Table>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'test',
  data() {
    return {
      pictureData: [
        {
          index: 0,
          feature: [0.49, 0, 0, 0.43, 1.55, 0, 1.72, 0, 0.90, 0, 0.06, 0.54, 0, 0, 0, 0],
          predict: 'DK961'},
        {
          index: 1,
          feature: [1.34, 0, 0, 0, 0, 0, 0, 3.67, 0, 0, 0, 0.22, 2.04, 2.59, 1],
          predict: 'Langdon'}
      ],
      pictureColumn: [{
        title: 'No.',
        type: 'index',
        key: 'index',
        width: 200,
        align: 'center'
      }, {
        title: 'Feature map',
        key: 'feature',
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h('canvas', {
              style: {
                height: '150px',
                width: '300px',
                margin: '0',
                padding: '0'
              },
              on: {
              },
              attrs: {
                id: params.index
              }
            })
          ])
        }
      }, {
        title: 'Predicted label',
        key: 'predict'
      }]
    }
  },
  mounted() {
    this.pictureData.forEach((value, index) => {
      this.paintChart(index, value)
    })
  },
  methods: {
    paintChart(i, params) {
      let lineChart = echarts.init(document.getElementById(params.index))
      let xAxisData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
      let option = {
        grid: {
          top: '4%',
          left: '1%',
          right: '1%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: xAxisData
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          type: 'line',
          data: params.feature
        }]
      }
      lineChart.setOption(option)
    }
  }
}
</script>