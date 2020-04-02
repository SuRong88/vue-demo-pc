<template>
    <div class="v-footer">footer{{ msg }}</div>
</template>
<script>
export default {
    name: 'vFooter',
    components: {},
    created() {
        this.$Bus.$on('send', val => {
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
