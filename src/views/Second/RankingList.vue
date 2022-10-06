<template>
  <div>
    <div id="ListMain">
      <div id="ListMain_dv">
        <div id="ListMain_left">
          <div id="ListMain_left_dv">
            <div class="ListMain_left_dv1_title">云音乐特色榜</div>
            <div
              class="ListMain_left_dv1_con"
              v-for="(obj, index) in list01"
              :key="index"
            >
              <div class="ListMain_left_img">
                <img :src="obj.imgUrl" alt="" />
              </div>
              <div class="ListMain_left_txt">
                <span class="span1">{{ obj.title }}</span>
                <span class="span2">{{ obj.info }}</span>
              </div>
            </div>
          </div>

          <div id="ListMain_left_dv">
            <div class="ListMain_left_dv1_title">全球媒体榜</div>
            <div
              class="ListMain_left_dv1_con"
              v-for="(obj, index) in list02"
              :key="index"
            >
              <div class="ListMain_left_img">
                <img :src="obj.imgUrl" alt="" />
              </div>
              <div class="ListMain_left_txt">
                <span class="span1">{{ obj.title }}</span>
                <span class="span2">{{ obj.info }}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="ListMain_right">
          <div id="ListMain_right_top">
            <div id="right_top_img">
              <img
                src="	https://p2.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=150y150"
                alt=""
              />
            </div>
            <div id="right_top_dv">
              <span id="span3">飙升榜</span>
              <br />
              <span id="span4">最近更新：10月5日（刚刚更新）</span>
              <br />
              <span id="span5">
                <a href="###">播放 +</a>
                <a href="###">39702223</a>
                <a href="###">13003</a>
                <a href="###">下载</a>
                <a href="###">215422</a>
              </span>
            </div>
          </div>
          <div id="ListMain_right_center">
            <SongList></SongList>
          </div>
          <div id="page">
            <pages></pages>
          </div>
        </div>
      </div>
      <folder></folder>
    </div>
  </div>
</template>

<script>
import SongList from '../../components/SongList.vue'
import pages from '../../components/pages.vue'
import folder from '../../components/folder.vue'
export default {
  components: {
    SongList,
    pages,
    folder,
  },
  data() {
    return {
      list01: [
        {
          title: '飙升榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=40y40',
        },
        {
          title: '新歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=40y40',
        },
        {
          title: '原创榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=40y40',
        },
        {
          title: '热歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=40y40',
        },
      ],
      list02: [
        {
          title: '飙升榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=40y40',
        },
        {
          title: '新歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=40y40',
        },
        {
          title: '原创榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=40y40',
        },
        {
          title: '热歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=40y40',
        },
        {
          title: '飙升榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=40y40',
        },
        {
          title: '新歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=40y40',
        },
        {
          title: '原创榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=40y40',
        },
        {
          title: '热歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=40y40',
        },
        {
          title: '飙升榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=40y40',
        },
        {
          title: '新歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=40y40',
        },
        {
          title: '原创榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=40y40',
        },
        {
          title: '热歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=40y40',
        },
        {
          title: '飙升榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=40y40',
        },
        {
          title: '新歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=40y40',
        },
        {
          title: '原创榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=40y40',
        },
        {
          title: '热歌榜',
          info: '每天更新',
          imgUrl:
            'https://p2.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=40y40',
        },
      ],
    }
  },
}
</script>

<style>
#ListMain {
  width: 100%;
  height: 3400px;
  background: #f5f5f5;
  position: relative;
  float: left;
  border-bottom: 1px solid darkgray;
}

#ListMain_dv {
  width: 980px;
  border-left: 1px solid darkgray;
  border-right: 1px solid darkgray;

  margin: 0 auto;
  height: 100%;
}
#ListMain_left {
  width: 240px;
  height: 100%;
  border-right: 1px solid darkgray;
  float: left;
}
#ListMain_left_dv {
  width: 100%;
  float: left;
  margin-top: 30px;
}
.ListMain_left_dv1_title {
  width: 100%;
  height: 35px;
  line-height: 35px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 15px;
  text-indent: 10px;
}
.ListMain_left_dv1_con {
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  padding: 10px 15px;
}
.ListMain_left_img {
  width: 40px;
  height: 40px;
  background: rgb(135, 135, 135);
  float: left;
}
.ListMain_left_img img {
  width: 100%;
}
.ListMain_left_txt {
  height: 40px;
  float: left;
  line-height: 13px;
  margin-left: 10px;
}
.span1 {
  font-size: 13px;
  display: block;
}
.span2 {
  font-size: 10px;
  color: gray;
  display: block;
  margin-top: 14px;
}
#ListMain_right {
  width: 739px;
  height: 100%;
  background: white;
  float: left;
  box-sizing: border-box;
  padding: 20px;
}
#ListMain_right_top {
  width: 100%;
  height: 200px;
  /* background: rgb(236, 197, 197); */
}
#right_top_img {
  width: 160px;
  height: 160px;
  border: 1px solid gray;
  box-sizing: border-box;
  padding: 3px;
  float: left;
}
#right_top_img img {
  width: 100%;
}
#right_top_dv {
  float: left;
  margin-left: 30px;
  line-height: 30px;
  margin-top: 10px;
}
#span3 {
  font-size: 20px;
}
#span4 {
  font-size: 13px;
  color: gray;
}
#span5 a {
  display: inline-block;
  padding: 1px 10px;
  border: 1px solid gray;
  color: #3a3a3a;
  font-size: 10px;
  margin-top: 30px;
  background: #f1f1f1;
  border-radius: 5px;
  margin-left: 10px;
}
#span5 a:nth-child(1) {
  margin-left: 0;
  background: #2475c3;
  color: white;
}
#ListMain_right_center {
  width: 100%;
  height: 3100px;
}
#page {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  /* background: #000; */
}
</style>
