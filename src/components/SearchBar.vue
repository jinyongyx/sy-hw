<template>
  <div class="search-bar">
    <div class="search-bar-one">
      <div class="search-bar-header">
        <div class="log">
          <img
            src="https://res.vmallres.com/nwap/20191115/images/echannelWap/logo/logo_vmall.png"
            alt
          />
        </div>
        <div class="search-index">
          <div class="inpunt-container">
            <input type="text" placeholder="荣耀20" />
            <i class="iconfont icon-sousuo1"></i>
          </div>
        </div>
        <div class="shortcut">
          <i class="iconfont icon-xinxi"></i>
          <span>登录</span>
        </div>
      </div>
    </div>
    <div class="HHSubNavOutDiv">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <a :href="item.url">{{item.name}}</a>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {
          id:1,
          name:"推荐",
          url:"https://m.vmall.com/huawei"
        },
        {
          id:2,
          name:"华为新品",
          url:"https://m.vmall.com/honor"
        },
        {
          id:3,
          name:"荣耀5G",
          url:"https://m.vmall.com/honor"
        },
        {
          id:4,
          name:"Mate30系列",
          url:"https://msale.vmall.com/hwmate.html"
        },
        {
          id:5,
          name:"数码惠",
          url:"https://msale.vmall.com/home.html"
        },
        {
          id:6,
          name:"拼团",
          url:"https://msale.vmall.com/ptpdwap.html"
        },
      ]
    }
  }
};
</script>

<style scoped>
</style>