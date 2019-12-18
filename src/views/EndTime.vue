<template>
  <div class="item-endetime">
    <div>
      <span class="item-endetime-span">
        限时购
      </span>
      <i class="iconfont icon-shandian"></i>
      <p>{{time}}</p>
      <span>后结束</span>
    </div>
  </div>
</template>
 
 
 
<script>
export default {
  props: {
    endTime: {
      type: String
    }
  },
  data() {
    return {
      time: "",
      flag: false
    };
  },
  created() {
    let time = setInterval(() => {
      if (this.flag == true) {
        clearInterval(time);
      }
      this.timeDown();
    }, 1000);
  },

  methods: {
    timeDown() {
      const endTime = new Date(this.endTime);
      const nowTime = new Date();
      let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
      let h = this.formate(parseInt((leftTime / (60 * 60)) % 24));
      let m = this.formate(parseInt((leftTime / 60) % 60));
      let s = this.formate(parseInt(leftTime % 60));
      if (leftTime <= 0) {
        this.flag = true;
        this.$emit("time-end");
      }
      this.time = `${h}:${m}:${s}`;
    },
    formate(time) {
      if (time >= 10) {
        return time;
      } else {
        return `0${time}`;
      }
    }
  }
};
</script>
<style scoped>
.item-endetime {
  width: 60%;
  margin: 0 100px;
  position: relative;
}
.item-endetime div {
  display: flex;
  position: relative;
  top: 10px;
}
.item-endetime-span {
    position: relative;
    top: 0;
    left: 10px;
}
.item-endetime p {
    position: relative;
    right: 10px;
}
.item-endetime i {
  margin-left: 10px;
  color: red;
  font-size: 18px;
}

.item-endetime span:last-child {
  font-size: 12px;
  color: #777777;
  line-height: 180%;
}
</style>