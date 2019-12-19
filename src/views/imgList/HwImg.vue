<template>
  <div class="hw-img">
      <div class="hw-img-one">
          <div class="img">
              <img src="https://res.vmallres.com/pimages//pages/picImages/MMiRiuQmrjQkrQ1aFmfE.png" alt="">
          </div>
          <div class="twoImg">
              <div><img src="https://res.vmallres.com/pimages//pages/picImages/xtLHt61S64sDZDCDCyjA.jpg" alt=""></div>
              <div><img src="https://res.vmallres.com/pimages//pages/picImages/k4VkPo1SoJoTDdj9dhXo.jpg" alt=""></div>
          </div>
      </div>
      <ul>
          <li v-for="(item,index) in list" :key="index">
              <img class="ul-img" :src="item.img" alt="">
          </li>
      </ul>
      <div class="hw-img-boomont">
          <ul>
              <li v-for="(item,index) in ImgList" :key="index">
                  <div class="bao-li">
                      <img :src="item.img" alt="">
                  </div>
                  <p>{{item.name}}</p>
                  <p>{{item.activity}}</p>
                  <p>{{item.price}}<span>{{item.locstodry}}</span></p>
              </li>
          </ul>
      </div>
      <Build></Build>
      <Slide></Slide>
      <div class="sigle">

      </div>
      <CataLog></CataLog>
      
    <Iphon></Iphon>
    
    <Slidoomont></Slidoomont>
    <Find></Find>
    <div class="aee">

    </div>
    
    <Ear></Ear>
  </div>
</template>
<script>
import CataLog from "./Catalog"
import Iphon from "./Iphon"
import Slide from "./Slide"
import Build from "./Build"
import Slidoomont from "./SlidBoomone"
import Find from "./Find"
import Ear from "./Ear"
export default {
    components:{
        CataLog,
        Iphon,
        Slide,
        Build,
        Slidoomont,
        Find,
        Ear,

    },
    data () {
        return {
            list:[
                {
                    img:"https://res.vmallres.com/pimages//pages/picImages/7yKqswFOuRdGYl3jhbwc.png"
                },
                {
                    img:"https://res.vmallres.com/pimages//pages/picImages/PEVrlnf1QNutfQDgyyzG.jpg"
                },
                {
                    img:"https://res.vmallres.com/pimages//pages/picImages/7yKqswFOuRdGYl3jhbwc.png"
                },
                {
                    img:"https://res.vmallres.com/pimages//pages/picImages/xCLqQbDyIIHOyIGMJ6bY.jpg"
                },
            ],
            ImgList:[
                {
                    img:"https://res.vmallres.com/pimages//product/6901443356126/428_428_21A7667FA769CBD35B1B4977DF61F62E011DB64E3FDCA71Bmp.png",
                    name:"HUAWEI NOVA 5z",
                    activity:"4800万AI四摄",
                    price:"￥1399",
                    locstodry:"￥1599"
                },
                {
                    img:"https://res.vmallres.com/pimages//product/6901443298266/428_428_601840E8BF7FBC4F52B4F6F4182879C18D071F3DD138F1C3mp.png",
                    name:"荣耀20i",
                    activity:"最高降600元",
                    price:"￥1099",
                    locstodry:"￥1599"
                },
                {
                    img:"https://res.vmallres.com/pimages//product/6901443331406/428_428_8F36176EACD6DA14395E92D7387FCD4C55D6785CF6F85674mp.png",
                    name:"HUAWEI Mate 30",
                    activity:"Pro",
                    price:"￥5799",
                    locstodry:""
                },
            ]
        }
    }
};
</script>
<style scoped>
    .hw-img {
        width: 100%;
        height: 520px;
        margin-top: 13px;
    }
    .hw-img-one {
        width: 100%;
        height: 255px;
        display: flex;
        margin-left: 4px;
    }
    .img {
        width: 48%;
        height: 100%;
    }
    .img img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 10px;
    }
    .twoImg {
        width: 48%;
        height: 100%;
        margin-left: 4px;
    }
    .twoImg img {
        width: 100%;
        height: 125px;
    }
    .hw-img ul{
        list-style: none;
        width: 100%;
        height: 256px;
        margin-top: 3px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .hw-img ul li {
        width: 49%;
        height: 49%;
    }
    .ul-img {
        width: 100%;
        height: 100%;
    }

    .hw-img-boomont {
        width: 100%;
        height: 165px;
    }
    .hw-img-boomont ul {
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }
    .hw-img-boomont ul li {
        width: 33%;
        height: 100%;
        background: #F9F9F9;
    }
    .bao-li {
        width: 80%;
        height: 55%;
        margin: 12px;
    }
    .bao-li img {
        width: 100%;
        height: 100%;
    }

    .hw-img-boomont ul li p:nth-child(2){
        font-size: 12.5px;
        text-align: center;
        color: #333333;
    }

    .hw-img-boomont ul li p:nth-child(3) {
        font-size: 12px;
        color: #9b9b9b;
        text-align: center;
    }

    .hw-img-boomont ul li p:nth-child(4) {
        font-size: 12.5px;
        color: #333333;
        text-align: center;
    }
    .hw-img-boomont ul li p:nth-child(4) span {
        font-size: 10px;
        color: #999999;
        text-decoration: line-through;
    }
    .sigle {
        width: 100%;
        height: 10px;
        background: #F9F9F9;
        margin-bottom: 20px;
        margin-top: 50px;
    }
    .aee {
        width: 100%;
        height: 10px;
        background: #F9F9F9;
        margin-top: -25px;
    }
</style>

