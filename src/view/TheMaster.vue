<template>
  <div v-once class="master-div">
    <Row type="flex" justify="center">
     
      <Col span="18" class-name="master-col">



      
      <h2>STUDENT</h2>
       <hr>
      <Row type="flex" justify="center" :gutter="0">
        <Col span="4">
        <Card>
          <p slot="title">Xin-Yu Gao</p>
          <img src="../assets/Master/gaoxinyu.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Shi-Xian Yan</p>
          <img src="../assets/Master/yanshixian.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Zhi-Qiang Chai</p>
          <img src="../assets/Master/chaizhiqiang.png">
        </Card>
        </Col>
        
      </Row>
            <Row type="flex" justify="center" :gutter="0">
        <Col span="4">
        <Card>
          <p slot="title">Shi-Qian Wen</p>
          <img src="../assets/Master/wenshiqian.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Xiao-Huang Qin</p>
          <img src="../assets/Master/qinxiaohuang.png">
        </Card>
        </Col>
        <Col span="4" >
        <Card>
          <p slot="title">Yang Yue</p>
          <img src="../assets/Master/yueyang.jpg" onmouseout="document.getElementById('baiduDiv').style.display='none'" onmouseover="document.getElementById('baiduDiv').style.display=''">
        </Card>
        
        <div id="baiduDiv" style="display:none;border:dotted 1px green;">
                <Col span="4">
        <Card>
          <p slot="title">Xiao-Huang Qin </p>
          <img src="../assets/Master/qinxiaohuang.png">
        </Card>
        </Col>

        </div>
        </Col>
        
      </Row>


       <h2>ALUMNI</h2>
      <hr>
      <Row type="flex" justify="center" :gutter="16">
        
        <Col span="4">
        <Card>
          <p slot="title">Zhi-Long Xu</p>
          <img src="../assets/Master/xuzhilong.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Rui-Feng Hou</p>
          <img src="../assets/Master/houruifeng.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Rui-Qin Ji</p>
          <img src="../assets/Master/jiruiqin.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Nan Mao</p>
          <img src="../assets/Master/maonan.png">
        </Card>
        </Col>

        <Col span="4">
        <Card>
          <p slot="title">Xiao-Fei Yan</p>
          <img src="../assets/Master/yanxiaofei.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Ai Peng</p>
          <img src="../assets/Master/pengai.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Li Liu</p>
          <img src="../assets/Master/liuli.png">
        </Card>
        </Col>

        <Col span="4">
        <Card>
          <p slot="title">Gen-Wei Zhang</p>
          <img src="../assets/Master/zhanggenwei.png">
        </Card>
        </Col>
 
        <Col span="4">
        <Card>
          <p slot="title">Qiang Ding</p>
          <img src="../assets/Master/dingqiang.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Jian Gao</p>
          <img src="../assets/Master/gaojian.png">
        </Card>
        </Col>
    
        <Col span="4">
        <Card>
          <p slot="title">Jian-Xi He</p>
          <img src="../assets/Master/hejianxin.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Yu-Ling Shi</p>
          <img src="../assets/Master/shiyuling.png">
        </Card>
        </Col>

        <Col span="4">
        <Card>
          <p slot="title">Yang Yang</p>
          <img src="../assets/Master/yangyang.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Xing Wen</p>
          <img src="../assets/Master/wenxing.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">An Liu</p>
          <img src="../assets/Master/liuan.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">You-Jian Hao</p>
          <img src="../assets/Master/haoyoujian.png">
        </Card>
        </Col>

        <Col span="4">
        <Card>
          <p slot="title">Xu Liu</p>
          <img src="../assets/Master/liuxu.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Yang Qin</p>
          <img src="../assets/Master/qinyang.png">
        </Card>
        </Col>

        <Col span="4">
        <Card>
          <p slot="title">Yu-Chen Wang</p>
          <img src="../assets/Master/wangyuchen.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Wen-Jing Tan</p>
          <img src="../assets/Master/tanwenjing.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Hao Li</p>
          <img src="../assets/Master/lihao.png">
        </Card>
        </Col>

        <Col span="4">
        <Card>
          <p slot="title">Zhi-Jie Wang</p>
          <img src="../assets/Master/wangzhijie.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Yuan Wang</p>
          <img src="../assets/Master/wangyuan.png">
        </Card>
        </Col>
    
        <Col span="4">
        <Card>
          <p slot="title">Ting Li</p>
          <img src="../assets/Master/liting.png">
        </Card>
        </Col>
      
        <Col span="4">
        <Card>
          <p slot="title">Han-Lin Zhang</p>
          <img src="../assets/Master/zhanghanlin.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Wen-Bo Wang</p>
          <img src="../assets/Master/wangwenbo.png">
        </Card>
        </Col>
      
        <Col span="4">
        <Card>
          <p slot="title">Kai-Min Yin</p>
          <img src="../assets/Master/yinkaimin.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Wei-He Liu</p>
          <img src="../assets/Master/liuweihe.png">
        </Card>
        </Col>
    
        <Col span="4">
        <Card>
          <p slot="title">Chao Song</p>
          <img src="../assets/Master/songchao.png">
        </Card>
        </Col>
      </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.master-div {
  padding: 12px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.master-col {
  background-color: #fff;
}
</style>
