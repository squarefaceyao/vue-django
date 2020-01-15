<template>
  <div v-once>
    <Row type="flex" justify="center">
      <Col span="18">
        <Card class="thepaper-card">
          <h3 slot="title" align="center" >Introduction to PlantES</h3>
          <div align="center">
              <video width="425" height="344" controls >
                    <source src="./yao.mp4" type="video/mp4">
        
                Your browser does not support the video tag.
              </video>

                    
          </div>

          
              



        </Card>
      </Col>
    </Row>
  </div>
</template>



<script >
export default {
}
</script>

<style scoped>
.thepaper-card {
  margin: 12px;
}
.thepaper-year {
  font-size: 18px;
  margin: 12px;
}
h3, p {
  margin: 12px;
}
</style>

