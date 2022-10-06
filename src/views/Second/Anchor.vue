<template>
  <div>
    <div id="Anchor">
        <div id="Anchor_main">
            <div id="Anchor_main_top">
                <img src="../../assets/屏幕截图 2022-10-05 144525.png" alt="">
            </div>
            <div id="Anchor_main_center">
                <div id="Anchor_center_left">
                    <Recommend>
                        <template>推荐节目</template>
                    </Recommend>
                </div>
                <div id="Anchor_center_right">
                    <Recommend>
                        <template>节目排行榜</template>
                    </Recommend>
                </div>
                <div id="Anchor_center_bottom">
                    <Anchors></Anchors>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
import Recommend from '../../components/Recommend .vue'
import Anchors from '../../components/Anchors.vue'
export default {
    components:{
        Recommend,Anchors
    }
}
</script>

<style>
    #Anchor{
        width: 100%;
        height: 2000px;
        background: #F5F5F5;
    }
    #Anchor_main{
        width: 980px;
        height: 100%;
        background: white;
        margin: 0 auto;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        box-sizing: border-box;
    }
    #Anchor_main_top{
        width: 100%;
        height: 240px;
        background: #000;
    }
    #Anchor_main_top img{
        width: 100%;
    }
    #Anchor_main_center{
        width: 940px;
        height: 760px;
        /* background: #000; */
        margin-left: 20px;
        margin-top: 10px;
    }
    #Anchor_center_left{
        width: 425px;
        height: 650px;
        float: left;
    }
    #Anchor_center_right{
        width: 425px;
        height: 650px;
        float: right;
    }
    #Anchor_center_bottom{
        float: left;
        width: 100%;
        /* background: #000; */
        margin-top: 10px;
    }
</style>