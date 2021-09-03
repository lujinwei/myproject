<template>
    <div id="app">
        <div id="nav">
            <!-- 底部导航栏 -->
            <div class="tabbar">
                <router-link tag="div" class="item nav1" to="/" exact
                    >院校</router-link
                >
                <router-link tag="div" class="item nav2" to="/lifeCircle"
                    >生活圈</router-link
                >
                <router-link tag="div" class="item nav3" to="/mine"
                    >我的</router-link
                >
            </div>
        </div>

        <!-- 首页路由视图 -->
        <router-view />
    </div>
</template>

<style lang="less">
@import "/css/resetcss.css";
body,
html {
    max-width: 750px;
    margin: 0 auto;
}
#app {
    overflow: hidden;
    max-width: 750px;
    margin: 0 auto;

}

.tabbar {
    max-width: 750px;
    margin: 0 auto;
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    border-top: 1px solid #ccc;
    background: #f5efef;
    z-index: 2;
}

.tabbar .item {
    flex: 1;
    color: #868686;
    text-align: center;
    // line-height: 55px;
    // line-height: 40px;
    line-height: 70px;
    font-size: 12px;
}
.item:nth-child(1) {
    background: url("/img/ic_tab_course_new.png") no-repeat 0 0 / cover;
    background-size: 20px;
    background-position: center;
    background-position-y: 5px;
}
.item:nth-child(2) {
    background: url("/img/tab_friends_new.png") no-repeat 0 0 / cover;
    background-size: 20px;
    background-position: center;
    background-position-y: 5px;
}
.item:nth-child(3) {
    background: url("/img/ic_tab_me_new.png") no-repeat 0 0 / cover;
    background-size: 20px;
    background-position: center;
    background-position-y: 5px;
}
// .tabbar .item.router-link-active {
//   @include router-link-active((25/37.5)+rem);
// }
</style>
