<template>
    <transition name="scroll">
        <div class="area" v-show="selectBox3" @click="$emit('change', false)">
            <div class="area-content" ref="sellerSlider">
                <ul class>
                    <transition-group name="scroll">
                        <li
                            class="line"
                            @click="sendExtend"
                            v-for="(item, index) in sort"
                            :key="index"
                        >
                            {{ item }}
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </transition>
</template>
<script>
import bus from "../bus.js"
export default {
    name: "Class",
    props: {
        selectBox3: Boolean,
    },
    data() {
        return {
            //   selectBoxs2: true,
            sort1: [
                "全部",
                "211",
                "985",
                "自主招生",
                "研究生院",
                "国防生",
                "卓越计划",
                "双一流",
            ],
            sort: ["全部", "教育部", "卫生部", "工业信息部", "中国科学院"],
        };
    },
    methods: {
        sendExtend(){
            let text = event.target.outerText;
            bus.$emit('ChangeItem',{'v':text,'k':'extendName'});
        }
   
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