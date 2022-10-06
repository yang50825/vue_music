<template>
  <div>
    <div id="banner">
      <div id="banner_main">
        <div id="banner_left">
          <div id="goLeft">{{ goLeft }}</div>
        </div>
        <div id="banner_img">
          <img
            src="https://p1.music.126.net/o0rWz14wMg91goAxoiTB1g==/109951167910437806.jpg?imageView&quality=89"
            alt=""
          />
        </div>
        <div id="banner_right">
          <div id="goRight">{{ goRight }}</div>
        </div>
      </div>
    </div>

    <div id="FindMusicMain">
      <div id="fm_main">
        <div id="fm_right">
          <hot>
            <template v-slot:title>热门推荐</template>
            <template v-slot:t_nav>
              <pre>华语  |  流行  |  摇滚  |  民谣  |  电子</pre>
            </template>
          </hot>
          <hot>
            <template v-slot:title>个性化推荐</template>
            <template v-slot:t_nav><pre></pre></template>
          </hot>
          <hot>
            <template v-slot:title>新碟上架</template>
            <template v-slot:t_nav><pre></pre></template>
          </hot>
          <Monthly>
            <template v-slot:t_nav><pre></pre></template>
          </Monthly>
        </div>
        <div id="fm_left">
          <My></My>
          <RightList></RightList>
        </div>
      </div>
    </div>

    <folder></folder>
  </div>
</template>

<script>
import hot from '../../components/hot.vue'
import My from '../../components/My.vue'
import RightList from '../../components/RightList.vue'
import Monthly from '../../components/Monthly.vue'
import folder from '../../components/folder.vue'
export default {
  components: {
    hot,
    My,
    RightList,
    Monthly,
    folder,
  },
  data() {
    return {
      goLeft: '<',
      goRight: '>',
    }
  },
}
</script>

<style>
#banner {
  width: 100%;
  height: 287px;
  background: #242633;
}
#banner_main {
  width: 1120px;
  height: 100%;
  /* background: rgb(255, 207, 207); */
  margin: 0 auto;
  position: relative;
}
#banner_left {
  width: 69px;
  height: 100%;
  /* background: rgb(255, 255, 255); */
  position: absolute;
  left: 0;
}
#banner_right {
  width: 69px;
  height: 100%;
  /* background: rgb(255, 255, 255); */
  position: absolute;
  right: 0;
}
#banner_img {
  width: 982px;
  height: 100%;
  background: rgb(194, 235, 255);
  position: absolute;
  left: 69px;
  overflow: hidden;
}

#FindMusicMain {
  width: 100%;
  height: 2050px;
  background: #f5f5f5;
  border-bottom: 1px solid gray;
}

#fm_main {
  width: 980px;
  height: 100%;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  margin: 0 auto;
}
#fm_right {
  width: 733px;
  height: 100%;
  background: white;
  float: left;
  box-sizing: border-box;
  padding: 10px;
}
#fm_left {
  width: 247px;
  height: 100%;
  background: white;
  float: left;
  box-sizing: border-box;
  padding: 10px;
}

#goLeft,
#goRight {
  width: 50px;
  height: 100px;
  background: rgba(32, 25, 25, 0.344);
  margin: 80px auto;
  text-align: center;
  line-height: 100px;
  color: white;
  font-size: 30px;
  font-family: '新宋体';
}
</style>
