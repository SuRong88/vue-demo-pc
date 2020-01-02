import Vue from 'vue';
// 是否本地模式
const ISLOCAL = 1;
window.BASEURL = ISLOCAL ? '/api' : window.config;
const OPTIONS = {
    // 登录
    login: BASEURL + '/user_account/login',
    // 公司列表
    companyList: BASEURL + '/company/lists',
    // 国家地区
    area: BASEURL + '/area/lists',
};
Vue.prototype.$API = OPTIONS;
