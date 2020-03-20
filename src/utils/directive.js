// 内容均为测试,在IOS上面这些指令均不起效果.....
export default (Vue) => {
    // v-focus自动聚焦，移动safari使用autofocus无效
    Vue.directive('focus', {
        inserted: function(el, binding) {
            el.focus()
            console.log(binding);
        }
    })
    // 失去焦点，回滚一下，解决IOS浏览器调起键盘之后页面下方留白
    Vue.directive('blur', {
        inserted: function(el) {
            el.addEventListener('blur', () => {
                let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                setTimeout(function() {
                    window.scrollTo(0, --currentPosition);
                    window.scrollTo(0, ++currentPosition);
                }, 100);
            })
        }
    })
}
