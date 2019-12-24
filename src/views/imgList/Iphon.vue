<template>
  <div class="Iphon">
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="ImgClick(item)">
        <div class="Iphon-div">
          <p>{{item.activty}}</p>
        </div>
        <img :src="item.img" alt />
        <p class="p1">{{item.name}}</p>
        <p class="p2">
          {{item.price}}
          <span
            style="text-decoration: line-through;font-size: 12px;color: #999999"
          >{{item.lodPrice}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          img:
            "https://res0.vmallres.com/pimages//wapFrontLocation/content/2jT753IeBsCTOJ7Qqngj.jpg",
          name: "HUAWEI nova 5 Pro",
          price: "￥2699",
          lodPrice: "",
          activty: "4800万AI四摄"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//wapFrontLocation/content/c2g7OGsVaqREjHkU3rh2.jpg",
          name: "荣耀20青春版",
          price: "1099",
          lodPrice: "1399",
          activty: "最高优惠300"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//wapFrontLocation/content/4DYVvuQTkeQHlxa1NGzg.jpg",
          name: "华为畅享10 Plus ",
          price: "￥1399",
          lodPrice: "",
          activty: "购机赠耳机"
        },
        {
          img:
            "https://res0.vmallres.com/pimages//wapFrontLocation/content/h6OXsIBJCoz1hVaVPSPj.jpg",
          name: "荣耀Note10",
          price: "￥1599",
          lodPrice: "¥1999",
          activty: "省600元赠配件到手1399起"
        }
      ]
    };
  },

  methods: {
    ImgClick(item) {
      this.$router.push({ path: "Commodity", query: { price: item.price,
                                                      name:item.name,
                                                      img:item.img } });
    }
  }
};
</script>
<style scoped>
.Iphon {
  width: 100%;
  height: 476.5px;
}
.Iphon ul {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.Iphon ul li {
  width: 49%;
  height: 49%;
  position: relative;
}
.Iphon ul li img {
  width: 100%;
  height: 75%;
  border-radius: 10px;
}
.Iphon-div {
  width: 100%;
  height: 12%;
  position: absolute;
  top: 145px;
  opacity: 0.3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.Iphon-div span {
  text-decoration: line-through;
  font-size: 12px;
  color: #333333;
}
.Iphon-div p {
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  line-height: 25px;
}
.p1 {
  color: #333333;
  font-size: 13px;
  text-align: center;
}
.p2 {
  color: #ca141d;
  font-size: 13px;
  text-align: center;
}
</style>