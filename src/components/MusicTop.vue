<template>
  <div>
    <div id="top">
      <ul id="nav">
        <li class="logo">
          <a href="###"><img src="../assets/logo.png" alt="" /></a>
        </li>
        <li class="subnav" v-for="(obj, index) in nav" :key="index">
          <router-link :to="obj.url">{{ obj.title }}</router-link>
        </li>
        <li class="search">
          <img src="../assets/放大镜.png" />
          <input type="text" placeholder="音乐/视频/电台/用户" />
        </li>
        <li class="btn01">
          <div class="btn_dv">创作者中心</div>
        </li>
        <li class="headImg">
          <div class="headImg_dv"><img :src="headImg" /></div>
        </li>
      </ul>
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { title: '发现音乐', url: '/SubNav' },
        { title: '我的音乐', url: '/0' },
        { title: '关注', url: '/1' },
        { title: '商城', url: '/2' },
        { title: '音乐人', url: '/3' },
        { title: '下载客户端', url: '/4' },
      ],
      headImg:
        'http://p1.music.126.net/K2a2sCt_yZNEZVAg6EK4Dg==/109951164552413570.jpg?param=30y30',
    }
  },
}
</script>

<style>
#nav .router-link-active {
  color: white;
  background: #000;
}
* {
  margin: 0;
  padding: 0;
}
#top {
  width: 100%;
  height: 70px;
  background: #242424;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
#nav {
  width: 75%;
  height: 100%;
  /* background: rgb(255, 225, 225); */
  margin: 0 auto;
  line-height: 68px;
}

#nav li {
  height: 100%;
  float: left;
}

.logo img {
  width: 160px;
  margin-top: 13px;
}

.subnav a {
  padding: 27px 20px;
  color: white;
  font-size: 14px;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
}

.subnav a:hover {
  background: #000;
}

#nav li:nth-child(2) {
  margin-left: 20px;
}

.search {
  margin-left: 50px;
}

.search input {
  border: 0;
  width: 160px;
  height: 32px;
  border-radius: 20px;
  text-indent: 30px;
  font-size: 12px;
}
.search input:focus {
  outline: none;
}

.search img {
  width: 16px;
  position: relative;
  left: 25px;
  top: 4px;
}

.btn01 {
  margin-left: 20px;
}

.btn_dv {
  color: #cccccc;
  display: inline-block;
  width: 80px;
  height: 32px;
  border-radius: 30px;
  border: 1px solid #cccccc;
  margin-top: 20px;
  line-height: 32px;
  font-size: 13px;
  text-align: center;
  cursor: pointer;
}

.btn_dv:hover {
  color: white;
  border: 1px solid white;
}

.headImg {
  margin-left: 20px;
}

.headImg_dv {
  width: 33px;
  height: 33px;
  border-radius: 50%;
  /* border: 1px solid red; */
  margin-top: 20px;
  line-height: 0;
}

.headImg_dv img {
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
}

#main {
  width: 100%;
}
</style>
