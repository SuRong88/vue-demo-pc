<template>
    <div class="test-page">
        <div class="box" ref="scrollBox" id="scrollBox">
            <div class="con-w">
                <ul class="con">
                    <li v-for="i in 100">{{ i }}</li>
                </ul>
            </div>
        </div>
        <button @click="errorToast('test')">弹窗</button>
        <button @click="func01">登录</button>
        <button @click="backToTop(100)">返回顶部1</button>
        <button @click="smoothScroll">返回顶部2</button>
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
        // setTimeout(()=>{
        //     console.clear()
        // },5000)
        console.log('created');
        // setTimeout(() => {

        // }, 3000);
        try {
            const a = 1;
            a = 2;
        } catch (err) {
            // var err = new Error()
            // throw err
            console.log(err);
            console.log('出错了');
            //TODO handle the exception
        }
        console.log('继续');
        // console.log(this.nullTest(''));
        // console.log(this.IEVersion());
        this.isIE9();
        // 对axios all返回的结果进行spread
        this.axiosAll([this.func01(), this.func02(), this.func03()])
            .then(
                this.axiosSpread((res01, res02, res03) => {
                    console.log(res01);
                    console.log(res02);
                    console.log(res03);
                    this.data01 = res01;
                    this.data02 = res02;
                    this.data03 = res03;
                })
            )
            .catch(err => {
                // 多个请求出错，但是报错只报了最后一个？err不应该是一个数组？？
                console.log(err);
            });
    },
    mounted() {
        // console.dir(this.$refs.scrollBox)
        // console.log(this.$refs.scrollBox.style)
        this.hideScrollbarY('scrollBox');
    },

    methods: {
        func01() {
            return this.$post(this.$API.login, {
                account_name: '',
                pwd: this.md5('abc123')
            });
        },
        func02() {
            return this.$get(this.$API.companyList, {
                company_name: '',
                country_id: '',
                region_id: '',
                page: 1,
                limit: -1,
                business_type_lists: [],
                industry_type_lists: []
            });
        },
        func03() {
            return this.$get(this.$API.area, {
                country_id: 0
            });
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
.test-page {
    height: 1500px;
}
.box {
    margin: 100px auto;
    height: 500px;
    width: 300px;
    background-color: cyan;
}
</style>
