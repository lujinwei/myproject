<template>
    <div ref="sellerSlider" class="scroll">
        <div class="scroll-box">
            <div class="nav-bg">
                <div class="avater">
                    <div class="avater-box">
                        <img src="/img/qq_wallet_icon.png" alt />
                    </div>
                    <span class="username">咸蛋超人</span>
                </div>
                <div class="bottom-box">
                    <div>
                        <p>0次</p>
                        <p>抽奖机会</p>
                    </div>
                    <div>
                        <p>100</p>
                        <p>奖学金</p>
                    </div>
                    <div>
                        <p>6666</p>
                        <p>邀请码</p>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="nav-2">
                <div class>
                    <img src="/img/icon_question.png" alt="我的提问" />
                    <p>我的提问</p>
                </div>
                <div class>
                    <img src="/img/icon_reply_question.png" alt="我的回答" />
                    <p>我的回答</p>
                </div>
                <div class>
                    <img src="/img/icon_payed.png" alt="我的查看" />
                    <p>我的查看</p>
                </div>
            </div>
            <div class="line"></div>
            <div>
                <ul>
                    <li class="lis" v-for="(item, index) in lis" :key="index">
                        <img :src="item.url" alt />
                        <span>{{ item.text }}</span>
                        <i>></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
// import BScroll from "better-scroll";
export default {
    data() {
        return {
            lis: [
                { url: "/img/my_wallet.png", text: "我的钱包" },
                { url: "/img/my_collect.png", text: "我的收藏" },
                { url: "/img/my_volunteer.png", text: "我的志愿" },
                { url: "/img/my_order.png", text: "我的订单" },
                { url: "/img/my_coupon.png", text: "我的优惠券" },
            ],
        };
    },
    methods: {
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
};
</script>
<style lang="scss" scoped>
.nav-bg {
    width: 100%;
    height: 180px;
    background: url("/img/timg.jpg") no-repeat center center;
    background-size: 100%;
    position: relative;

    .avater {
        transform: translateY(50%);
        text-align: center;

        img {
            width: 50px;
            height: 50px;
            display: block;
            margin: auto;
            transform: translateY(4px);
        }
    }
}

.avater-box {
    background: #ffffff;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    margin: auto;
}
.username {
    font-size: (18/37.5) + rem;
    color: #e21d3a;
    font-weight: 600;
}
.bottom-box {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: rgba(255, 255, 255, 0.2);
    align-items: center;
    div {
        flex: 1;
        text-align: center;
        color: #fff;
        border-right: 1px solid #ddd;
        height: 40px;
        // line-height:40px;
        font-size: 14px;
        // padding-top: 6px;
        p {
            margin-top: 3px;
        }
        &:last-child {
            border-right: 0;
        }
    }
}
.line {
    background: #e8e4e4;
    width: 100%;
    height: (30/37.5) + rem;
}
.nav-2 {
    display: flex;
    align-items: center;
    div {
        flex: 1;
        text-align: center;
        font-size: 13px;
        border-right: 1px solid #ddd;
        height: 60px;
        // line-height: 45px;
        img {
            width: 30px;
            height: 30px;
            display: block;
            margin: auto;
            margin-top: 8px;
        }
    }
}
.lis {
    font-size: 14px;
    height: 42px;
    border-bottom: 1px solid #ddd;
    position: relative;
    img {
        width: 20px;
        height: 20px;
        margin: 0 12px;
        // transform: translateY(7.5px);
        // margin: 0 (8/37.5) + rem;
    }
    span {
        line-height: 25px;
    }
    i {
        color: #9e9b9b;
        position: absolute;
        right: (15/37.5) + rem;
        top: 50%;
        transform: translateY(-50%);
    }
}
// .scroll {
//     height: (666/37.5) + rem;

//     .scroll-box {
//         height: (667/37.5) + rem;
//     }
// }
</style>