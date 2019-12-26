<template>
  <div class="Commodity">
    <div class="swiper">
      <img
        :src="img"
        alt
      />
    </div>
      <p class="abc">
       {{price}}
      </p>
      <p class="aaa">
        {{name}}
      </p>
      <p class="bbb">
        ①享12期分期免息 ②晒图抽千份自拍杆 ③华为老用户购机赠半年延保 点此购买>>
      </p>
      <div class="xian">
      </div>

      <div class="chuxiao">
            <div class="sss">
              促销
            </div>
            <div>
              <div class="time">
              <div><span>整点赠送</span></div>
              <p>0:00/10:00/16:00/20:00 下单前200...</p>
              </div>

              <div class="time">
              <div><span>分期免息</span></div>
              <p>花呗、掌上生活、工行、银...</p>
              </div>

              <div class="time">
              <div><span>赠送积分</span></div>
              <p>购买即赠商城积分，积分可抵现</p>
              </div>
            </div>
      </div>
      <div class="kuai"></div>
      <div class="color">
        <div>
          <span class="yanse">颜色</span>
          </div>
          <div class="kkk">

            <div class="shnglin1"><span>奇景森林</span></div>
            <div class="shnglin"><span>仲夏紫</span></div>
            <div class="shnglin"><span>亮黑色</span></div>
            <div class="shnglin"><span>苏音蓝</span></div>

          </div>
      </div>

      <div class="color">
        <div>
          <span class="yanse">颜色</span>
          </div>
          <div class="kkk">
            <div class="shnglin1"><span>全网通 8GB+128GB</span></div>
            <div class="shnglin"><span>全网通 8GB+256GB</span></div>
          </div>
      </div>

      <div class="color">
        <div>
          <span class="yanse">颜色</span>
          </div>
          <div class="kkk">

            <div class="shnglin1"><span>五增值服务</span></div>
            <div class="shnglin"><span>礼品包装服务</span></div>
            <div class="shnglin"><span>售后包装服务</span></div>

          </div>
      </div>

      <div>
      </div>
      
    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" :info="cont" @click="Cart" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button type="warning" text="加入购物车" @click="addShopping"/>
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
  </div>
</template>

<script>
export default {
  data () {
  return {
    cont:0,
    img:this.$store.state.obj.img,
    price:this.$store.state.obj.price,
    name:this.$store.state.obj.name
  }
},
  methods: {
    addShopping() {
      // Toast('点击图标');
        var arr = JSON.parse(localStorage.getItem('newList')) || []
        window.console.log(typeof  arr)
        if(arr.length){
            arr.map(item=>{
                if(item.img === this.img){
                    item.num++
                }
            })
        }else{
          arr.push(this.$store.state.obj)
        }
      window.localStorage.setItem('newList',JSON.stringify(arr))
      this.cont=arr.length
      // this.$store.commit("addShopping")
      // this.$store.
    this.$store.state.newlist.push(this.$store.state.obj)
    this.$store.commit("addShopping")
    },
    Cart(){
     this.$router.push({path:"ShopCart"})
    },
    onClickButton() {
      // Toast('点击按钮')
    }
  },
    mounted(){
        var arr = JSON.parse(localStorage.getItem('newList')) || []
        this.cont=arr.length
    }
};
</script>

<style scoped>
.Commodity {
  width: 100%;
}
.swiper {
  width: 100%;
  background: #fcfcfc;
}

.swiper img {
  width: 100%;
  padding: 0 10px 0 10px;
}
.abc {
  width: 90%;
  font-size: 20px;
  color: #ca141d;
  margin: 5px auto;
}

.aaa {
  width: 90%;
  margin: 5px auto;
  font-size: 14px;
  font-weight: bold;
}

.bbb {
  width: 90%;
  margin: 0 auto;
  font-size: 12px;
  color: #ca141d;
}
.xian {
  width: 90%;
  border-bottom: 1px solid #ccc;
  margin-left:10%;
  margin-top: 10px; 
  margin-bottom: 10px; 
}
.kuai {
  width: 100%;
  background: #F9F9F9;
  height: 3%;
}
.chuxiao {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.time {
  display: flex;
  font-size: 12px;
  /* justify-content: space-between; */
  margin: 5px;
}

.time div {
  margin-right: 5px;
  border-radius: 10px;
  border: 1px solid #Ef5a62;
  color: #Ef5a62;
}

.time div span {
  padding: 8px;
}

.sss {
  font-size: 12px;
  color: #666;
}
.color{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.shnglin {
  border: 1px solid #cccccc;
  border-radius: 10px;
  /* 
  
  margin-left: 15px; */
}
.shnglin1 {
  border: 1px solid red;;
  border-radius: 10px;
  color: red;
}


.kkk {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 55px;
}
.yanse {
  font-size: 12px;
  color: #888;
}
</style>