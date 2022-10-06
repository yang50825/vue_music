<template>
  <div>
    <div id="SongList">
      <div id="SongList_main">
        <all />
        <div id="page">
          <pages />
        </div>
      </div>
      <folder />
    </div>
  </div>
</template>

<script>
import all from '../../components/all.vue'
import folder from '../../components/folder.vue'
import pages from '../../components/pages.vue'
export default {
  components: {
    all,
    folder,
    pages,
  },
}
</script>

<style>
#page {
  width: 100%;
  height: 40px;
}
#SongList {
  width: 100%;
  height: 1600px;
  background: #f5f5f5;
}
#SongList_main {
  width: 980px;
  height: 100%;
  background: white;
  margin: 0 auto;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  box-sizing: border-box;
  padding: 30px;
}
</style>
