<template>
  <div class="Cart">
    <div class="Cart-top">
      <div class="bianji">
        <span class="span1">购物车</span>
        <span class="span2">编辑</span>
      </div>
    </div>

    <div class="contener">
      <div class="big" v-for="(item,index) in buy" :key="index">
        <div class="contener-warp">
          <input type="checkbox" :checked="item.checked" @click="show(index)" />
          <img :src="item.img" alt />
          <div class="div-p">
            <p class="p1">{{item.name}}</p>
            <p class="p2">绮境森林,全网通 8GB+128GB,官方标配</p>
            <div class="fenqi">分期免息</div>
          </div>
        </div>
        <div class="warp">
          <div class="warp-i">
            <span class="price">{{item.price}}</span>
            <span class="spanaa">
              <i class="iconfont icon-jiajian1" @click="jian(index)"></i>
              <span>{{item.num}}</span>
              <i class="iconfont icon-jiajian" @click="jia(index)"></i>
            </span>
          </div>
        </div>
        <p class="pac">限购20件</p>

        <div class="fuwu">
          <div class="fuwu-div">
            <span>服务</span>
            <div class="diva">碎屏保</div>
            <div class="divb">延长保</div>
          </div>
        </div>

        <div class="pei">
          <div class="pei-img">
            <span class="span-pei">配</span>
            <div class="imgpp">
              <img
                src="https://res.vmallres.com/pimages/product/6901443115983/428_428_1554204570958mp.png"
                alt
              />
              <span>华为自拍杆（暗夜金）</span>
              <span>x15</span>
            </div>
          </div>
        </div>
        <div class="agin">
          <div class="agin-img">
            <img
              src="https://res.vmallres.com/pimages/product/GB6901443263479/428_428_1559642227716mp.png"
              alt
            />
            <span>华为自拍杆（暗夜金）</span>
            <span>x15</span>
          </div>
        </div>

        <p class="youhui">优惠搭配</p>
        <div class="warp-ul">
          <ul>
            <li>
              <div class="erji">
                <div class="erji-li">
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443344697/142_142_C72517A4938F09A0E087E77DAE4A882A2A80674FAAC94C20mp.png"
                    alt
                  />
                  <p>省50</p>
                </div>
                <i class="iconfont icon-hao"></i>
              </div>
            </li>
            <li>
              <div class="erji">
                <div class="erji-li">
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443177493/142_142_1542772432318mp.png"
                    alt
                  />
                  <p>省50</p>
                </div>
                <i class="iconfont icon-hao"></i>
              </div>
            </li>
            <li>
              <div class="erji">
                <div class="erji-li">
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443288267/142_142_1557478924284mp.png"
                    alt
                  />
                  <p>省50</p>
                </div>
                <i class="iconfont icon-hao"></i>
              </div>
            </li>
            <li>
              <div class="erji">
                <div class="erji-li">
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443314843/142_142_1560234048624mp.png"
                    alt
                  />
                  <p>省50</p>
                </div>
                <i class="iconfont icon-hao"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div style="z-index: 9999;position: fixed;bottom: 0;" class="numOne">
      <div class="input-quanxuan">
        <input type="checkbox" @click="allcheck" :checked="allCheck" />
        全选
      </div>

      <div class="heji">
        <div>合计:{{total}}</div>

        <div class="jiesuan">
          <span>结算</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // cont:0,
      // list: JSON.parse(localStorage.getItem("newList")),
      // checked: "",
      // img: this.$store.state.obj.img,
      // price: this.$store.state.obj.price,
      // name: this.$store.state.obj.name
    };
  },

  computed: {
    buy(){
      return this.$store.state.buy
    },


    total() {
      var total1 = 0;
      this.buy.map(item => {
        total1 += item.num * item.lodPrice;
        // total1 += Number(item.num * item.lodPrice);
        window.console.log(item.num)
        window.console.log(item.lodPrice)

      });
      window.console.log(total1)
      return total1;
    },
    allCheck() {
      var state = null;
      state = this.buy.every(item => {
        return item.checked === true;
      });
      window.console.log(state);
      return state;
    }
  },

  // watch:{
  //   total() {
  //     var total1 = 0;
  //     this.list.map(item => {
  //       total1 += item.num * item.lodPrice;
  //     });
  //     return total1;
  //   },
  // },
  methods: {
    onSubmit() {
      window.console.log("11");
    },
    show(index) {
      this.buy[index].checked = !this.buy[index].checked;
    },
    allcheck() {
      var state = this.buy.some(item => item.checked === false);
      window.console.log(state);
      if (!state) {
        this.buy.map(item => {
          item.checked = false;
        });
      } else {
        this.buy.map(item => {
          item.checked = true;
        });
      }
      window.console.log(this.buy);
    },
    jian(index) {
      window.console.log(index);
      // window.console.log("减")
      if (this.cont <= 0) {
        return (this.cont = 0);
      } else {
        this.buy[index].num--;
        window.console.log(this.buy[index].num);
      }
    },
    jia(index) {
      // window.console.log("加")
      window.console.log(index);
      window.console.log(this.buy);
      this.buy[index].num++;
      window.console.log(this.buy[index].num);
    }
  }
};
</script>

