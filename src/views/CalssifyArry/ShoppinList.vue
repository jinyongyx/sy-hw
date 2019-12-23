<template>
  <div class="ShoopingList">
    <div class="ShoopingList-p">
      <p>购物车</p>
    </div>
    <div class="ShoopingList-contener">
      <div class="gouwuce">
        <i class="iconfont icon-icon22fuzhi"></i>
      </div>
      <p class="ShoopingList-contener-p">您的购物车没有商品</p>
      <div class="radiuse">
          <router-link to="/">
        <span>去购物</span>
        </router-link>
      </div>
      <p class="hot">热销推荐</p>
    </div>
    <div class="with">
      <ul class="ShoopingList-ul">

        <li v-for="(item,index) in list" :key="index">
          <div class="a">
            <img
              :src="item.img"
              alt
            />
            <div class="cc">
              <i class="iconfont icon-gouwuchekong"></i>
            </div>
          </div>
          <p class="p1">{{item.name}}</p>
          <p class="p2">{{item.price}}</p>
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
                    img:"https://res.vmallres.com/pimages/product/6901443353170//428_428_ACF04CEA5203ABB146D3CA5FBC29E737FAB3F8E8D961A164mp.png",
                    name:"Mate 30 Pro 5G",
                    price:"￥6899"
                },
                {
                    img:"https://res.vmallres.com/pimages/product/6901443356904//428_428_FF89E07076590562DF095FCD47FD0C824121FD0D89A445CEmp.png",
                    name:"荣耀V30",
                    price:"￥3299"
                },
                {
                    img:"https://res.vmallres.com/pimages/product/6901443344697//428_428_C72517A4938F09A0E087E77DAE4A882A2A80674FAAC94C20mp.png",
                    name:"HUAWEI FreeBuds 3",
                    price:"￥1199"
                },
                {
                    img:"https://res.vmallres.com/pimages/product/6901443304349//428_428_1558245073712mp.png",
                    name:"荣耀20",
                    price:"￥2090"
                },
                {
                    img:"https://res.vmallres.com/pimages/product/6901443320202//428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png",
                    name:"HUAWEI WATCH GT 2",
                    price:"￥1488"
                },
                {
                    img:"https://res.vmallres.com/pimages/product/6901443321339//428_428_1563503515663mp.png",
                    name:"荣耀9X",
                    price:"￥1199"
                },
            ]
        }
    }
};
</script>

<style scoped>
.ShoopingList {
  width: 100%;
  background: #f9f9f9;
}
.ShoopingList-p {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.ShoopingList-p p {
  padding: 15px;
}
.ShoopingList-contener {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-icon22fuzhi {
  font-size: 88px;
  color: #cccccc;
}

.with {
  width: 100%;
}

.gouwuce {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.ShoopingList-contener-p {
  color: #999999;
  font-size: 14px;
}
.a {
  width: 100%;
  position: relative;
  display: flex;
}
.cc {
  position: absolute;
  top: 10px;
  right: 20px;
  background: #F3F3F3;
  border-radius: 50%;
}
.radiuse {
  width: 95px;
  height: 30px;
  border: 1px solid #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 20px;
}

.hot {
  color: #333333;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
}

.ShoopingList-ul {
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
    margin-bottom: 70px;
}

.ShoopingList-ul li {
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 5px;
}

.ShoopingList-ul li img {
  width: 85%;
  padding: 10px 10px;
}

.p1 {
  font-size: 12px;
}
.p2 {
  font-size: 12px;
  color: red;
}
</style>