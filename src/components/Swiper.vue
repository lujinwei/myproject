<template>
  <div class="hello">
    <transition name="scroll">
      <div class="swiper-container">
        <swiper :options="swiperBanner">
          <div class="swiper-slide">
            <img class="auto-img" src="/img/banner5.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img class="auto-img" src="/img/banner1.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img class="auto-img" src="/img/banner2.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img class="auto-img" src="/img/banner3.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img class="auto-img" src="/img/banner4.jpg" alt />
          </div>
          
        </swiper>
      </div>
    </transition>
  </div>
</template>

<script>
// import {swiper} from '../assets/js/swiper.min.js'
// import "../assets/css/swiper.min.css";
import { swiper } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      swiperBanner: {
        loop: true, // 循环模式选项
        speed: 1500,
        autoplay: true,
        autoplayDisableOnInteraction: true
      }
    };
  },
  components: {
    swiper,
  }
};
</script>

<style scoped>
@import "../assets/css/swiper.min.css";
h3 {
  margin: (40/37.5) + rem 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 (10/37.5) + rem;
}
a {
  color: #42b983;
}
.auto-img {
  width: 100%;
  height: 10rem;
}
</style>
