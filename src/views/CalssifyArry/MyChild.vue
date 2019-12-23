<template>
<div class="jinyong">
  <div class="myChild">
    <div class="myChild-top">
      <div class="icon">
        <div class="icon-b">
          <img
            src="https://res.vmallres.com/nwap/20191115/staticm/img/personal/defaultface_user_after.png"
            alt
          />
          <span>登录</span>/
          <span>注册</span>

        </div>
        <div class="icon-a">
          <i class="iconfont icon-xinxi"></i>
          <i class="iconfont icon-shezhi"></i>
        </div>
      </div>
    </div>
    <div class="myChild-contener">
      <div class="icon-a">
        <i class="iconfont icon-xinxi"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
      <div class="logIn">
        <img
          src="https://res.vmallres.com/nwap/20191115/staticm/img/personal/defaultface_user_after.png"
          alt
        />
        <router-link to="/Router" class="router">
        <span>登录/注册</span>
        </router-link>
        <div class="qiandao">
          <i class="iconfont icon-qiandao"></i>
          <span class="jifen">签到领积分</span>
        </div>
      </div>
    </div>
    <div class="favorable">
      <ul>
        <li>
          <span>-</span>
          <span>积分</span>
        </li>
        <li>
          <span>-</span>
          <span>积分</span>
        </li>
        <li>
          <span>-</span>
          <span>积分</span>
        </li>
      </ul>
    </div>
    <div class="order">
      <div class="order-top">
        <div class="p">
          <span>我的订单</span>
          <span>全部订单></span>
        </div>
        <div class="img">
          <ul>  
            <li>
              <i class="iconfont icon-daifukuan1"></i>
              <span>代付款</span>
            </li>
            <li>
              <i class="iconfont icon-tubiaolunkuo-"></i>
              <span>代付款</span>
            </li>
            <li>
              <i class="iconfont icon-daipingjia"></i>
              <span>代付款</span>
            </li>
            <li>
              <i class="iconfont icon-daituikuan"></i>
              <span>代付款</span>
            </li>
            <li>
              <i class="iconfont icon-chakanhuizhidan"></i>
              <span>代付款</span>
            </li>
          </ul>
        </div>
        <div class="swiper">
          <img src="https://res.vmallres.com/pimages//pages/picImages/oVPz6dXrqRVU0gqZXSdN.jpg" alt />
          <img src="https://res.vmallres.com/pimages//pages/picImages/QIroc70g9jC9HxO0tXTe.jpg" alt />
        </div>
        <div class="bu">
            <div><p class="bu-p">我的VMALL</p></div>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.name   }}</span>
                </li>
            </ul>
        </div>

        <div class="bbb">
            <div><p class="bu-p">我的服务</p></div>
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.name   }}</span>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            list:[
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/3NgsqeFkJSdbC5EaZt8k.png',
                    name:"会员频道"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/nS9fmic5GuwdgqR62oAt.png',
                    name:"邀请有礼"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/cUQ1Yei12vB0MNw0iJ7a.png',
                    name:"优享购"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/0FHCWcjJLxXDvHYzrHcE.png',
                    name:"优购码"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/aXHSj2n7eZ3Zwr4sdXTm.png',
                    name:"我的拼团"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/9wVcOCYjKQ5oKQ5ujcFN.png',
                    name:"收货地址"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/pKum8NDxC8g3guJhIaEN.png',
                    name:"预约记录"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/IxvNqzpTIUPK5PLhWj0j.png',
                    name:"实名认证"
                },
            ],
            arr:[
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/3CqWFKmzSVTG5WYvrNx8.png',
                    name:"自助服务"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/gvy89qnAExuDJDjdaWgP.png',
                    name:"特色服务"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/rPbRWRHAWMAVCovRBehZ.png',
                    name:"线下服务"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/LcU9i4UhgHaj1CbcSGp5.png',
                    name:"手机充值"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/BcFUNcxBeM9fewTc16QC.png',
                    name:"以旧换新"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/v7aUv4jiCp2BhZmmVXWn.png',
                    name:"补够保障"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/bGbPRdKxBeiVPe50g3EG.png',
                    name:"换价电池"
                },
                {
                    img:'https://res.vmallres.com/pimages/pages/mygrid/5j2OERFj8ut1nB6WBZcy.png',
                    name:"常见问题"
                },
            ]     
        }
    },
    mounted(){
        window.console.log(document.querySelector(".myChild").scrollTop)
        document.querySelector('.myChild').addEventListener("scroll",this.menu)
    },
  methods: {
    menu() {
      var app = document.querySelector(".myChild");
      app.onscroll = function() {
        if (document.querySelector(".myChild").scrollTop > 100) {
             window.console.log(111)
          document.querySelector(".icon").style.display = "block";
        //   document.querySelector(".logIn").style.display = "none";
        } else {
          document.querySelector(".icon").style.display = "none";
        }
      };
    }
  }
};
</script>

<style scoped>
.jinyong {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.myChild {
  width: 100%;
  height: 100%;
  overflow: scroll

}

.myChild-top {
  width: 100%;
}
.icon {
  width: 100%;
  display: flex;
  background: #e32e2f;
  color: #fff;
  position: fixed;
  top: 0;
  display: none
}
.order {
  width: 100%;
  background: #f7f7f7;
}
.order-top {
  width: 96%;
  background: #fff;
  margin: 0 auto;
}
.p {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.p span {
  padding: 10px;
}
.p span:nth-child(1) {
  color: #333;
  font-size: 14px;
  font-weight: bold;
}

.p span:nth-child(2) {
  color: #666;
  font-size: 12px;
}
.img {
  width: 100%;
  margin-top: 10px;
}
.img ul {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.img ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img ul li i {
  font-size: 28px;
  color: #666;
}
.img ul li span {
  font-size: 12px;
  color: #666;
}
.logIn {
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;

  position: relative;
}
.logIn img {
  width: 25%;
  padding: 0px 10px 50px 20px;
}
.logIn .router > span {
  position: absolute;
  top: 0;
  right: 48%;
  font-size: 22px;
}

.qiandao {
  font-size: 12px;
  background: #cf332c;
  border-radius: 10px;
}
.jifen {
  color: #fff;
  font-size: 12px;
  padding-left: 5px;
}

.favorable {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.favorable ul {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  width: 90%;
  margin-top: -20px;
  background: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}

.favorable ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 20px 0;
  font-size: 12px;
  color: #666;
}
.bu-p {
    font-size: 14px;
    color: #333;
    font-weight: bold;
}
.bu {
    width: 100%;
}
.bu ul{
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.bu ul li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 25%;
    font-size: 12px;
    padding: 10px;
}

.bu ul li img {
    width: 70%;
}



.bbb {
    width: 100%;
    margin-bottom: 100px;
    margin-top: 10px;
}
.bbb ul{
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.bbb ul li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 25%;
    font-size: 12px;
    padding: 10px;
}

.bbb ul li img {
    width: 70%;
}

.icon-a {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  color: #fff;
}
.icon-b {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  display: none;
}
.icon-b img {
  padding: 10px 0px 10px 20px;
  width: 25%;
  margin-right: 10px;
}

.icon-xinxi {
  font-size: 26px;
  padding: 10px;
}
.icon-shezhi {
  font-size: 26px;
  padding: 10px 0px 10px 10px;
}
.myChild-contener {
  width: 100%;
  background: #e32e2f;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.swiper {
  width: 100%;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  align-items: center;
  
}
.swiper img{
  width: 100%;
  border-radius: 20px;
  padding: 10px;
}

.router {
    color: #fff;
}

</style>