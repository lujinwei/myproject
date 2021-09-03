<template>
    <div class="detailBox">
        <!-- <Loding v-show="show"></Loding> -->
        <!-- <div v-show="show">加载中</div> -->
        <div class="search-box">
            {{ title }}
            <div class="search-back" @click="aa">
                <span>{{ $route.params.back }}</span>
            </div>
            <div
                class="search-icon"
                :class="{ 'search-icon-active': like }"
                @click="like = !like"
            ></div>
        </div>
        <!-- <div @click="aa"><Title ></Title></div> -->

        <div class="content-box">
            <div class="title">
                <div class="picbox">
                    <img :src="detail.strIcon" alt />
                </div>
                <div class="namebox">
                    <p class="name">{{ detail.strName }}</p>
                    <span class="sort">{{
                        detail.strSort
                            ? "综合实力排名" + detail.strSort
                            : "暂无综合排名"
                    }}</span>
                </div>
            </div>
            <div class="menu">
                <ul class="uls">
                    <li
                        v-for="(items, index) in url"
                        :key="index"
                        class="lis"
                        @click="titleChang(items.text)"
                    >
                        <router-link
                            :to="{
                                name: 'introduce',
                                params: {
                                    detail: detail[items.id],
                                    textss: items.text,
                                    strid: detail.strId,
                                    where,
                                },
                            }"
                            tag="div"
                            class="introduce"
                        ></router-link>
                        <div class="imgbox">
                            <img :src="items.u" alt />
                        </div>
                        <span>{{ items.text }}</span>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
            <div class="info">
                <p class="tuition">学费信息</p>
                <div class="edu-detail" v-html="detail.strXuefei"></div>
            </div>
            <div>
                <p class="tuition">就业信息</p>
                <div class="edu-detail" v-html="detail.strJiuye"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["item", "search", "campusList", "where"],
    data() {
        return {
            like: false,
            detail: {},
            url: [
                {
                    u: "/img/school_jianjie.png",
                    text: "学校简介",
                    id: "strJianjie",
                },
                { u: "/img/school_zsjh.png", text: "招生计划", id: "jianjie" },
                { u: "/img/school_kszy.png", text: "开设专业", id: "strId" },
                {
                    u: "/img/school_fensshuxian.png",
                    text: "历年分数线",
                    id: "jianjie",
                },
                { u: "/img/school_sstj.png", text: "食宿条件", id: "jianjie" },
                { u: "/img/school_tjyq.png", text: "体检要求", id: "jianjie" },
                {
                    u: "/img/school_bysjy.png",
                    text: "毕业生就业",
                    id: "strJiuye",
                },
                { u: "/img/school_jxj.png", text: "奖学金", id: "jianjie" },
            ],
            title: "大学主页",
            // back: "大学主页"
            towhich: false,
            camList: "",
            wheres: "",
            show: true,
        };
    },
    // beforeRouteEnter(to, from, next) {
    //   console.log("项目中的路由将要跳转至当前页面");
    //   next(vm => {
    //     // vm.towhich=vm.search
    //     vm.camList = to.params.searchIndex;
    //   });
    // },
    // beforeRouteLeave(to, from, next) {
    //   console.log("项目中的路由离开当前页面");
    //   next();
    // },
    // watch: {
    //   $route(newval) {
    //     if (newval.path == "/introduce" && this.where !== "homepage") {
    //       this.towhich = true;
    //     } else {
    //       this.wheres = "homepages";
    //     }
    //   }
    // },

    methods: {
        aa() {
            if (this.towhich) {
                // console.log(0);
                this.$router.push({
                    name: "campusDetail",
                    params: { where: this.where },
                });
                this.towhich = false;
            } else if (this.where == "result") {
                // console.log(1);

                this.$router.push({
                    name: "result",
                    params: { searchIndex: this.camList },
                });
            } else if (this.where == "homepage") {
                this.$router.go(-1);
                //  this.$router.push({name:'home'});
            } else if (this.wheres == "homepages") {
                // this.$router.go(-1);
                this.$router.push({ name: "home" });
            }

            this.$emit("details", true);
            this.title = "大学主页";
        },
        titleChang(val) {
            this.title = val;
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.$http(
                `https://shudou100.com/interfaceController/gainSchoolDate?intId=${this.item}`
            ).then((res) => {
                this.show = false;
                this.detail = res.data;
            });
        });
    },
};
</script>
<style lang="scss" scoped>
.detailBox {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 2;
    overflow: auto;
}
.content-box {
    position: relative;
    margin-top: 42px;
    // height: 100%;
}
.search-box {
    background-color: #21c0ae;
    height: 38px;
    line-height: 38px;
    width: 100%;
    position: relative;
    color: #fff;
    font-size: 16px;
    text-align: center;
    position: fixed;
    z-index: 4;

    .search-icon {
        position: absolute;
        right: 0.4rem;
        bottom: 0.134rem;
        width: 20px;
        height: 20px;
        background: url("/img/like(1).png");

        background-size: 20px;
    }
}
.search-back {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.35rem;
    width: 50px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    background: url(/img/icon_return_normal.png) no-repeat 0px 2.5px;
    background-size: 10px;

    & > span {
        margin-left: 10px;
        color: #fff;
    }
}

.search-box .search-icon-active {
    background: url("/img/like.png");
    background-size: 0.67rem;
}
.title {
    margin-top: 10px;
    margin-left: 25px;
    height: 80px;
    display: flex;
    align-items: center;
    .picbox {
        display: inline-block;

        & > img {
            width: 50px;
            height: 50px;
        }
    }
    .namebox {
        display: inline-block;
        margin-left: 10px;
        vertical-align: top;
        & > span {
            padding: 2px 4px;
        }
        .sort {
            background-color: #a65dc7;
            color: #fff;
            border-radius: (5/37.5) + rem;
            font-size: (18/37.5) + rem;
        }
        .name {
            padding-bottom: 6px;
        }
    }
}
.uls {
    display: flex;
    flex-wrap: wrap;
    .lis {
        flex: 0 0 25%;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        & > span {
            font-size: 14px;
            margin-top: 15px;
        }
        .imgbox > img {
            display: block;
            width:60px;
            // height: 50%;
        }
    }
}

.introduce {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.tuition {
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    margin: 10px 5px;
    border-bottom: 1px solid #a5a1a1;
    color: #7e7c7c;
}
.edu-detail {
    font-size: 14px;
    padding: 0 6px;
    line-height: 20px;
    color: #666;
    letter-spacing: (2/37.5) + rem;
}
</style>