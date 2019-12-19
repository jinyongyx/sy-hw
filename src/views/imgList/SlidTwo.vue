<template>
  <div class="img-swiper">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div>
          <img :src="item.img" alt />
          <div class="swiper-item-one">
            <p>{{item.favorable}}</p>
          </div>
        </div>
        <p class="pp">{{item.name}}</p>
        <p class="ppp">{{item.price}}<span style="text-decoration: line-through;font-size: 12px;color: #999999;">{{item.lodprice}}</span></p>
      </li>
    </ul>
    <div class="find">
        <p>发现更多笔记本></p>
        <div class="find-one">

        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImgSwiper",

  data() {
    return {
      list: [
        {
          img:
            "https://res1.vmallres.com/pimages//product/6901443179152/428_428_1539767984482mp.png",
          name: "HUAWEI MateBook E",
          price: "￥4288",
          lodprice:"",
          favorable: "二合一笔记本"
        },
        {
          img:
            "https://res1.vmallres.com/pimages//product/6901443359332/428_428_739FF2B29C5750758A69A39E3B6EF07435DC38B5D1C99188mp.png",
          name: "荣耀10青春版",
          price: "¥3199",
          lodprice:"￥3299",
          favorable: "直降100+赠背包&鼠标"
        },
        {
          img:
            "https://res1.vmallres.com/pimages//product/6901443209439/428_428_1542768417288mp.png",
          name: "HUAWEI MateBook D",
          price: "￥5188",
          lodprice:"",
          favorable: "金属一体化机身"
        },
        {
          img:
            "https://res1.vmallres.com/pimages//product/6901443333554/428_428_425567487650BEF6BE73040F24E41C61D219680D0D80FDF7mp.png",
          name: "荣耀MagicBook",
          price: "￥3499",
          lodprice:"￥3999",
          favorable: "最高领券减50"
        },
        {
          img:
            "https://res1.vmallres.com/pimages//product/6901443297726/428_428_1555752034219mp.png",
          name: "HUAWEI MateBook",
          price: "￥8999",
          lodprice:"￥",
          favorable: "3K触控全面屏"
        },
        {
          img:
            "https://res1.vmallres.com/pimages//product/6901443344949/428_428_1EB86162660FD51C6430A395BC0441BE2E327990E0343DCFmp.png",
          name: "荣耀畅玩7",
          price: "￥3999",
          lodprice:"￥4399",
          favorable: "最高降600+赠好礼"
        },
        {
          img:
            "https://res1.vmallres.com/pimages//product/6901443297801/428_428_1555904957186mp.png",
          name: "HUAWEI MateBook",
          price: "4699",
          lodprice:"",
          favorable: "2K触摸屏笔记本"
        },
        {
          img:
            "https://res1.vmallres.com/pimages//product/6901443298204/428_428_1554717601507mp.png",
          name: "荣耀9X PRO",
          price: "￥3999",
          lodprice:"",
          favorable: "金属轻薄微边框大视野"
        },
        {
          img:
            "https://res1.vmallres.com/pimages//product/6901443303236/428_428_1557135438924mp.png",
          name: "HUAWEI 蓝牙鼠标",
          price: "￥179",
          lodprice:"",
          favorable: "金属触感  品质享受"
        }
      ]
    };
  }
};
</script>
<style scoped>
.img-swiper {
  width: 100%;
  overflow: hidden;
}
.img-swiper ul {
  list-style: none;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
}
.img-swiper ul::-webkit-scrollbar {
  display: none;
}
.swiper-item-one {
  width: 90%;
  height: 20px !important;
  background: #f0f0f0 !important;
  position: absolute;
  top: 10px;
  left: -5px;
  line-height: 20px;
}
.pp {
  font-size: 12px;
  color: #333333;
  margin-top: 5px;
  margin-bottom: 5px;
}
.find {
    width: 100%;
    text-align: center;
    margin-top: 20px;
}
.find p {
    margin-bottom: 20px;
    font-size: 14px;
    color: #4a4a4a;
}
.ppp {
  font-size: 12px;
  color: #ca141d;
}
.find-one {
    width: 100%;
    height: 10px;
    background: #F9F9F9;
}
.swiper-item-one p {
  color: #9b9b9b;
}
.img-swiper ul li {
  text-align: center;
  margin-top: 10px;
  border-radius: 10px;
}
.img-swiper ul li div {
  width: 130px;
  height: 125px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
  color: #777777;
  border-radius: 15px;
  background: #f9f9f9;
  margin-bottom: -1px;
  position: relative;
}
.img-swiper ul li span {
  font-size: 12px;
}

.img-swiper ul li img {
  width: 87px;
  height: 87px;
  margin-left: 20px;
  margin-top: 10px;
}
</style>