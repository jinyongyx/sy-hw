<template>
  <div class="Iphon">
    <ul>
      <li @click="ImgClick(index)" v-for="(item,index) in this.$store.state.list" :key="index">
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
    };
  },
  methods:{
    ImgClick(index){
      window.console.log(111)
      this.$router.push({ path:"Commodity"})
      this.$store.commit("ImgClick",index)
    }
  }
  // methods: {
  //   ImgClick(item) {
  //     this.$router.push({ path: "Commodity", query: { price: item.price,
  //                                                     name:item.name,
  //                                                     img:item.img } });
  //   }
  // }
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