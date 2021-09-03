<template>
    <div class="home">
        <div class="content">
            <div class="search-box">
                院校
                <router-link to="/search">
                    <div class="search-icon"></div>
                </router-link>
            </div>
        </div>
        <!-- <div class="bb" ref="sellerSlider1"> -->
        <div class="content1">
            <!-- 引入首页轮播图组件 -->
            <Swiper></Swiper>
            <!-- 引入首页选中栏组件 -->
            <Select></Select>
        </div>
        <!-- </div> -->
    </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "../components/Swiper.vue";
import Select from "../components/Select.vue";
export default {
    name: "Home",
    components: {
        Swiper,
        Select,
    },
};
</script>
<style lang="less">
.home {
    height: 100%;
    overflow: auto;
}
.search-box {
    max-width: 750px;
    margin: 0 auto;
    background-color: #21c0ae;
    height: 38px;
    line-height: 38px;
    width: 100%;
    position: relative;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    // position: fixed;
    // top:0;
    // z-index: 3;

    .search-icon {
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background: url("/img/icon_search.png") no-repeat;
        background-size: 1rem;
    }
}
.content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
}
.content1 {
    position: relative;
    top: 2rem;
    width: 100%;

    // overflow: auto;
}
</style>
