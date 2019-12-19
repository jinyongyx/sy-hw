<template>
    <div class="ear">
        <div class="ear-one">
            <p>智能穿戴</p>
        </div>
        <div class="ear-two">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="ear-two-div">
                        <div class="ear-img">
                        <img :src="item.img" alt="">
                        </div>
                        <div class="div-tan">
                            <p>{{item.activity}}</p>
                        </div>
                        <p class="P">{{item.name}}</p>
                        <P class="p2">{{item.price}}<span class="span">{{item.lodeprice}}</span></P>
                    </div>
                </li>
            </ul>
        </div>
        <SlideTwo></SlideTwo>
        <EarThree></EarThree>
    </div>
</template>
<script>
import SlideTwo from "./SlidTwo"
import EarThree from "./EarThree"
export default {
    components:{
        SlideTwo,
        EarThree
    },
    data () {
        return {
            list:[
                {
                    img:"https://res3.vmallres.com/pimages//wapFrontLocation/content/4GYlwTf1AlPqhOHhwHqz.jpg",
                    name:"HUAWEI WATCH GT 2",
                    price:"￥1388",
                    lodeprice:"",
                    activity:"强劲续航 独立音乐播放"
                },
                {
                    img:"https://res3.vmallres.com/pimages//wapFrontLocation/content/KmXaDRx2pPiKPo3SvcCB.jpg",
                    name:"荣耀手表梦幻系列",
                    price:"￥999",
                    lodeprice:"￥1099",
                    activity:"3期免息 到手价699起"
                },
                {
                    img:"https://res3.vmallres.com/pimages//wapFrontLocation/content/mbybc0ibuTlA9bDFbD6O.jpg",
                    name:"NFC智能刷卡",  
                    price:"￥399",
                    lodeprice:"",
                    activity:"华为手环 4 Pro"
                },
                {
                    img:"https://res3.vmallres.com/pimages//wapFrontLocation/content/e0qEkhIlOslRsJ6XB09N.jpg",
                    name:"荣耀手表魔法系列",
                    price:"￥699",
                    lodeprice:"￥799",
                    activity:"3期免息 到手价699起"
                },
            ]
        }
    }
}
</script>
<style scoped>
.ear {
    width: 100%;
    height: 740px;
}
.ear-one {
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #444444;
    margin-bottom: 10px;
}
.ear-img {
    width: 80%;
    height: 80%;
    margin-left: 15px;
    margin-bottom: 10px;
}
.ear-img img {
    width: 100%;
    height: 100%;
}
.ear-two {
    width: 100%;
    height: 460px;
}

.ear-two ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.P {
    font-size: 12PX;
    color: #333;
    text-align: center;
}
.p2 {
    font-size: 12px;
    color: #CA141d;
    text-align: center;
}
.span {
    font-size: 12px;
    text-decoration: line-through;
    color: #999;
}
.ear-two ul li {
    width: 48%;
    height: 48%;;
    border-radius: 10px;
}
.ear-two-div {
    width: 100%;
    height: 75%;
    border-radius: 10px;
    background: #f9f9f9;
    /* display: flex;
    flex-direction: column-reverse; */
}

.div-tan {
    width: 100%;
    height: 15%;
    background: rgb(155, 155, 155,0.1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #9b9b9b;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
}

</style>