import Vue from 'vue';

// 是否本地模式(开发环境)
const ISLOCAL = process.env.NODE_ENV === 'development' ? 1 : 0;
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
console.log(ISLOCAL ? '%c  Now is development mode' : '%c  Now is product mode', 'font-weight:bold;color:red;');
