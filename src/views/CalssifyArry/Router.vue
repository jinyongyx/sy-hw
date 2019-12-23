<template>
  <div class="router">
      <div class="router-top">
          <i class="iconfont icon-huaweizhifu-dp-"></i>
      </div>
      <div class="p">
          <p>华为账号</p>
          <p>登录华为帐号以使用云空间、华为应用及更多服务</p>
      </div>
      <div class="contner">
          <input type="text" placeholder="手机号/邮箱地址/华为号">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.router {
    width: 100%;
}

.router-top {
    width: 100%;
    display: flex;
    /* align-content: center; */
    justify-content: center;
    padding: 20px;
    
}
.router-top i{
font-size: 38px;
color: #E03B5B;
}

.p {
    text-align: center;
}
.p p:nth-child(1){
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.p p:nth-child(2){
    font-size: 14px;
    color: #808080;
}
.contner {
    width: 100%;
    margin-top: 50px;
}
.contner input {
    width: 90%;
    border: none;
    border-bottom: 1px solid red;
    margin-left: 5%;
}
</style>