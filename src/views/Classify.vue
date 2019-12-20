<template>
  <div id="spps">
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
    <a href="#spps" class="abc">
            <i class="iconfont icon-huidaodingbu1"></i>
        </a>
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


.abc {
    position: fixed;
    right: 10px;
    bottom: 80px;
    background: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.abc>i {
    font-size: 34px;
    color: #9b9b9b;
}
</style>