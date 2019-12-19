<template>
    <div class="ear">
        <div class="ear-one">
            <p>精品平板</p>
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
        <EarTwo></EarTwo>
    </div>
</template>
<script>
import SlideTwo from "./SlidTwo"
import EarTwo from "./EarTwo"
export default {
    components:{
        SlideTwo,
        EarTwo
    },
    data () {
        return {
            list:[
                {
                    img:"https://res1.vmallres.com/pimages//product/6901443292417/428_428_1555751874478mp.png",
                    name:"HUAWEI MateBook 14",
                    price:"￥5999",
                    lodeprice:"",
                    activity:"手机电脑一碰即传"
                },
                {
                    img:"https://res1.vmallres.com/pimages//product/6901443360079/428_428_F8153CC7347BAB26F866B5345DBECA13F2E274CEBC4D15C5mp.png",
                    name:"荣耀MagicBook 14",
                    price:"￥3699",
                    lodeprice:"￥3899",
                    activity:"直降200+赠背包&鼠标"
                },
                {
                    img:"https://res1.vmallres.com/pimages//product/6901443274901/428_428_1544775471623mp.png",
                    name:"HUAWEI MateBook 13",  
                    price:"￥5999",
                    lodeprice:"",
                    activity:"2K全面屏笔记本"
                },
                {
                    img:"https://res1.vmallres.com/pimages//product/6901443330744/428_428_52F045B3A4ADEA60CD2CB0B1E1A203FE6A34A56891A300CDmp.png",
                    name:"荣耀 MagicBook Pro",
                    price:"￥4299",
                    lodeprice:"￥4699",
                    activity:"最高降400+赠好礼"
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