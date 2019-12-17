<template>
  <div class="content-ba">
    <div class="container">
      <van-swipe :autoplay="3000" indicator-color="white">
         <van-swipe-item>
             <img class="img" src="https://res.vmallres.com/pimages//pages/picImages/tqAtLKSZOOvpHNTseJFe.jpg" alt />
         </van-swipe-item>
         <van-swipe-item>
                  <img class="img" src="https://res.vmallres.com/pimages//pages/picImages/SVyCQHZw2JzUEEqHqzdz.jpg" alt />
         </van-swipe-item>
         <van-swipe-item>
              <img class="img" src="https://res.vmallres.com/pimages//pages/picImages/ORoO4dljjG6pYaSAfu6x.jpg" alt />
         </van-swipe-item>
         <van-swipe-item>
              <img class="img" src="https://res.vmallres.com/pimages//pages/picImages/4FRoMLmudi56mCJFzH3j.jpg" alt />
         </van-swipe-item>
         <van-swipe-item>
              <img class="img" src="https://res.vmallres.com/pimages//pages/picImages/g3rthyWPGB3vIqMf0iAy.jpg" alt />
         </van-swipe-item>
         <van-swipe-item>
              <img class="img" src="https://res.vmallres.com/pimages//pages/picImages/0h8uIN7LzzuH8OareHkU.jpg" alt />
         </van-swipe-item>
         <van-swipe-item>
              <img class="img" src="https://res.vmallres.com/pimages//pages/picImages/QBJKN5ffAIcHhL3USGJj.jpg" alt />
         </van-swipe-item>

      </van-swipe>

      <div class="swiper-contener">
        <div class="swiper-contener-top">
          <ul>
            <li>
              <i class="iconfont icon-zhengpinbaozhangduigou"></i> 官方商城
            </li>
            <li>
              <i class="iconfont icon-zhengpinbaozhangduigou"></i> 正品保障
            </li>
            <li>
              <i class="iconfont icon-zhengpinbaozhangduigou"></i> 售后无忧
            </li>
          </ul>
        </div>
        <div class="swiper-contener-center">
          <ul>
            <li class="swiper-contener-center-one">
              <img src="../assets/imges/a.png" alt />
              <p>会员领劵</p>
            </li>
            <li class="swiper-contener-center-one">
              <img src="../assets/imges/b.png" alt />
              <p>以旧换新</p>
            </li>
            <li class="swiper-contener-center-one">
              <img src="../assets/imges/c.png" alt />
              <p>5G频道</p>
            </li>
            <li class="swiper-contener-center-one">
              <img src="../assets/imges/d.png" alt />
              <p>众测</p>
            </li>
            <li class="swiper-contener-center-one">
              <img src="../assets/imges/e.png" alt />
              <p>分享赚</p>
            </li>
          </ul>
        </div>
        <div class="swiper-contener-bommont">
          <div class="channel-headline">
            <div class="swiper-contener-bommont-one">
              <span>商城头条</span>
            </div>
            <div class="swiper-chriden">
              <div class="textBox">
                  <transition name="slide">
                    <p class="text" :key="text.id">{{text.val}}</p>
                  </transition>
                </div>
            </div>
            <div class="chriden-span">
              <span>更多</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          type:"fraction"
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      },

      textArr: [
        "MUI10新改变，给你一个清净的通知栏",
        "参与留言免费赢同程艺龙千元机票",
        "带你全面了解华为MatePad pro",
        "【黑科技大揭秘】智慧屏的AI慧眼，究竟有什么秘密",
        "【互动赢机票】华为商城nova6主题航班，带你5G速度告别寒冬",
        "EMUI10新改变，给你一个清净的通知栏",
        "参与留言免费赢同程艺龙千元机票"
      ],
      number: 0
    };
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number]
      };
    }
  },
  mounted() {
    this.startMove();
  },
  methods: {
    startMove() {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
    }
  }
};
</script>
<style scoped>
 @import "../css/content.css";

.img {
  width: 360px;
  height: 150px;
  border-radius: 15px;
  margin-left: 8px;
}
</style>