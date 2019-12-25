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
          <input type="text" placeholder="手机号/邮箱地址/华为号" v-model="message1">
      </div>
      <div class="contner">
          <input type="password" placeholder="密码" v-model="message2">
          <p class="mistake">{{mistake}}</p>
      </div>
      <div class="span">
          <span>短息验证码登录</span>
          <span>忘记密码</span>
      </div>
      <div class="input1">
          <input type="checkbox"><span>记住账号</span>
      </div>

      <div class="enter">
        <div class="enter-input">   
            <button @click="login">登录</button>
        </div>

        <div class="input">
            <button>注册</button>
        </div>
      </div>
      <div class="div">
          <p class="ppp">遇到问题</p>
          <p class="pppp">其他方式登录</p>
          <div class="icon">
              <i class="iconfont icon-qq"></i>
              <i class="iconfont icon-zhifubao"></i>
          </div>
      </div>
  </div>
</template>

<script>

export default {

    data(){
        return{
            message1:"",
            message2:"",
            mistake:""
        }
    },
    methods:{
        login(){
        if(this.$store.state.userinformation.username == this.message1 && this.$store.state.userinformation.passworld == this.message2){
            this.$router.push({ path: "/Logon"})
            window.console.log("11")
        }else{
            this.mistake = "账号密码不符合！"
        }
        }
    }
}
</script>

<style scoped>
.router {
    width: 100%;
}

.router-top {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    
}
.router-top i{
font-size: 38px;
color: #E03B5B;
}
.input1 {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #191919;
    margin-top: 10px;
}
.input1 input {
    width: 10%; 
}
.enter {
    width: 90%;
    margin: 0 auto;
}
.enter {
    width: 90%;
    margin: 15px auto;
    border: none;
    display: flex;
    flex-direction: column;
}
.enter-input button {
    width: 100%;
    /* padding: 6px 150px; */
    border-radius: 15px;
    border: none;
    background: #9FCEFF;
    padding: 8px;
}
.div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
}

.ppp {
    font-size: 14px;
    color: #007DFF;
    padding-bottom: 10px;
}
.pppp {
    font-size: 14px;
    color: #808080;
    padding-bottom: 10px;

}

.icon {
    display: flex;
    justify-content: center;
}

.icon-qq{
    font-size: 36px;
    color: #cccccc;
    padding-right: 20px;
}

.icon-zhifubao {
    font-size: 36px;
    color: #cccccc;
    padding-left: 20px;

}


.input {
    width: 100%;
    margin: 15px auto;
    border: none;
}
.input button {
    width: 100%;
    /* padding: 6px 150px; */
    border-radius: 15px;
    border: none;
    background: #EAEAEA;
    padding: 8px;
}
.input input::placeholder{
    color: #007DFF;
    text-align: center;
    font-weight: bold;
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
    border-bottom: 1px solid #F2F2F2;
    margin-left: 5%;
    padding: 10px;
}

.span {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
    color: #007dff;
}

.mistake {
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    color: red;
}

</style>    