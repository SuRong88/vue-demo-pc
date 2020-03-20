<template>
    <div class="directive-page">
        <div class="box">占位区域</div>
        <input v-model="foo" style="width: 100vw;" type="text" />
        <input class="" v-blur style="width: 100vw;" type="text" />
        <div style="height: 800px;background-color: yellow;">
            233
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            foo: 'foo'
        };
    },
    methods: {
        // blurHandle
        blurHandle() {
            setTimeout(() => {
                window.scrollBy(0, -1); // 页面向上滚动
                window.scrollBy(0, 1); // 页面向下滚动
            }, 100);
        }
    }
};
</script>

<style scoped lang="less">
.directive-page {
    height: 100vh;
    background-color: pink;
    .box {
        height: 300px;
        background-color: cyan;
    }
}
</style>
