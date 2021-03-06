<template>
<div>
  <Row type="flex" justify="center" class-name="dataset-browse-row">
    <Col span="4" class-name="dataset-browse-tree">
      <Card :bordered="false" dis-hover>
      <p slot="title">files</p>
      <RadioGroup v-model="selectedFile" vertical>
        <Radio v-for="(file, index) in files" :label="file.rowKey" :key="index" >{{ file.name }}</Radio>
      </RadioGroup>
      </Card>
    </Col>
    <Col span="16">
    <Tabs value="info" class="dataset-browse-tabs">
      <TabPane label="Dataset Info" name="info">
        <Form :label-width="80" label-position="left">
          <FormItem prop="dataset.name" label="name">
            <Input type="text" v-model="dataset.name" placeholder="dataset name" style="width:300px" disabled></Input>
          </FormItem>
          <FormItem prop="dataset.author" label="author">
            <Input type="text" v-model="dataset.author" placeholder="dataset author" disabled></Input>
          </FormItem>
          <FormItem prop="dataset.description" label="description">
            <Input type="textarea" v-model="dataset.description" placeholder="dataset description" :autosize="true" disabled></Input>
          </FormItem>
          <InfoShow title="DatasetMeta" type="DatasetMeta" v-if="datasetMeta" :info="datasetMeta"></InfoShow>
          <InfoShow title="Equipment" type="Equipment" v-if="equipment" :info="equipment"></InfoShow>
        </Form>
      </TabPane>
      <TabPane label="File Info" name="fileMeta">
        <p v-if="!selectedFile" style="font-size: 25px;">Please seleted a file</p>
        <InfoShow title="ImageMeta" type="ImageMeta" v-if="imageMeta" :info="imageMeta"></InfoShow>
        <InfoShow title="IecMeta" type="IecMeta" v-if="iecMeta" :info="iecMeta"></InfoShow>
        <InfoShow title="Environment" type="Environment" v-if="environment" :info="environment"></InfoShow>
        <InfoShow title="Sample" type="Sample" v-if="sample" :info="sample"></InfoShow>
        <InfoShow title="Software" type="Software" v-if="software" :info="software"></InfoShow>
      </TabPane>
      <TabPane label="Content" name="content">
        <TheEchart v-if="dataset.type==='CSV'"></TheEchart>
        <SingleRegion v-else-if="dataset.type==='IMAGE'"></SingleRegion>
      </TabPane>
      <TabPane v-if="dataset.type==='CSV'" label="Predict" name="Predict">
        <ClassifiedResultShow></ClassifiedResultShow>
      </TabPane>
      <TabPane v-if="dataset.type==='CSV'" label="Generate" name="Generate">
        <GenerateSample></GenerateSample>
      </TabPane>        
      <TabPane v-if="dataset.type==='IMAGE'" label="MultiRegion" name="multiRegion">
        <MultiRegion></MultiRegion>
      </TabPane>
      <TabPane v-if="f[0] && dataset.type==='IMAGE'" label="HeatMap" name="heatMap">
        <HeatMap  :xData="getAxis(false)" :yData="getAxis(true)" :data="signalData" :width="800" :height="500"></HeatMap>
      </TabPane>
    </Tabs>
    </Col>
  </Row>
</div>
</template>

