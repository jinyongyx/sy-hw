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
            "https://res0.vmallres.com/pimages//product/6901443352685/428_428_8A2025793A107CA11BE7E0A1554665EAD00274E1F37690FDmp.png",
          name: "华为畅享10 Plus",
          price: "￥1599",
          lodprice:"",
          favorable: "最高领券减100"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443273959/428_428_1555729935843mp.png",
          name: "荣耀10青春版",
          price: "¥899",
          lodprice:"￥1399",
          favorable: "最高降600元"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443355143/428_428_E455CEB7FFF0BBC92512AF0B51F5A56BEB1E459385B1B22Emp.png",
          name: "HUAWEI nova 5i",
          price: "￥1799",
          lodprice:"",
          favorable: "赠配件好礼"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443354962/428_428_83E26E25EA9423FB41DCC2769579FBA747AD844EF9D08041mp.png",
          name: "华为畅享10",
          price: "￥1399",
          lodprice:"",
          favorable: "最高领券减50"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443331635/428_428_B510A01A2C3182A58046679623ADF298DB8AF277F20AD9DDmp.png",
          name: "HUAWEI Mate 20 X (5G)",
          price: "￥5699",
          lodprice:"￥6199",
          favorable: "5G双模全网通"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443349982/428_428_D9838015447B5F29A5FC62DA43885B22465BD78549010CDCmp.png",
          name: "荣耀畅玩7",
          price: "￥549",
          lodprice:"￥599",
          favorable: "最高优惠100元"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443278138/428_428_1544693593610mp.png",
          name: "HUAWEI nova 4",
          price: "2699",
          lodprice:"",
          favorable: "拼团优惠1000"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443277759/428_428_1546504290406mp.png",
          name: "荣耀9X PRO",
          price: "￥599",
          lodprice:"￥799",
          favorable: "最高优惠200"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443316397/428_428_1561434100081mp.png",
          name: "HUAWEI nova 5  ",
          price: "￥2599",
          lodprice:"",
          favorable: "限量赠礼"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443310746/428_428_1562638774891mp.png",
          name: "荣耀畅玩8",
          price: "￥599",
          lodprice:"",
          favorable: "购机晒单抽好礼"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443323340/428_428_7C1CB8972D5541B58EAD394BB2686BE3897353C35C1603FFmp.png",
          name: "领券立减50",
          price: "￥1599",
          lodprice:"",
          favorable: "领券立减50"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//product/6901443292158/428_428_1552440711426mp.png",
          name: "HUAWEI nova 4e",
          price: "￥1799",
          lodprice:"",
          favorable: "3200万立体美颜"
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
  top: 15px;
  left: -5px;
  line-height: 20px;
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
  border-radius: 10px;
}
.img-swiper ul li div {
  width: 120px;
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
  margin-left: 15px;
  margin-top: 5px;
}
</style>