<template>
  <div id="box">
    <div id="my_main">
      <div id="my_main_head">
        <img :src="headImg" />
      </div>
      <div id="my_main_dv01">
        <h4>月空_</h4>
        <span id="dj">LV.9</span>
        <br />
        <br />
        <span id="btn">已签到</span>
      </div>
      <div id="my_main_dv02">
        <div class="my_main_dv03">
          <font size="4">99+</font>
          <br />
          <font size="2">动态</font>
        </div>
        <div class="my_main_dv03">
          <font size="4">99+</font>
          <br />
          <font size="2">关注</font>
        </div>
        <div class="my_main_dv03">
          <font size="4">99+</font>
          <br />
          <font size="2">粉丝</font>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headImg:
        'http://p1.music.126.net/K2a2sCt_yZNEZVAg6EK4Dg==/109951164552413570.jpg?param=80y80',
    }
  },
}
</script>

<style>
#my_main {
  width: 100%;
  height: 185px;
  /* background: #000; */
  position: relative;
}
#my_main_head {
  width: 85px;
  height: 85px;
  border: 1px solid gray;
  box-sizing: border-box;
  padding: 2px;
  display: inline-block;
}
#my_main_head img {
  width: 100%;
}
#my_main_dv01 {
  /* width: 100px; */
  height: 85px;
  display: inline-block;
  /* background: #000; */
  position: absolute;
  top: 0;
  left: 95px;
}

#dj {
  display: inline-block;
  width: 50px;
  height: 15px;
  border-radius: 30px;
  border: 1px solid gray;
  color: gray;
  text-align: center;
  line-height: 15px;
  font-size: 13px;
}
#btn {
  width: 100px;
  height: 25px;
  border-radius: 3px;
  line-height: 25px;
  display: inline-block;
  text-align: center;
  border: 1px solid gray;
  color: gray;
  background: #ececec;
}
#my_main_dv02 {
  width: 100%;
  height: 100px;
  /* background: #000; */
  margin-top: 30px;
  color: gray;
}
.my_main_dv03 {
  width: 70px;
  height: 45px;
  float: left;
  text-align: center;
}
.my_main_dv03:nth-child(2) {
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}
</style>
