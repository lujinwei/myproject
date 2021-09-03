<template>
    <transition name="scroll">
        <div class="area" v-show="selectBox2" @click="$emit('change', false)">
            <div class="area-content" ref="sellerSlider">
                <ul>
                    <!-- <transition-group name="scroll"> -->
                    <li
                        class="line"
                        @click="sendClass"
                        v-for="(item, index) in sort"
                        :key="index"
                    >
                        {{ item }}
                    </li>

                    <!-- </transition-group> -->
                </ul>
            </div>
        </div>
    </transition>
</template>
<script>
// import BScroll from "better-scroll";
import bus from "../bus.js";
export default {
    name: "Class",
    props: {
        selectBox2: Boolean,
    },
    data() {
        return {
            //   selectBoxs1: true,
            sort: [
                "全部",
                "体育类",
                "农林类",
                "医药类",
                "商学院",
                "师范类",
                "政法类",
                "林业类",
                "民族类",
                "理工类",
                "综合类",
                "艺术类",
                "语言类",
                "财经类",
            ],
        };
    },
    methods: {
        sendClass() {
            let text = event.target.outerText;
            bus.$emit("ChangeItem", {'v':text,'k':'className'});
        },
        // _initSellerSliderScroll() {
        //   this.$nextTick(() => {
        //     // if (this.seller.pics) {
        //     // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
        //     if (!this.sellerScroll) {
        //       // 避免页面多次实例化BScroll引起内存泄漏
        //       this.sellerScroll = new BScroll(this.$refs.sellerSlider, {
        //         scrollX: true, // 让滑动容器横轴滚动
        //         click: true,
        //               pullDownRefresh: {
        //                 threshold: 40, // 刷新时机
        //                 stop: 30       // 回弹停留的距离
        //             },
        //             pullUpLoad: {
        //                 threshold: 20  // 开始加载的时机
        //             },

        //       });
        //     } else {
        //       //  console.log( this.sellerScroll)
        //       this.sellerScroll.on('pullingDown', () => {
        //           console.log('下拉刷新')
        //           // this.isPullDown = true
        //             // this.pageNo = 1
        //             // this.requestData()
        //              this.sellerScroll.finishPullDown() // 结束下拉刷新
        //         })
        //       this.sellerScroll.refresh();
        //     }
        //     // }
        //   });
        // },
    },
    mounted() {
        // this._initSellerSliderScroll();
        // this.$http("/api/seller").then(res => {
        //   this.pro = res.data.data;
        // });
    },
};
</script>
<style lang="scss" scoped>
.area {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(7, 17, 27, 0.5);

    .area-content {
        width: 70%;
        height: 66%;
        background-color: #fff;
        transform: translate(22%, 25%);
        border-radius: 8px;
        overflow: auto;
    }
}
.line {
    border-bottom: 1px solid #d4ddd3;
    padding: 16px;
    font-size: 16px;
}
</style>