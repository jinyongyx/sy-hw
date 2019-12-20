<template>
  <div class="item-endetime">
    <div>
      <span class="item-endetime-span">限时购</span>
      <i class="iconfont icon-shandian"></i>
      <p><span>{{hour}}</span> :
        <span>{{minute}}</span> :
        <span>{{second}}</span>
      </p>
      <span class="nthSpan">后结束</span>
    </div>
  </div>
</template>
<script>

export default {
 data() {
    return {
      hour:"",
      minute:"",
      second:"",
      countDownList: "00天00时00分00秒",
      actEndTime: "2020-1-20 10:00:00"
    };
  },
 
  created() {
    this.countDown();
  },
  methods: {
    timeFormat(param) {
      return param < 10 ? "0" + param : param;
    },
    countDown() {
      var interval = setInterval(() => {
        // 获取当前时间，同时得到活动结束时间数组
        let newTime = new Date().getTime(); // 对结束时间进行处理渲染到页面
        let endTime = new Date(this.actEndTime).getTime();
        let obj = null; // 如果活动未结束，对时间进行处理

        window.location
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000; // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt((time % (60 * 60 * 24)) / 3600);
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else {
          // 活动已结束，全部设置为'00'
          obj = {
            day: "00",
            hou: "00",
            min: "00",
            sec: "00"
          };
          clearInterval(interval);
        }
        this.hour = obj.hou;
        this.minute = obj.min;
        this.second = obj.sec
          
      }, 1000);
    }
  }
};
</script>
<style scoped>
.item-endetime {
  width: 60%;
  margin: 0 80px;
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

.nthSpan {
  font-size: 12px;
  color: #777777;
  line-height: 180%;
}
</style>