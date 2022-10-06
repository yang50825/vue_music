<template>
  <div>
    <div class="main">
        <div class="main_top">
            歌曲列表
            <div class="top_nav">100首歌</div>
        </div>
        <div class="main_dv">
            <table>
                <thead>
                    <tr>
                        <td width="80"></td>
                        <td width="300">标题</td>
                        <td width="90">时长</td>
                        <td>歌手</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(obj,index) in list" :key="index" >
                        <td><pre>{{ index+1 }}   <font color="green">{{ obj.lists }}</font></pre></td>
                        <td>{{ obj.title }}</td>
                        <td>{{ obj.time }}</td>
                        <td>{{ obj.songer }}</td>
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
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'},
                {id:1,lists:'new',title:'我在等·2022',time:'03:17',songer:'苏星婕'}
                
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
    .main_dv table{
        width: 100%;
        height: 500px;
        font-size: 13px;
        border: 1px solid #d9d9d9;
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
    }
    .main_dv thead tr{
        height: 30px;
        background: #F2F2F2;
    }
    .main_dv tbody tr{
        height: 30px;
    }
    .main_dv tbody tr:nth-child(odd){
        background: white;
    }
</style>