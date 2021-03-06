Vue.config.productionTip = false; // vue 在启动时生成生产提示
Vue.config.silent = false; // vue生产环境提示
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import api from "api/index";//没引入也起效 原因未知
import request from "utils/request";
import formCheck from 'utils/formCheck';
import layout from 'utils/layout';
import errorCode from 'utils/errorCode';
import formatDate from 'utils/formatDate';

import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.use(formCheck);
Vue.use(layout);
Vue.use(errorCode);
Vue.use(formatDate);

import 'swiper/dist/css/swiper.css';
import 'element-ui/lib/theme-chalk/index.css';
import "css/normalize.css";
import "css/base.less";
import "css/layout.less";

//vue原型链挂载总线
Vue.prototype.$Bus = new Vue();

window.vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
