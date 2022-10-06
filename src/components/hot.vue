<template>
  <div>
    <div class="main">
        <div class="main_top">
            <div class="y"></div>&nbsp;
            <slot name="title"></slot>
            <div class="top_nav"><slot name="t_nav"></slot></div>
        </div>
        <div class="main_dv">
            <div class="main_dv01" v-for="(obj,index) in list" :key="index">
                <div class="main_dv01_img">
                    <img :src="obj.imgUrl" alt="">
                    <div class="main_dv01_bottom">{{ obj.num }}</div>
                </div>
                {{ obj.title }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    imgUrl:"https://p2.music.126.net/OKQ3tiT0xbqo_DeCnE-ehQ==/109951167909756589.jpg?param=140y140",
                    title:"[心想华语]妄想将你收藏",
                    num:"11万"
                },
                {
                    imgUrl:"https://p2.music.126.net/RKDx0K4qLB_GIp-oJzRMeQ==/109951165475828213.jpg?param=140y140",
                    title:"开启心动模式，耳机里的糖分你一半",
                    num:"11万"
                },
                {
                    imgUrl:"https://p2.music.126.net/psth_fcCEKjDVXRtijL_DQ==/1383185632930533.jpg?param=140y140",
                    title:"假如能回到过去，你想做什么",
                    num:"11万"
                },
                {
                    imgUrl:"https://p1.music.126.net/pyZy_DmqmUQNU_xq9UQidA==/109951167878855948.jpg?param=140y140",
                    title:" 武当修仙笔记（一）",
                    num:"11万"
                },
                {
                    imgUrl:"https://p2.music.126.net/YLSq_cppo-9Sl6cNu6-GiQ==/109951163548668843.jpg?param=140y140",
                    title:"开口沉醉 · 慵懒迷幻的欧美女声",
                    num:"11万"
                },
                {
                    imgUrl:"https://p1.music.126.net/BoXaOU8Cou1k27Br0GhXLA==/109951167570423362.jpg?param=140y140",
                    title:"私人雷达 | 根据听歌记录为你打造",
                    num:"11万"
                },
                {
                    imgUrl:"https://p2.music.126.net/MPXOm42UM1F_AsmzI0XFhw==/109951167886238175.jpg?param=140y140",
                    title:"sky光遇 丨 孤狼就安静点跑图吧",
                    num:"11万"
                },
                {
                    imgUrl:"https://p1.music.126.net/95_xsxD3lra9q485TmLGgw==/109951167577184184.jpg?param=140y140",
                    title:"华语伤感｜我缝缝补补的爱到此为止了",
                    num:"11万"
                }
            ]
        }
    },
}
</script>

<style>
    .main{
        width: 100%;
        height: 480px;
    }
    .main_top{
        width: 100%;
        height: 40px;
        border-bottom: 3px solid #C10D0C;
        line-height: 40px;
        font-size: 20px;
        /* font-weight: bold; */
    }
    .y{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        border: 5px solid #C10D0C;
        display: inline-block;
    }
    .top_nav{
        display: inline-block;
        height: 100%;
        font-size: 13px;
        color: darkgrey;
        margin-left: 20px;
        font-family: '黑体';
        font-weight: bold;
    }
    .main_dv{
        width: 100%;
        height: 300px;
    }
    .main_dv01{
        width: 140px;
        height: 200px;
        /* background: #000; */
        margin-top: 10px;
        float: left;
        margin-left: 50.7px;
        font-size: 14px;
    }
    .main_dv01:nth-child(1){
        margin-left: 0;
    }
    .main_dv01:nth-child(5){
        margin-left: 0;
    }
    .main_dv01_img{
        width: 140px;
        height: 140px;
        background: red;
        position: relative;
    }
    .main_dv01 img{
        width: 100%;
    }
    .main_dv01_bottom{
        width: 100%;
        height: 25px;
        background: rgba(0, 0, 0, 0.292);
        position: absolute;
        bottom: 0;
        line-height: 25px;
        font-size: 13px;
        color: gainsboro;
    }
</style>