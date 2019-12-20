<template>
    <div class="Discavey">
        <p>发现频道</p>
        <div class="Discavey-img">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.text}}</span>
                </li>
            </ul>
            <div class="title">
                <span class="title-span">商城头条</span>
                <div class="span-icon">
                <span>声明</span><i class="iconfont icon-zhuyishixiang_l"></i>
                </div>
            </div>
        </div>
        <div class="img-swiper">
    <ul>
      
      <li v-for="(item,index) in arr" :key="index">
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
    </div>
</template>
<script>
export default {
        data () {
            return {
                list:[
                    {
                        img:"https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_headline.png",
                        text:"商城公告"
                    },
                    {
                        img:"https://res.vmallres.com/pimages//cop/image/2019/tiHS593NPXbqgwfT47xk.png",
                        text:"企业购"
                    },
                    {
                        img:"https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_fans.png",
                        text:"粉丝互动"
                    },
                    {
                        img:"https://res.vmallres.com/pimages///cop/image/2019/nwylDYIPCm4pn2hNwA46.png",
                        text:"视频专区"
                    },
                    {
                        img:"https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_public_surver.png",
                        text:"华为众测"
                    },

                ],
                arr:[
                    {
                        img:"https://res.vmallres.com/pimages/cop/newType/92ME2SypV9gvDJPOsPH8.png",
                    },
                    {
                        img:"https://res.vmallres.com/pimages/cop/newType/YVZoCF8B6yp7t0AckfrY.png",
                    },
                    {
                        img:"https://res.vmallres.com/pimages/cop/newType/gVFhFTMl1zhmAoCiXX69.png",
                    },
                    {
                        img:"https://res.vmallres.com/pimages/cop/newType/0JkZba0fXbu73EJDCKps.png",
                    },
                    {
                        img:"https://res.vmallres.com/pimages/cop/newType/RXRlTtaCvzSJPq46bp46.png",
                    },
                ]
            }
        }
}
</script>
<style scoped>
.Discavey {
    width: 100%;
}

.Discavey p {
    font-size: 19px;
    color: #191919;
    padding: 10px 0 10px 0;
    text-align: center;
    margin-bottom: 20px;
}

.Discavey-img {
    width: 100%;
}

.Discavey-img ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
}

.Discavey-img ul li {
    width: 14%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5px;
    align-items: center;
}

.Discavey-img ul li img {
    width: 100%;
}

.Discavey-img ul li span {
    font-size: 12px;
    color: #9b9b9b;
    white-space:nowrap;
}

.title {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-span {
    display: inline-block;
    width: 75%;
    font-size: 19px;
    color: #333333;
    margin-left: 40px;
}

.span-icon {
    font-size: 12px;
    color: #999999;
}

.icon-zhuyishixiang_l {
    font-size: 10px;
}

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
    /* width: 25%; */
}

</style>