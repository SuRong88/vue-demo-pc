<template>
    <div class="demo">
        <h1>常用elemenui组件</h1>
        <h2>分页器</h2>
        <el-pagination
            prev-text="上一页"
            next-text="下一页"
            @current-change="handleCurrentChange"
            class="pagination"
            background
            layout="prev, pager, next,jumper"
            :page-size="limit"
            :current-page="current_page"
            :total="total_page"
        ></el-pagination>
        <h2>下拉框</h2>
        <el-select popper-class="select" no-data-text="empty" filterable clearable v-model="select" placeholder="文字" @change="">
            <el-option v-for="(item, index) in arr" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <h2>单选框</h2>
        <el-radio-group v-model="radio">
            <el-radio-button v-for="(item, index) in arr" :label="index">{{ item }}</el-radio-button>
        </el-radio-group>
        <h2>复选框</h2>
        <el-checkbox-group v-model="checkbox" :min="0" :max="3">
            <el-checkbox v-for="(tag, index) in arr" :label="index" :key="tag">{{ tag }}</el-checkbox>
        </el-checkbox-group>
        <h2>弹性布局</h2>
        <p>引用断点样式的时候使用 import 'element-ui/lib/theme-chalk/display.css'; hidden-xs-only - 当视口在 xs 尺寸时隐藏 hidden-sm-only - 当视口在 sm 尺寸时隐藏</p>
        <el-row type="flex" class="row-bg">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
                6
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">6</div></el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
                6
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :lg="{ span: 8 }" :xs="{ span: 12 }"><div class="grid-content bg-purple">12</div></el-col>
            <el-col :xs="{ span: 12 }" :lg="{ span: 8 }"><div class="grid-content bg-purple-light">12</div></el-col>
            <el-col :xs="{ span: 12 }" :lg="{ span: 8 }"><div class="grid-content bg-purple">12</div></el-col>
        </el-row>
        <el-row>
            <el-col :xs="0" :sm="1" :md="2" :lg="3" :xl="4">1</el-col>
            <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="18">2</el-col>
            <el-col :xs="0" :sm="1" :md="2" :lg="3" :xl="4">3</el-col>
        </el-row>
        <v-mask :layerData="layerData" @close="closeHandle" @cancel="cancelHandle" @confirm="confirmHandle">内容区</v-mask>
    </div>
</template>

<script>
export default {
    components: {
        vMask(resolve) {
            return require(['@/components/mask/mask.vue'], resolve);
        }
    },
    created() {
        let query = JSON.parse(JSON.stringify(this.$route.query));
        let page = parseInt(query.page);
        // page = page <= 0 ? 1 : page;
        // page = page > this.total_page ? this.total_page : page;
        // console.log(page);
        this.current_page = page;
    },
    mounted() {},
    data() {
        return {
            // 分页器
            current_page: 1,
            limit: 12,
            total_page: 99,
            // 下拉菜单
            select: '',
            arr: ['选项1', '选项2', '选项3', '选项4'],
            // 单选
            radio: '',
            // 复选
            checkbox: [],
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
        handleCurrentChange(page) {
            let query = JSON.parse(JSON.stringify(this.$route.query));
            query.page = page;
            this.$router.push({
                query: query
            });
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
