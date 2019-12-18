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
            "https://res.vmallres.com/pimages//product/6901443361601/428_428_043BBBF55C69CCDB183C8BA0489A59984DB78229BDDD4E83mp.png",
          name: "HUAWEI MatePad Pro",
          price: "￥3299",
          lodprice:"",
          favorable: "麒麟990旗舰芯片"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443323753/428_428_189FA79392B572C21EE009917E689200B6B6089FEB1C4ED9mp.png",
          name: "荣耀20S",
          price: "¥1599",
          lodprice:"￥1899",
          favorable: "最高优惠300"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443363667/142_142_4BD15480463D42B9320C9662596529FB35624E9AEB952EF4mp.png",
          name: "HUAWEI P30 Pro",
          price: "￥4488",
          lodprice:"",
          favorable: "赠好礼|享6期免息"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443315376/428_428_1563876645993mp.png",
          name: "荣耀20 PRO",
          price: "￥2699",
          lodprice:"￥3199",
          favorable: "直降500元|6期免息"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443293780/428_428_1555465196488mp.png",
          name: "HUAWEI P30",
          price: "￥3688",
          lodprice:"",
          favorable: "赠好礼|享6期免息"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443330072/428_428_4F7A28319288E3C8597E4F7BAE55E06CD05F99E76B097121mp.png",
          name: "荣耀Play3",
          price: "￥1299",
          lodprice:"",
          favorable: "低至899元"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443355143/428_428_E455CEB7FFF0BBC92512AF0B51F5A56BEB1E459385B1B22Emp.png",
          name: "HUAWEI nova 5i",
          price: "1799",
          lodprice:"",
          favorable: "赠配件好礼"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443320394/428_428_1563504284133mp.png",
          name: "荣耀9X PRO",
          price: "￥1999",
          lodprice:"￥2999",
          favorable: "优惠200"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443331109/428_428_9DF9BF94A5C5575108AF27F42DEEA8415F70E58F97882DEDmp.png",
          name: "HUAWEI Mate 30",
          price: "￥4299",
          lodprice:"",
          favorable: "享12期免息"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png",
          name: "荣耀Magic2",
          price: "￥1999",
          lodprice:"￥3799",
          favorable: "最高优惠2300元"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443316496/428_428_1563762865294mp.png",
          name: "nova 5i Pro",
          price: "￥1799",
          lodprice:"",
          favorable: "限量赠华为自拍杆"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443258598/428_428_1550885972978mp.png",
          name: "荣耀8X Max",
          price: "￥999",
          lodprice:"￥1799",
          favorable: "最高降800元"
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
}
.pp {
  font-size: 12px;
  color: #333333;
  margin-top: 5px;
  margin-bottom: 5px;
}

.ppp {
  font-size: 12px;
  color: #ca141d;
}

.swiper-item-one p {
  color: #9b9b9b;
}
.img-swiper ul li {
  text-align: center;
  margin-top: 10px;
  margin-right: 3px;
  border-radius: 10px;
}
.img-swiper ul li div {
  width: 120px;
  height: 115px;
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
  margin-left: 15px;
}
</style>