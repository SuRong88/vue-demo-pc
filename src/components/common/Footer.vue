<template>
    <div class="footer">footer{{ msg }}</div>
</template>
<script>
import Bus from '@/bus/event.js';
export default {
    name: 'vFooter',
    components: {},
    created() {
        Bus.$on('send', val => {
            //接收参数
            console.log(val);
            this.msg = val;
        });
    },
    mounted() {},
    data() {
        return {
            msg: ''
        };
    },
    computed: {},
    watch: {},
    methods: {}
};
</script>
<style></style>
