<template>
  <div class="tab-bar">
    <ul>
      <li @click="itemClick('/')">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </li>
      <li @click="itemClick('/Classify')">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <span>分类</span>
      </li>
      <li @click="itemClick('/Discavey')">
        <i class="iconfont icon-Shapecopy"></i>
        <span>发现</span>
      </li>
      <li @click="itemClick('/shopping')">
        <i class="iconfont icon-icon22fuzhi"></i>
        <span>购物车</span>
      </li>
      <li @click="itemClick('/My')">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    methods:{
        itemClick(path){
            if(this.$router.path === path){
                return
            }else{
                  this.$router.push(path)
            }
            
        }
    }
}
</script>
<style scoped>

</style>