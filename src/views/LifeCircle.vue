<template>
  <div class="about">
    <!-- <zk-time-down :endTime='endTime' v-show="show1"></zk-time-down> -->
    <div class="menu">
      <nav>生活圈</nav>

      <div ref="sellerSlider" class="scroll">
        <ul class="scroll-box">
          <div @click="show1" class="time-down menu-box">
            <div class="text">
              <p>高考倒计时</p>
              <p>一日一之计在于晨</p>
            </div>
          </div>
          <div @click="show2" class="menu-box message">
            <div class="text">
              <p>高考资讯</p>
              <p>时刻关注高考动态</p>
            </div>
          </div>
          <div @click="show3" class="menu-box other">
            <div class="text">
              <p>高考倒计时</p>
              <p>一日一之计在于晨</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// import BScroll from "better-scroll";
export default {
  data() {
    return {
      endTime: "2020-06-07 00:00:00"
    };
  },
  methods: {
    show1() {
      // this.show1=true
      this.$router.push({
        name: "homeTimer",
        params: { endTime: this.endTime }
      });
    },
    show2() {
      // this.show1=true
      this.$router.push({
        name: "message",
        params: {}
      });
    },
    show3() {
      // this.show1=true
      this.$router.push({
        name: "homeTimer",
        params: { endTime: this.endTime }
      });
    },
    // _initSellerSliderScroll() {
    //   this.$nextTick(() => {
    //     // if (this.seller.pics) {
    //     // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
    //     if (!this.sellerScroll) {
    //       // 避免页面多次实例化BScroll引起内存泄漏

    //       this.sellerScroll = new BScroll(this.$refs.sellerSlider, {
    //         scrollX: true, // 让滑动容器横轴滚动
    //         click: true
    //       });
    //     } else {
    //       this.sellerScroll.refresh();
    //     }
    //     // }
    //   });
    // }
  },
  mounted() {
    // this._initSellerSliderScroll();
  },
  components: {
    // zkTimeDown
  }
};
</script>
<style lang='scss' scoped>
nav {
  background-color: #21c0ae;
  height: 38px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 38px;
}
.menu-box {
  width: 90%;
  margin: (20/37.5) + rem auto;
  border-radius: (8/37.5) + rem;
  height: 140px;
}
.time-down {
  background: url(/img/timeback.jpg);
  background-size: 100% 100%;

  div > p {
    color: #fff;
    text-align: center;
    width: 60%;
    margin: auto;
    // line-height: (40/37.5) + rem;
    font-weight: bold;
  }
  div {
    border-radius: 10px;
    width: 90%;
    padding: 30px;
    margin: auto;
    height: 80%;
    transform: translateY(10%);
  }
  div > p:last-child {
    font-size: (16/37.5) + rem;
    font-weight: 100;
  }
}
.text {
  background-color: rgba(255, 255, 255, 0.2);
  p{
      line-height: 30px;
  }
}
.message {
  background: url(/img/message.jpg);
  background-size: 100% 100%;
  div > p {
    color: #fff;
    text-align: center;
    width: 60%;
    margin: auto;
    // line-height: (40/37.5) + rem;
    font-weight: bold;
  }
  div {
    border-radius: 10px;
    width: 90%;
    padding: 30px;
    margin: auto;
    height: 80%;
    transform: translateY(10%);
  }
  div > p:last-child {
    font-size: (16/37.5) + rem;
    font-weight: 100;
  }
}
.other {
  background: url(/img/tree.jpg);
  background-size: 100% 100%;
  div > p {
    color: #fff;
    text-align: center;
    width: 60%;
    margin: auto;
    // line-height: (40/37.5) + rem;
    font-weight: bold;
  }
  div {
    border-radius: 10px;
    width: 90%;
    padding: 30px;
    margin: auto;
    height: 80%;
    transform: translateY(10%);
  }
  div > p:last-child {
    font-size: (16/37.5) + rem;
    font-weight: 100;
  }
}
// .scroll {
//   overflow: auto;
//   height: (600/37.5) + rem;
//   margin-top: 0.5rem;
//   .scroll-box {
//     height: (601/37.5) + rem;
//   }
// }
</style>
