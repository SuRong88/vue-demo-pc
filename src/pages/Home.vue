<template>
    <div class="home">
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>

<script>
export default {
    components: {
        vHeader: resolve => require(['components/common/Header.vue'], resolve),
        vFooter: resolve => require(['components/common/Footer.vue'], resolve)
    },
    created() {},
    mounted() {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {}
};
</script>

<style></style>
