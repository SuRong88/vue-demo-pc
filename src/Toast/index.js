import Toast from './toast'
export default {
    install: (Vue) => {
        var tosatConstructor = Vue.extend(Toast);
        var toast = new tosatConstructor()
        toast.$mount(document.createElement('div'))
        document.body.appendChild(toast.$el)
        Vue.prototype.$errorToast = function(msg, duration) {
            toast.errorToast(msg, duration)
        }
        Vue.prototype.$successToast = function(msg, duration) {
            toast.successToast(msg, duration)
        }
    }
}
