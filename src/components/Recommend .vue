<template>
  <div>
    <div id="Recommend">
      <div class="Recommend_title">
        <slot></slot>
      </div>
      <div class="Recommend_con" v-for="(obj, index) in list" :key="index">
        <div class="Recommend_img">
          <img :src="obj.imgUrl" alt="" />
        </div>
        <div class="Recommend_text">
          <p class="p01">{{ obj.title }}</p>
          <br />
          <p class="p02">{{ obj.info }}</p>
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
          imgUrl:
            'https://p1.music.126.net/V-BJW0xSc1Zsd9M3REd3AA==/109951166036660815.jpg?param=40x40',
          title: '关于所见（01）：我也小心翼翼失去一些',
          info: '六日改电台 # 一些不算遥远的事',
        },
        {
          imgUrl:
            'https://p1.music.126.net/goqiHXCcToDNuGaUd8e1gA==/109951167932158975.jpg?param=40x40',
          title: '养儿防老？新型养老崛起！',
          info: '石时刻嗑 Rock My Life',
        },
        {
          imgUrl:
            'https://p2.music.126.net/w4l8alXDvx62WEJNFJXCNA==/109951167915050055.jpg?param=40x40',
          title: '石时刻嗑 Rock My Life',
          info: '在云端',
        },
        {
          imgUrl:
            'https://p2.music.126.net/Cds6bZXcxyfm-BS9B4sihg==/109951167415804161.jpg?param=40x40',
          title: "丁肆's Talk | 我的循环播放歌单 Coffee-beaba",
          info: '肆意空间',
        },
        {
          imgUrl:
            'https://p2.music.126.net/nWPa46cAANHak6UGkYcaMw==/109951167920984090.jpg?param=40x40',
          title: "辛小说 Winnie's Remix VOL26：当我身旁有你",
          info: '辛小说Winnie’s Remix',
        },
        {
          imgUrl:
            'https://p2.music.126.net/F3NJyaGH-fniXUbs1uYYRw==/109951167251646393.jpg?param=40x40',
          title: 'The Drone Pilots 039 - Sound of the Aftermath',
          info: 'The Drone Pilots',
        },
        {
          imgUrl:
            '	https://p2.music.126.net/vG3JhK9OglnRVvptM0ygeA==/109951167920247694.jpg?param=40x40',
          title: '锐评Kanye第6集：万字讲述Ye的第七张混乱',
          info: '嘻哈不止街头 Hip Story',
        },
        {
          imgUrl:
            'https://p1.music.126.net/jQHkYcrV4ZyV7kJfcrI-yQ==/109951167690385046.jpg?param=40x40',
          title: '赵磊来电：在遗憾里，学会如何去爱',
          info: '音乐来电',
        },
        {
          imgUrl:
            'https://p1.music.126.net/0pJWqAXlVG8Ym4ju2fh7jw==/109951167917895363.jpg?param=40x40',
          title: '4. 寻找川菜之魂',
          info: '厨此以外',
        },
        {
          imgUrl:
            'https://p1.music.126.net/yNWdEbP7LLGvsHXLxWs17Q==/109951167915120870.jpg?param=40x40',
          title: '关于所见（01）：我也小心翼翼失去一些',
          info: '六日改电台 # 一些不算遥远的事',
        },
      ],
    }
  },
}
</script>

<style>
#Recommend {
  width: 100%;
}
.Recommend_title {
  width: 100%;
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  border-bottom: 2px solid #c20c0c;
}
.Recommend_con {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 10px 20px;
  /* background: rgb(171, 171, 171); */
  font-size: 13px;
  line-height: 20px;
}
.Recommend_con:nth-child(odd) {
  background: #f7f7f7;
}
.Recommend_img {
  width: 40px;
  height: 40px;
  background: #000;
  float: left;
}
.Recommend_img img {
  width: 100%;
}
.Recommend_con p {
  float: left;
  margin-left: 10px;
}
.p02 {
  color: gray;
}
</style>
