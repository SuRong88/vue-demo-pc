export default {
    install: function(Vue) {
        // 状态码管理
        Vue.prototype.errorCode = function(that, data) {
            switch (parseInt(data.code)) {
                // case 10104:
                //     that.loadEnd()
                //     // that.imgCheck()
                //     that.errorToast("图形验证码错误")
                //     break;

                // case 10302:
                //     that.loadEnd()
                //     that.$router.push({path: '/login'})
                //     // that.errorToast("请先登录")
                //     break;

                default:
                    that.errorToast(data.msg);
                    break;
            }
        };
    }
};

function reLogin(that) {
    window.location.href = 'www.baidu.com';
}