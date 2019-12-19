<template>
  <div>
    <div class="classify">
      <div class="search-index">
        <div class="inpunt-container">
          <input type="text" placeholder="荣耀20" />
          <i class="iconfont icon-sousuo1"></i>
        </div>
      </div>
      <div class="shortcut">
        <i class="iconfont icon-xinxi"></i>
      </div>
    </div>
    <Fiy></Fiy>
  </div>
</template>
<script>
import Fiy from "./CalssifyArry/Fiy.vue"
export default {
    components:{
        Fiy
    }
};
</script>
<style scoped>
.classify {
  width: 100%;
  position: fixed;
  display: flex;
  background: #fff;
  overflow: hidden;
}
.inpunt-container {
  width: 200%;
  margin-left: 10px;
  height: 40px;
}
.shortcut {
  margin-left: 160px;
  margin-top: 5px;
}
</style>