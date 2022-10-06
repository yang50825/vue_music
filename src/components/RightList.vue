<template>
  <div>
    <div id="right_main">
      <div id="right_title">入驻歌手</div>
      <div class="right_dv" v-for="(obj, index) in list" :key="index">
        <div class="img_">
          <img :src="obj.headUrl" alt="" />
        </div>
        <div class="right_dv2">
          <h5>{{ obj.name }}</h5>
          <font size="2">{{ obj.info }}</font>
        </div>
      </div>
      <div class="right_dv3">申请称为网易音乐人</div>

      <div id="right_title2">入驻歌手</div>
      <div class="right_dv" v-for="(obj, index) in list" :key="index">
        <div class="img_">
          <img :src="obj.headUrl" alt="" />
        </div>
        <div class="right_dv2">
          <h5>{{ obj.name }}</h5>
          <font size="2">{{ obj.info }}</font>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          headUrl:
            'https://p2.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62',
          name: '张惠妹aMEI',
          info: '台湾歌手张惠妹',
        },
        {
          headUrl:
            'https://p2.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=62y62',
          name: '吴莫愁',
          info: '《中国好声音》',
        },
        {
          headUrl:
            'https://p2.music.126.net/ZEEvSOoXV7Dv2QEkqUN3zg==/109951165625860507.jpg?param=62y62',
          name: '孙楠',
          info: '歌手孙楠',
        },
        {
          headUrl:
            'https://p2.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=62y62',
          name: '麦田老狼',
          info: '歌手，音乐人',
        },
        {
          headUrl:
            'https://p2.music.126.net/MXMZYksJmsa0gcGkuk2mDQ==/109951167712155407.jpg?param=62y62',
          name: '陈楚生',
          info: '唱作歌手',
        },
      ],
    }
  },
}
</script>

<style>
#right_main {
  width: 100%;
  height: 1788px;
  border: 1px solid gray;
  box-sizing: border-box;
  padding: 10px;
}
#right_title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border-bottom: 1px solid gray;
  font-weight: bold;
}
.right_dv {
  width: 100%;
  height: 60px;
  border: 1px solid gray;
  margin-top: 15px;
  background: #fafafa;
}
.img_ {
  width: 61px;
  height: 61px;
  float: left;
}
.img_ img {
  width: 100%;
  position: relative;
  top: -0.5px;
}
.right_dv2 {
  float: left;
}
.right_dv2 h5 {
  margin-left: 10px;
  margin-top: 5px;
}
.right_dv2 font {
  margin-left: 10px;
  margin-top: 5px;
  color: gray;
  position: relative;
  top: 12px;
}

.right_dv3 {
  width: 100%;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  text-align: center;
  background: #f2f2f2;
  font-size: 13px;
  margin-top: 15px;
}

#right_title2 {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border-bottom: 1px solid gray;
  font-weight: bold;
  margin-top: 20px;
}
</style>
