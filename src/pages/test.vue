<template>
    <div class="test">
        <div class="box" id="scrollBox">
            <div class="con-w">
                <ul class="con">
                    <li v-for="i in 100">{{ i }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.IEVersion());
        this.isIE9();
        this.$post(this.$API.login, {
            account_name: '412037084@qq.com',
            pwd: this.md5('abc123')
        }).then(res => console.log(res));
        this.$get(this.$API.companyList, {
            company_name: '',
            country_id: '',
            region_id: '',
            page: 1,
            limit: 12,
            business_type_lists: [],
            industry_type_lists: []
        }).then(res => {
            console.log(res);
        });
        this.$get(this.$API.area, {
            country_id: 0
        });
    },
    mounted() {
        this.hideScrollbarY('#scrollBox');
    }
};
</script>
<style>
.box {
    margin: 100px auto;
    height: 500px;
    width: 300px;
    background-color: cyan;
}
</style>
