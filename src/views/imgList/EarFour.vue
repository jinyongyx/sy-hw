<template>
    <div class="EarThree">
        <p class="Three-p">
            <span>登录</span>|
            <span>反馈</span>
        </p>
        <div class="hr"></div>
        <div class="Three-img">
            <ul>
                <li>
                    <i class="iconfont icon-shouji font"></i>
                    <p>客户端</p>
                </li>
                <li>
                    <i class="iconfont icon-chumo font"></i>
                    <p>触摸板</p>
                </li>
                <li>
                    <i class="iconfont icon-diannao font"></i>
                    <p>电脑版</p>
                </li>
            </ul>
        </div>
        <p class="p">Copyright 2012-2019  VMALL.COM 版权所有</p>
        <p class="p"><span>营业执照</span><span>备案主体编号：44201919072182</span></p>
        <p class="p"><span>粤ICP备19015064号</span><span>粤公网安备 44190002003939号</span></p>
        <p class="p">增值电信业务经营许可证：粤B2-20190762</p>
        <a href="#spps" class="abc" v-show="gotop" @click="toTop">
            <i class="iconfont icon-huidaodingbu1"></i>
        </a>
    </div>
</template>
<script>
export default {
    name:'scroll',
    data () {
        return {
            gotop:false
        }
    },

    mounted() {
    window.addEventListener("scroll", this.topScroll, true)
  },
  methods: {
    topScroll(e) {
      let scrolltop = e.target.scrollTop
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false)
    },
    toTop() {
        // let scrolltop = e.target.scrollTop
        // window.console.log(scrolltop)
        // window.scrollTo(0,0)
    let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        } else {
          clearInterval(back);
        }
      });
    }
  }

    

}
</script>
<style scoped>
.EarThree{
    width: 100%;
    height: 210px;
}
.abc {
    position: fixed;
    right: 10px;
    bottom: 80px;
    background: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.abc>i {
    font-size: 34px;
    color: #9b9b9b;
}
.Three-p {
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px;
}
.Three-p span {
    margin-right: 20px;
    margin-left: 20px;
    font-size: 16px;
    color: #333;
}
.hr {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #F8F8F8;
}
.Three-img ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    color: #9b9b9b;
}

.Three-img ul li {
    margin: 20px;
}
.Three-img ul li>p {
    font-size: 12px;
    text-align: center;
}
.font {
    font-size: 28px;
    margin-left: 5px;
}
.p {
    font-size: 12px;
    color: #9b9b9b;
    text-align: center;
}
</style>