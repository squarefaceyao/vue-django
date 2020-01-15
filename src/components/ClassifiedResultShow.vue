<template>
  <div class="the-echart">
    <div id="the-echart" ref="theEchart">
    </div>
    <Button type="primary" @click="clearMarkPoint">ClearMarkPoint</Button>
    <Button type="primary" @click="classify">Extract Features and Classify</Button>
    <br>
    <br>
    <Table :columns="columns" :data="predictRes" ref="table" size="large"></Table>
    <br>
    <Button type="primary" size="large" @click="exportData()"><Icon type="ios-download-outline"></Icon> Export data</Button>
    <Modal :title="modalTitle[isStartPoint]" v-model="modal" @on-cancel="modal=false" @on-ok="addMark(params)">
      <Input v-model="comment"/>
    </Modal>
  </div>
</template>

<script>
import axios from '../api/axios.js'
import echarts from 'echarts'
export default {
  name: 'classifiedResultShow',
  data() {
    return {
      modal: false,
      isStartPoint: 0,
      modalTitle: ['Add the first startPoint.', 'Add the second startPoint.', 'Add the third startPoint.'],
      comment: '',
      chart: null,
      startPoint: {
        value: null,
        dataIndex: null,
        seriesIndex: null,
        name: null
      },
      startPoint2: {
        value: null,
        dataIndex: null,
        seriesIndex: null,
        name: null
      },
      startPoint3: {
        value: null,
        dataIndex: null,
        seriesIndex: null,
        name: null
      },
      waveArray: [],
      // clssified result
      results: [],
      columns: [{
        title: 'No.',
        type: 'index',
        key: 'index',
        align: 'center',
        width: 200
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
        key: 'predict',
        align: 'center'
      }]
    }
  },
  computed: {
    optionsData: function() {
      return this.$store.getters.getData(1)
    },
    wave() {
      return {
        start: this.startPoint,
        start2: this.startPoint2,
        start3: this.startPoint3
      }
    },
    waveArrayData() {
      return this.waveArray.map(wave => {
        let seriesIndex = wave.start.seriesIndex
        let startIndex = wave.start.dataIndex
        let endIndex = startIndex + 196
        let waveA = this.optionsData.data[seriesIndex].slice(startIndex, endIndex)
        startIndex = wave.start2.dataIndex
        endIndex = startIndex + 196
        let waveB = this.optionsData.data[seriesIndex].slice(startIndex, endIndex)
        startIndex = wave.start3.dataIndex
        endIndex = startIndex + 196
        let waveC = this.optionsData.data[seriesIndex].slice(startIndex, endIndex)
        let waveABC = waveA.concat(waveB).concat(waveC)
        for (let i = 0; i < waveABC.length; i++) {
          waveABC[i] = waveABC[i] - wave.start.value
        }
        return waveABC
      })
    },
    // classified result
    predictRes() {
      const res = []
      if (this.results.length !== 0) {
        for (let i = 0; i < this.results[0].length; i++) {
          res.push({
            index: i.toString(),
            predict: this.results[0][i],
            feature: this.results[1][i]
          })
        }
      }
      return res
    }
  },
  watch: {
    optionsData: {
      handler: function(val, oldVal) {
        this.updateChart(val)
      },
      deep: true
    }
  },
  updated() {
    this.predictRes.forEach((value, index) => {
      this.paintChart(index, value)
    })
  },
  mounted() {
    this.chart = echarts.init(this.$refs.theEchart)
    this.chart.setOption({
      title: {text: 'Please select a file.'},
      tooltip: {},
      xAxis: {
        data: []
      },
      yAxis: {},
      series: []
    })
    let _this = this
    this.chart.on('click', function(params) {
      _this.modal = true
      _this.params = params
    })
  },

  methods: {
    addMark(params) {
      if (this.isStartPoint === 0) {
        this.startPoint = {
          value: params.value,
          dataIndex: params.dataIndex,
          name: params.name,
          seriesIndex: params.seriesIndex
        }
        this.isStartPoint = 1
      } else if (this.isStartPoint === 1 && this.validSecondPoint(params)) {
        this.startPoint2 = {
          value: params.value,
          dataIndex: params.dataIndex,
          name: params.name,
          seriesIndex: params.seriesIndex
        }
        this.isStartPoint = 2
      } else if (this.isStartPoint === 2 && this.validEndPoint(params)) {
        this.startPoint3 = {
          value: params.value,
          dataIndex: params.dataIndex,
          name: params.name,
          seriesIndex: params.seriesIndex
        }
        this.isStartPoint = 0
        this.waveArray.push(this.wave)
      } else {
        return false
      }
      let mySeries = this.chart.getOption().series
      mySeries[params.seriesIndex].markPoint.data.push({
        name: this.comment,
        coord: [params.name, params.value]
      })
      this.chart.setOption({
        series: mySeries
      })
    },
    clearMarkPoint() {
      let mySeries = this.chart.getOption().series
      mySeries.forEach(serie => {
        serie.markPoint.data = []
      })
      this.chart.setOption({
        series: mySeries
      })
      this.isStartPoint = 0
      this.waveArray = []
    },
    validSecondPoint(params) {
      if (params.seriesIndex === this.startPoint.seriesIndex) {
        if (params.dataIndex > this.startPoint.dataIndex) {
          return true
        } else {
          this.$Notice.warning({
            title: 'Error',
            desc: 'the point must be in the after of first startPoint'
          })
          return false
        }
      } else {
        this.$Notice.warning({
          title: 'Error',
          desc: 'the point and startPoint must be in the same channel'
        })
        return false
      }
    },
    validEndPoint(params) {
      if (params.seriesIndex === this.startPoint.seriesIndex) {
        if (params.dataIndex > this.startPoint2.dataIndex) {
          return true
        } else {
          this.$Notice.warning({
            title: 'Error',
            desc: 'the point must be in the after of second startPoint'
          })
          return false
        }
      } else {
        this.$Notice.warning({
          title: 'Error',
          desc: 'the point and startPoint must be in the same channel'
        })
        return false
      }
    },
    updateChart(optionsData) {
      if (optionsData === undefined) {
        return false
      } else {
        let options = {
          title: {text: 'Please select the startPoints of the three periodic waveforms'},
          legend: {
            data: optionsData.xAxis.map((val, index) => `ch${index}`),
            orient: 'vertical',
            align: 'left',
            top: '10%',
            right: 0,
            selectedMode: 'single'
          },
          grid: {
            left: 50,
            right: 150
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            data: optionsData.xAxis
          },
          yAxis: {},
          series: optionsData.data.map((x, index) => {
            return {
              name: 'ch' + index,
              type: 'line',
              data: x,
              showSymbol: false,
              markPoint: {
                symbol: 'circle',
                symbolSize: 15,
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                data: []
              }
            }
          }),
          dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              start: 1,
              end: 50
            },
            {
              type: 'inside',
              xAxisIndex: [0],
              start: 1,
              end: 50
            }
          ]
        }
        this.chart.setOption(options, true)
      }
    },
    rowClassName(row, index) {
      return 'demo-table-info-row'
    },
    exportData() {
      this.$refs.table.exportCsv({
        filename: 'Analysis Results'
      })
    },
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
    },
    classify() {
      axios.post('/predict/classify', this.waveArrayData).then(res => {
        this.results = res.data
      })
    }
  }
}

</script>

<style scoped>
#the-echart {
  width: 900px;
  height: 500px;
}
</style>s
