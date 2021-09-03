<template>
    <div class="campus-box">
        <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <div v-show="load" class="load-campus">
                <!-- <Loding></Loding> -->
                <div style="text-align: center">数据加载中...</div>
            </div>
            <li
                v-for="(item, index) in campusList"
                :key="index"
                class="lis"
                v-show="detail"
                @click.stop="detail = !detail"
            >
                <router-link
                    :to="{
                        name: 'campusDetail',
                        params: { item: item.intId, back, where: 'homepage' },
                    }"
                    tag="div"
                    class="linkto"
                ></router-link>
                <div class="pic">
                    <img :src="item.strIcon" alt />
                    <span>{{
                        item.strSort ? "排名:" + item.strSort : "暂无排名"
                    }}</span>
                </div>
                <div class="strName">
                    <p>{{ item.strName }}</p>
                    <p class="strText">
                        <span>{{ item.strObey }}</span>
                        <!-- <span>{{item.strBatch}}</span> -->
                        <span>博士点{{ item.strCountDoctor }}</span>
                        <span>硕士点{{ item.strCountMaster }}</span>
                    </p>
                    <p class="score">
                        {{ item.strLowLine ? item.strLowLine + "分" : null }}
                    </p>
                </div>
            </li>
            <div class="loading" v-show="loadText">加载中...</div>
            <div class="loading" v-show="text">没有更多数据了</div>
        </ul>
    </div>
</template>
<script>
import bus from '../bus.js'
export default {
    data() {
        return {
            campusList: [],
            detail: true,
            back: "院校",
            load: true,
            loading: false, // 若为真，则无限滚动不会被触发
            loadText: false,
            page: 0,
            areaName:'',
            className:'',
            extendName:'',
            text:'',
        };
    },
    props: [],
    methods: {
        // 获取校园列表信息
        loadMore() {
            console.log("加载中");
            this.loading = true;
            this.load = true;

            this.page += 10;
            setTimeout(() => {
                this.$http(
                    `https://shudou100.com/interfaceController/gainSchoolList_3?pageSize=${this.page}&startRecords=0&strProvince=河北&strSubJect=理科&strUserId=1000889351&strLocProvince=${this.areaName}&strSchoolType=${this.className}&strObey=${this.extendName}`
                    
                ).then((res) => {
                    this.text='';
                    if (this.page > 0) {
                        // 数据加载时提示
                        this.loadText = true;
                    }
                    this.load = false;
                    this.campusList = res.data.data.schoolMainVOList;
                    // console.log(this.campusList);
                    if(this.campusList.length<4){
                        this.loading=true;
                        this.loadText = false;
                        this.text="没有更多数据了"
                    }else{
                        this.loading = false;
                    }
                    // this.$emit("campus", this.campusLIst);
                });
            }, 1000);
        },
    },
    created(){
        // 通过on监听一个来自Areadetail组件的派发的事件，会执行回调函数，回调函数可以接收传过来的参数
        bus.$on('ChangeItem',val=>{
            console.log("zzz",val);
            // console.log("zzz",val.k);
            // 将传过来的对应赋值，areaName，className，extendName，默认都是全部
            let v=val.v;
            if(v=='全部'){
                v='';
            }
            this[val.k]=v
            console.log(this.areaName);
            console.log(this.className);
            console.log(this.extendName);
            this.page = 0;
            this.loadMore();

        })
    },
    watch: {},
};
</script>
<style lang="scss">
.campus-box {
    padding-bottom: 60px;
    position: relative;
}
.lis {
    // overflow: hidden;
    display: flex;
    border-bottom: 1px solid #aaa;
    // padding: (10/37.5) + rem (5/37.5) + rem;
    padding: 8px 0;
    position: relative;

    .strName {
        font-size: 16px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80px;
    }
    .pic {
        text-align: center;
        flex: 0 0 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > img {
            width: 38px;
            height: 38px;
            display: block;
            margin: 0 auto;
        }
        & > span {
            vertical-align: middle;
            font-size: 13px;
            margin-top: 10px;
            color: #664282;
        }
    }
}
.strText {
    margin-top: (5/37.5) + rem;

    & > span {
        font-size: (10/37.5) + rem;
        // background-color: rgba(236, 236, 236, 0.5);
        background-color: #f3f5f7;
        margin-right: 8px;
        color: #6d6c6c;
        padding: 2px 4px;
        font-weight: normal;
        // box-shadow: 0px 0px 4px 1px;
        box-shadow: 1px 1px 4px 0px;
        border-radius: 1px;
    }
}
.score {
    color: #cab80a;
    z-index: -1;
}
.linkto {
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}
.load-campus {
    position: absolute;
    top: 120px;
    width: 100%;
}
.loading {
    height: 32px;
    line-height: 32px;
    text-align: center;
}
</style>