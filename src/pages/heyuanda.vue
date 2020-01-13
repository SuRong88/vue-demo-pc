<template>
    <ul class="sidebar">
        <!-- 一级 -->
        <li @click="sideHandle(index)" :key="index" v-if="sideList.length" v-for="(item, index) in sideList" class="side-item" :class="{ active: item.show }">
            <div class="side-item-hd flex flex-ver flex-jcsb">
                <span class="item-title">{{ item.title }}</span>
                <!-- <img class="item-icon" src="@/assets/images/product/arrow.png" alt="" /> -->
            </div>
            <!-- 二级 -->
            <ol v-show="item.show" v-if="item.subList.length" class="sub-menu">
                <li
                    @click.stop="sideSubHandle(subIndex, subItem.subLink)"
                    :key="subIndex"
                    v-for="(subItem, subIndex) in item.subList"
                    class="sub-item"
                    :class="{ 'is-active': currentIndex == index && currentSubIndex == subIndex }"
                >
                    {{ subItem.subTitle }}{{currentIndex == index}}{{currentSubIndex == subIndex}}
                </li>
            </ol>
        </li>
    </ul>
</template>

<script>
export default {
    created() {
        this.currentIndex = this.$route.params.id.split('-')[0] - 1;
        this.currentSubIndex = this.$route.params.id.split('-')[1] - 1;
        this.sideList[this.currentIndex].show = true;
        // document.title =  this.currentIndex + ''+ this.currentSubIndex
    },
    data() {
        return {
            currentIndex: 0,
            currentSubIndex: 0,
            sideList: [
                {
                    title: '聚客易 G-EASY',
                    subList: [
                        {
                            subTitle: 'DMP平台',
                            subLink: '1-1'
                        },
                        {
                            subTitle: '基础数据服务平台',
                            subLink: '1-2'
                        }
                    ],
                    show: false
                },
                {
                    title: '大数据引擎',
                    subList: [
                        {
                            subTitle: '和元达大数据分析平台',
                            subLink: '2-1'
                        },
                        {
                            subTitle: '和元达数据生产管理平台',
                            subLink: '2-2'
                        },
                        {
                            subTitle: '智慧容量专家',
                            subLink: '2-3'
                        }
                    ],
                    show: false
                },
                {
                    title: '大数据应用',
                    subList: [
                        {
                            subTitle: '大数据智慧交通',
                            subLink: '3-1'
                        },
                        {
                            subTitle: '大数据位置商业应用',
                            subLink: '3-2'
                        },
                        {
                            subTitle: '食品安全追溯系统(区块链)',
                            subLink: '3-3'
                        }
                    ],
                    show: false
                },
                {
                    title: '数据安全',
                    subList: [
                        {
                            subTitle: '和元达数据管理一体机TDM',
                            subLink: '4-1'
                        },
                        {
                            subTitle: '机房统一监控管理系统TUMS',
                            subLink: '4-2'
                        }
                    ],
                    show: false
                }
            ]
        };
    },
    methods: {
        // 一级
        sideHandle(currentIndex) {
            this.sideList.forEach(i => {
                i.show = false;
            });
            this.currentIndex = currentIndex;
            this.sideList[currentIndex].show = true;
            console.log('ul');
        },
        // 二级
        sideSubHandle(currentSubIndex, link) {
            this.currentSubIndex = currentSubIndex;
            this.$router.push({
                name: 'heyuanda',
                params: {
                    id: link
                }
            });
            console.log('li');
        }
    }
};
</script>

<style>
    .item-title{
        font-weight: 700;
    }
    .is-active{
        color:red;
    }
</style>
