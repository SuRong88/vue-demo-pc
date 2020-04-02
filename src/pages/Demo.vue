<template>
    <div class="demo-page">
        <v-mask :layerData="layerData" @close="closeHandle" @cancel="cancelHandle" @confirm="confirmHandle">内容区</v-mask>
    </div>
</template>

<script>
export default {
    components: {
        vMask: resolve => require(['@/components/mask/mask.vue'], resolve)
    },
    created() {},
    mounted() {},
    data() {
        return {
            // 图形码模态框
            layerData: {
                isLayer: false, // 弹窗是否渲染
                isHeader: true, // 头部是否渲染
                isBtn: true, // 按钮是否渲染
                title: '弹窗标题', // 标题内容
                confirmText: '确定', // 确定按钮文本
                cancelText: '取消', // 取消按钮文本
                isCancel: true, // 是否需要取消按钮
                isClose: true // 是否需要关闭按钮
            }
        };
    },
    computed: {},
    watch: {
        '$route.query.page': function(newVal, oldVal) {
            // console.log(newVal)
            // console.log(oldVal)
        },
        '$route.query': function(newVal, oldVal) {
            console.log('oldVal' + oldVal.page);
            console.log('newVal' + newVal.page);
        },
        $route(to, from) {
            console.log(to.path, from.path);
            // to , from 分别表示从哪跳转到哪，都是一个对象
            // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
        }
    },
    methods: {
        // 关闭弹窗
        closeHandle() {
            console.log('点击关闭');
            this.layerData.isLayer = false;
        },
        // 确定弹窗
        confirmHandle() {
            console.log('点击确定');
        },
        // 取消弹窗
        cancelHandle() {
            console.log('点击取消');
            this.layerData.isLayer = false;
        },
        // 返回顶部（流畅，不兼容IE9）
        smoothScroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(this.smoothScroll);
                console.log(Math.ceil(currentScroll / 5));
                window.scrollTo(0, currentScroll - Math.ceil(currentScroll / 5));
            }
        }
    }
};
</script>

<style>
.select {
    width: 50px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
