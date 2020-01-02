<template>
    <div class="test">
        <div class="box" ref="scrollBox" id="scrollBox">
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
    data() {
        return {
            data01: null,
            data02: null,
            data03: null
        };
    },
    created() {
        // console.log(this.nullTest(''));
        // console.log(this.IEVersion());
        this.isIE9();
        // 对axios all返回的结果进行spread
        this.axiosAll([this.func01(), this.func02(), this.func03()]).then(
            this.axiosSpread((res01, res02, res03) => {
                console.log(res01);
                console.log(res02);
                console.log(res03);
                this.data01 = res01;
                this.data02 = res02;
                this.data03 = res03;
            })
        );
    },
    mounted() {
        // console.dir(this.$refs.scrollBox)
        // console.log(this.$refs.scrollBox.style)
        this.hideScrollbarY('scrollBox');
    },

    methods: {
        func01() {
            return this.$post(this.$API.login, {
                account_name: '412037084@qq.com',
                pwd: this.md5('abc123')
            });
        },
        func02() {
            return this.$get(this.$API.companyList, {
                company_name: '',
                country_id: '',
                region_id: '',
                page: 1,
                limit: 12,
                business_type_lists: [],
                industry_type_lists: []
            });
        },
        func03() {
            return this.$get(this.$API.area, {
                country_id: 0
            });
        }
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
