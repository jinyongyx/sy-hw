<template>
  <div class="img-swiper">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div>
          <img
            :src="item.img"
            alt
          />
          <span>{{item.name}}</span>
        </div>
        <span class="img-swiper-span">{{item.favorable}}</span>
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
            "https://res.vmallres.com/pimages//product/6901443363667/142_142_4BD15480463D42B9320C9662596529FB35624E9AEB952EF4mp.png",
          name: "华为智慧...",
          favorable: "定金100抵扣500"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443280988/142_142_1545877216682mp.png",
          name: "VR Glass",
          favorable: "荣耀V20"
        },
        {
          img:
            "https://res.vmallres.com/pimages//pages/rushBuy/nh8M195uH5jZoTabfwaL.png",
          name: "VR Glass",
          favorable: "定金100抵扣300"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443330744/142_142_52F045B3A4ADEA60CD2CB0B1E1A203FE6A34A56891A300CDmp.png",
          name: "MagicBo...",
          favorable: "最高至降400"
        },

        {
          img:
            "https://res.vmallres.com/pimages//product/6901443356119/142_142_9A00005687A3E0D2ACDD61DDF68AD418186756AF61458CDBmp.png",
          name: "HUAWEI...",
          favorable: "老用户优惠50"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443270385/142_142_1545268730575mp.png",
          name: "FlyPods青...",
          favorable: "349元"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443253975/142_142_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png",
          name: "荣耀Note10",
          favorable: "1399元"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443357536/142_142_712A71615421119ACF84328480400141B4B98E8CF9DC40C8mp.png",
          name: "FreeBuds...",
          favorable: "新色上市"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443293209/142_142_0487E040C660EAA567DE8490112CC938862A01BE09FD95D8mp.png",
          name: "荣耀智慧...",
          favorable: "最高优惠800"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443347032/142_142_1A809F8C924A2812E378A60181704C516B8C09C9F03EFD19mp.png",
          name: "智能体脂...",
          favorable: "新品热销"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443329311/142_142_561C2ED93B044859B0625F5B1E46740EB7854ED7A986D09Cmp.png",
          name: "荣耀无线...",
          favorable: "169元"
        },
        {
          img:
            "https://res.vmallres.com/pimages//product/6901443287697/142_142_1553502823158mp.png",
          name: "华为手表GT",
          favorable: "现货速发"
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
.img-swiper ul li {
    text-align: center;
    margin-top: 10px;
}
.img-swiper ul li div {
  width: 76px;
  height: 90px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
  color: #777777;
  background: #ffffff;
  border-radius: 15px;
  margin-bottom: -1px;
}
.img-swiper ul li span{
    font-size: 12px;
}

.img-swiper ul li img {
  width: 63.53px;
  height: 63.53px;
  margin-left: 5px;
  margin-top: 5px;
}
.img-swiper-span {
    color: #CA141D;
    display: inline-block;
}
</style>