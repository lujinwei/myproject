<template>
    <div>
        <!-- 选择地区组件 -->
        <Areadetail :selectBox1="selectBox1" @change="change"></Areadetail>
        <!-- 选择学校类别组件 -->
        <Class
            :selectBox2="selectBox2"
            @change="change"
        ></Class>
        <Extend
            :selectBox3="selectBox3"
            @change="change"
        ></Extend>
        <!-- 选择类别导航 -->
        <div class="select">
            <div class @click="selectBox1 = !selectBox1">地区</div>
            <div class @click="selectBox2 = !selectBox2">类别</div>
            <div class @click="selectBox3 = !selectBox3">拓展</div>
        </div>
        <!-- 校园列表组件 -->
        <Campus></Campus>
    </div>
</template>
<script>
import Campus from "../components/Campus.vue";
import Areadetail from "../components/Areadetail.vue";
import Class from "../components/Class.vue";
import Extend from "../components/Extend.vue";
export default {
    data() {
        return {
            selectBox1: false,
            selectBox2: false,
            selectBox3: false,
            campusData: [],
        };
    },
    components: {
        Campus,
        Areadetail,
        Class,
        Extend
    },
    methods: {
        // 控制选择导航插件显示隐藏
        change(val) {
            console.log("aa", val);
            this.selectBox1 = val;
            this.selectBox2 = val;
            this.selectBox3 = val;
        },
        campusList() {},
    },
};
</script>
<style lang="scss" scoped>
.select {
    // width: 100%;
    height: 40px;
    line-height: 36px;
    display: flex;
    text-align: center;
    padding-top: 2px;
    font-size: 14px;
    position: sticky;
    top: 38px;
    z-index: 1;
    background: #fff;
    border-bottom: 1px solid #ccc5;
    padding-bottom: 5px;
    & > div {
        flex: 1;
        border-right: 1px solid #d4ddd3;
    }
    & > div:last-child {
        border: 0;
    }
}
</style>