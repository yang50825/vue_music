<template>
  <div>
    <div id="FindMusicTop">
      <ul>
        <li v-for="(obj, index) in list" :key="index">
          <router-link :to="obj.url">{{ obj.text }}</router-link>
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
      list: [
        {
          text: '推荐',
          url: '/SubNav/FindMusic',
        },
        {
          text: '排行榜',
          url: '/SubNav/RankingList',
        },
        {
          text: '歌单',
          url: '/SubNav/SongList',
        },
        {
          text: '主播电台',
          url: '/SubNav/Anchor',
        },
        {
          text: '歌手',
          url: '4',
        },
        {
          text: '新碟上架',
          url: '5',
        },
      ],
    }
  },
}
</script>

<style>
#FindMusicTop .router-link-active {
  color: white;
  background: #9b0909;
  border-radius: 20px;
}
#FindMusicTop {
  width: 100%;
  height: 35px;
  background: #c20c0c;
}
#FindMusicTop ul {
  width: 800px;
  background: rgb(209, 209, 209);
  margin: 0 auto;
  font-size: 10px;
}
#FindMusicTop li {
  float: left;
  margin-left: 50px;
  /* background: #9B0909; */
  border-radius: 20px;
  margin-top: 7px;
}
#FindMusicTop li a {
  display: inline-block;
  padding: 3px 10px;
  color: white;
}
#main {
  width: 100%;
}
</style>
