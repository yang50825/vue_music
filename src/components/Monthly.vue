<template>
  <div>
    <div class="main">
        <div class="main_top">
            <div class="y"></div>&nbsp;
            榜单
            <div class="top_nav"><slot name="t_nav"></slot></div>
        </div>
        <div class="main_dv">
            <table>
                <tr>
                    <td>
                        <div class="td_dv">
                            <div class="td_dv_left" style="background: #E57EA9;">飙升榜</div>
                            <div class="td_dv_right">
                                <h4>飙升榜</h4>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="td_dv">
                            <div class="td_dv_left" style="background: #5ABFBB;">新歌榜</div>
                            <div class="td_dv_right">
                                <h4>新歌榜</h4>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="td_dv">
                            <div class="td_dv_left" style="background: #66A6DB;">原创榜</div>
                            <div class="td_dv_right">
                                <h4>原创榜</h4>
                            </div>
                        </div>
                    </td>
                </tr>
                <tbody>
                    <tr v-for="(obj,index) in list" :key="index">
                        <td><span :class="{red:obj.num<=3}">{{ obj.num }}</span>&nbsp;&nbsp;&nbsp;{{ obj.one }}</td>
                        <td><span :class="{red:obj.num<=3}">{{ obj.num }}</span>&nbsp;&nbsp;&nbsp;{{ obj.two }}</td>
                        <td><span :class="{red:obj.num<=3}">{{ obj.num }}</span>&nbsp;&nbsp;&nbsp;{{ obj.three }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {num:"1","one":"万千花蕊慈母悲哀","two":"无数","three":"Lady Mama"},
                {num:"2","one":"忏悔录","two":"100","three":"点点"},
                {num:"3","one":"算了","two":"爱似水仙","three":"你是你的你"},
                {num:"4","one":"回眸一夏","two":"NUNA 2.0","three":"Closer"},
                {num:"5","one":"小镇姑娘","two":"如果突然想起我","three":"不够喜欢"},
                {num:"6","one":"100","two":"爱似水仙（烟嗓）","three":"回溯"},
                {num:"7","one":"骗子","two":"爱上你是一个错（烟嗓）","three":"托遗于悲风"},
                {num:"8","one":"海屿你","two":"最好的我","three":"触不可及"},
                {num:"9","one":"平行线","two":"我的美丽feat.海洋","three":"夜车"},
                {num:"10","one":"平行线","two":"海芋恋·2022","three":"置底"}
            ]
        }
    },
}
</script>

<style>
    .red{
        color: #C10D0C;
    }
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

    table{
        width: 100%;
        height: 470px;
        border: 1px solid gray;
        margin-top: 20px;
    }
    td{
        padding: 0 20px;
        border-left: 1px solid gainsboro;
    }
    td:nth-child(1){
        border-left-style: none;
    }
    .td_dv{
        width: 150px;
        height: 80px;
        /* background: #000; */
    }
    .td_dv_left{
        width: 80px;
        height: 80px;
        /* background: red; */
        text-align: center;
        line-height: 80px;
        color: white;
        float: left;
    }
    .td_dv_right{
        float: left;
        margin-left: 10px;
    }
    tbody tr{
        font-size: 13px;
        height: 20px;
        border-top-style: none;
        border-bottom-style: none;
    }
    tbody tr:nth-child(odd){
        background: #E8E8E8;
    }
    tbody tr:nth-child(even){
        background: #F4F4F4;
    }
    tbody tr span{
        font-size: 16px;
        color: #7a7a7a;
    }
</style>