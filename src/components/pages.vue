<template>
  <div>
    <ul id="pages">
        <li class="bgLi01">上一页</li>
        <li class="bgLi02">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>...</li>
        <li>100</li>
        <li class="bgLi01">下一页</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #pages{
        width: 84%;
        height: 40px;
        margin: 0 auto;
        font-size: 14px;
    }
    #pages li{
        float: left;
        padding: 5px 10px;
        border: 1px solid gray;
        margin-left: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    .bgLi01{
        background: #E9E9E9;
    }
    .bgLi02{
        background: #CB0B11;
        color: white;
    }
</style>