<style scoped>
.input-quanxuan {
  margin-left: 10px;
}
.jiesuan {
  padding: 10px 30px 10px 30px;
  /* background: #e04b53; */
  background: linear-gradient(left, #E33D2D, #CB161E);
  color: #fff;
  border-radius: 15px;
  margin-right: 10px;
}
.heji {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.numOne {
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
}
.big {
  border-radius: 10px;
  background: #fff;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.warp-ul ul {
  width: 100%;
}
.warp-ul ul li {
  width: 33%;
}
.warp-ul ul li img {
  width: 100%;
  padding: 20px;
}
.erji-li {
  text-align: center;
}
.erji-li p {
  background: #cccccc;
  font-size: 12px;
}
.erji {
  display: flex;
  align-items: center;
}


.Cart {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.contener {
  width: 100%;
  margin-top: 40px;
  background: #f9f9f9;
}

.Cart-top {
  width: 100%;
  position: fixed;
  height: 40px;
  background: #ffffff;
}
.Cart-bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 55px;
}

.Cart-top {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.bianji {
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.span1 {
  font-size: 18px;
}
.span2 {
  color: #888;
  margin-right: 10px;
}
.contener-warp {
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #fff;
  margin-top: 10px;
}

.fuwu {
  width: 95%;
  display: flex;
  flex-direction: row-reverse;
  background: #fff;
  margin: 0 auto;
}

.fuwu-div {
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.diva {
  border: 1px solid #cccccc;
  padding: 3px;
  font-size: 12px;
}
.divb {
  border: 1px solid #cccccc;
  padding: 3px;
  font-size: 12px;
}

.fuwu-div span {
  font-size: 12px;
}

.contener-warp input {
  margin-left: 10px;
}

.contener-warp > img {
  padding: 15px 10px 0 20px;
  width: 40%;
}

.icon-jiajian1 {
  font-size: 24px;
  color: #999999;
  margin-right: 10px;
}

.icon-jiajian {
  font-size: 24px;
  color: #999999;
  margin-left: 10px;
}
.spanaa {
  display: flex;
  align-items: center;
  margin-right: 10px;
}


.agin {
  width: 95%;
  background: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
}

.agin-img {
  width: 42%;
  display: flex;
  /* justify-content: space-between; */
  font-size: 12px;
}

.agin-img img {
  width: 6%;
}

.price {
  color: #ca141d;
}
.pei {
  width: 95%;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: row-reverse;
}

.pei-img {
  display: flex;
  width: 55%;
  font-size: 12px;
  /* justify-content: space-between; */
}

.span-pei {
  margin-left: 8px;
}

.imgpp {
  text-align: right;
}

.pei img {
  width: 5%;
}
.p1 {
  font-size: 14px;
  /* padding: 5px; */
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-break: break-all;
  word-wrap: break-word;
  color: #333;
}
.p2 {
  font-size: 12px;
  color: #666;
}
.div-p {
  padding-top: 10px;
}
.fenqi {
  border: 1px solid red;
  color: red;
  border-radius: 10px;
  width: 40%;
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
}
.warp {
  width: 95%;
  background: #fff;
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
}
.warp-i {
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.pac {
  width: 95%;
  margin: 0 auto;
  background: #fff;
  text-align: right;
  font-size: 12px;
  color: #ca141d;
}

.youhui {
  width: 95%;
  background: #fff;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
}

.warp-ul {
  width: 95%;
  background: #fff;
  margin: 0 auto;
}

.warp-ul ul {
  display: flex;
  overflow-x: auto;
}
</style>