<script>
import InfoShow from '../components/InfoShow'
import SingleRegion from '../components/SingleRegion'
import TheEchart from '../components/TheEchart'
import MultiRegion from '../components/MultiRegion'
import HeatMap from '../components/HeatMap'
import ClassifiedResultShow from '../components/ClassifiedResultShow'
import GenerateSample from '../components/GenerateSample'
import {generateData} from '../util/imageUtil'
import {imageMetaApi, iecMetaApi, datasetMetaApi, equipmentApi, environmentApi, softwareApi, sampleApi} from '../api/metaData'
export default {
  components: {
    TheEchart,
    SingleRegion,
    MultiRegion,
    HeatMap,
    InfoShow,
    ClassifiedResultShow,
    GenerateSample
  },
  data() {
    return {
      selectedFile: null,
      datasetMeta: null,
      equipment: null,
      imageMeta: null,
      iecMeta: null,
      environment: null,
      sample: null,
      software: null
    }
  },
  computed: {
    files() {
      return this.$store.state.files
    },
    dataset() {
      return this.$store.state.currentDataset
    },
    currentFile() {
      return this.$store.state.currentFile
    },
    selectedFileIndex() {
      return this.files.findIndex(file => file.rowKey === this.selectedFile)
    },
    selectedFileMeta() {
      return this.files.find(file => file.rowKey === this.selectedFile)
    },
    f() {
      return this.$store.getters.getTranspose
    },
    signalData() {
      return this.f[this.selectedFileIndex]
    }
  },
  watch: {
    selectedFile: 'fetchFile',
    $route: 'fetchDataset'

  },
  created() {
    this.$store.commit('initAnalysis')
    this.fetchDataset()
  },
  methods: {
    fetchDataset() {
      this.$store.dispatch('getDatasetById', this.$route.params.datasetId).then((res) => {
        this.getDatasetMeta()
        this.getEquipment()
        return this.$store.dispatch('getFiles', this.$route.params.datasetId)
      })
    },
    fetchFile() {
      if (this.dataset.type === 'CSV') {
        this.$store.dispatch('getFileByRowKey', this.selectedFile).then(() => {
          this.getImageMeta()
          this.getIecMeta()
          this.getEnvironment()
          this.getSample()
          this.getSoftware()
        })
      }
      if (this.dataset.type === 'IMAGE') {
        this.$store.commit('changeCurrentFile', this.selectedFileMeta)
        this.getImageMeta()
        this.getIecMeta()
        this.getEnvironment()
        this.getSample()
        this.getSoftware()
      }
    },
    getDatasetMeta() {
      if (this.dataset.datasetMetaId) {
        datasetMetaApi.get(this.$route.params.id, this.dataset.datasetMetaId)
        .then(res => { this.datasetMeta = res.data })
      }
    },
    getEquipment() {
      if (this.dataset.equipmentId) {
        equipmentApi.get(this.$route.params.id, this.dataset.equipmentId).then(res => {
          this.equipment = res.data
        })
      }
    },
    getImageMeta() {
      if (this.selectedFileMeta.imageMetaId) {
        imageMetaApi.get(this.$route.params.id, this.selectedFileMeta.imageMetaId).then(res => {
          this.imageMeta = res.data
        })
      }
    },
    getIecMeta() {
      if (this.selectedFileMeta.iecMetaId) {
        iecMetaApi.get(this.$route.params.id, this.selectedFileMeta.iecMetaId).then(res => {
          this.iecMeta = res.data
        })
      }
    },
    getSoftware() {
      if (this.selectedFileMeta.softwareId) {
        softwareApi.get(this.$route.params.id, this.selectedFileMeta.softwareId).then(res => {
          this.software = res.data
        })
      }
    },
    getSample() {
      if (this.selectedFileMeta.sampleId) {
        sampleApi.get(this.$route.params.id, this.selectedFileMeta.sampleId).then(res => {
          this.sample = res.data
        })
      }
    },
    getEnvironment() {
      if (this.selectedFileMeta.environmentId) {
        environmentApi.get(this.$route.params.id, this.selectedFileMeta.environmentId).then(res => {
          this.environment = res.data
        })
      }
    },
    getAxis(isYAxis) {
      return this.$store.getters.getAxis(isYAxis)
    },
    getData(len, start) {
      return generateData(len, start)
    }
  }
}
</script>

<style scoped>
.dataset-browse-row{
  padding: 14px;
  background-color: #fff;
}
.dataset-browse-tree{
  min-height: 800px;
  overflow: auto;
}
.dataset-browse-tabs{
  background-color: #fff;
  margin: 14px 12px;
}
</style>
