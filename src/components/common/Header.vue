<template>
    <div class="header">
        header
        <el-button @click.native="childHandle">{{ fdata }}</el-button>
        <el-button @click.native="btn(5)">send</el-button>
    </div>
</template>
<script>
import Bus from '@/bus/event.js';
export default {
    name: 'vHeader',
    components: {},
    created() {},
    mounted() {},
    props: {
        fdata: String
    },
    data() {
        return {
            foo: 'foo'
        };
    },
    computed: {},
    watch: {},
    methods: {
        childHandle() {
            this.$emit('fn', this.foo);
        },
        btn(i) {
            Bus.$emit('send', i); //传递参数
            setTimeout(() => {
                Bus.$emit('send', 10);
            }, 3000);
        }
    }
};
</script>
<style></style>
