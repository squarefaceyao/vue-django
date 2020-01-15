<template>
  <div>

    <h2 for="variety">Generated variety:</h2>
    <Select v-model="selected.name" style="width:200px">
      <Option v-for="v in selected.varieties" :key="v.id" :value="v.name">{{ v.name }}</Option>
    </Select>
    <br>
    <br>
    <h2 for="number">Number:</h2>
    <InputNumber id="number" v-model="number" :min="1" style="width:200px"></InputNumber>         
    <br>
    <br>
    <Button type="primary" size="large" @click="generate()"><Icon type="ios-download-outline"></Icon> Generate LIRB data</Button>
  </div>
</template>

<script>
import axios from '../api/axios.js'
export default {
  name: 'generateSample',
  data() {
    return {
      number: 1,
      selected: {
        varieties: [
          {name: 'DK961', id: 0},
          {name: 'Langdon', id: 1}
        ]
      }
    }
  },
  methods: {
    generate() {
      const params = {
        g_num: this.number,
        g_name: this.selected.name
      }
      axios.post('/predict/generate', params, {responseType: 'arraybuffer'}).then(res => {
        let blob = new Blob([res.data], {type: 'text/csv'})
        let objectUrl = URL.createObjectURL(blob)
        let link = document.createElement('a')
        link.href = objectUrl
        link.download = this.number + this.selected.name + ' generated data ' + '.csv'
        link.click()
        URL.revokeObjectURL(objectUrl)
      })
    }
  }
}
</script>