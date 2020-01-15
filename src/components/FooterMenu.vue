<template>
  <Row type="flex" justify="space-around" align="top" class-name="layout-footer" >
    <Col span="6">
      <h4>About us</h4>
      <ButtonGroup vertical size="small">
        <Button type="text" @click="go('teacher')">Teacher</Button>
        <Button type="text" @click="go('master')">Master</Button>
        <Button type="text" @click="go('phd')">Ph.D</Button>
        <Button type="text" @click="go('project')">Project</Button>
        <Button type="text" @click="go('paper')">Paper</Button>
      </ButtonGroup>
    </Col>
    <Col span="6">
    <h4>Suggest</h4>
    <ul>
      <li>Feedback</li>
      <li>squarefaceyao@gmail.com</li>
    </ul>
    </Col>
    <Col span="6">
      <h4>Contact us</h4>
      <p>Telephone: +86-62737778</p>
    </Col>
    <Col span="4">
      <h1>PlantEleSh</h1>
                  <div style="text-align:center; margin:0; padding:0; width:220px;">
                  <embed src="//ra.revolvermaps.com/f/g.swf" 
                  type="application/x-shockwave-flash" 
                  pluginspage="http://www.macromedia.com/go/getflashplayer" 
                  quality="high" 
                  wmode="window" 
                  allowScriptAccess="always" 
                  allowNetworking="all" 
                  width="220 " 
                  height="220" 
                  flashvars="m=0&amp;i=0lz0rxz6qi8&amp;r=false&amp;v=false&amp;b=ffffff&amp;n=false&amp;s=220&amp;c=ffffff"></embed><br />
                  <img src="//ra.revolvermaps.com/js/c/0lz0rxz6qi8.gif" width="1" height="1" alt="" />
                  <!-- <a href="https://www.revolvermaps.com/livestats/0lz0rxz6qi8/">Large Visitor Globe</a> -->
                </div> 
    </Col>
  </Row>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    go(name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style scoped>
.layout-footer {
  background-color: #fff;
  /* border: 1px solid #d7dde4; */
  min-height: 120px;
  padding: 12px;
}
</style>


