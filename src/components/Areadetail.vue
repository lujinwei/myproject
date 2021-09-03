<template>
    <transition name="scroll">
        <div
            class="area"
            v-show="selectBox1"
            @click.stop="$emit('change',false)"
        >
            <div class="area-content" ref="sellerSlider">
                <ul
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="10"
                >
                    <li
                        class="line"
                        @click="sendArea"
                        v-for="(item, index) in provinces"
                        :key="index"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>
<script>
// import BScroll from "better-scroll";
import bus from '../bus.js'
export default {
    name: "Selectdetail",
    // props: {
    //     selectBox1: Boolean,
    // },
    props:["selectBox1"],
    data() {
        return {
            selectBoxs: true,
            provinces: [],
            page: 0,
            click: false,
        };
    },
    // watch: {
    //     selectBox(newval) {
    //         if (newval) {
    //             this._initSellerSliderScroll();
    //         }
    //     },
    // },
    methods: {
        sendArea(){
            // 获取触发的值
            let text = event.target.outerText;
            // 通过eventBus的$emit派发一个事件, 通过$emit传出去
            bus.$emit('ChangeItem', {'v':text,'k':'areaName'});
        },
        loadMore() {
        },
        // _initSellerSliderScroll() {
        //     this.$nextTick(() => {
        //         // if (this.seller.pics) {
        //         // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
        //         if (!this.sellerScroll) {
        //             // 避免页面多次实例化BScroll引起内存泄漏

        //             this.sellerScroll = new BScroll(this.$refs.sellerSlider, {
        //                 scrollX: true, // 让滑动容器横轴滚动
        //                 click: true,
        //             });
        //         } else {
        //             this.sellerScroll.refresh();
        //         }
        //         // }
        //     });
        // },
    },
    mounted() {
        this.$http("/api/seller").then((res) => {
            this.provinces = res.data.data;
            // this._initSellerSliderScroll();
        });
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
// /*使用元素进入离开过渡*/
// .scroll-enter {
//     transform: scale(0.5);
//     opacity: 0;
// }

// .scroll-enter-active {
//     transition: all 0.2s linear;
// }

// .scroll-enter-to,
// .scroll-leave {
//     transform: scale(1);
//     opacity: 1;
// }

// .scroll-leave-to {
//     transform: scale(1);
//     opacity: 1;
// }
</style>