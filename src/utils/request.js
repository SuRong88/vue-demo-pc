import axios from 'axios';
import Vue from 'vue';

axios.defaults.timeout = 10000;
axios.defaults.baseURL = '';

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$del = del;
Vue.prototype.$put = put;
Vue.prototype.axiosAll = function(option) {
    return axios.all(option);
};

// 数组存放某些需要处理接口
let otherUrlArr = ['/api/company/lists'];

//http request 拦截器
axios.interceptors.request.use(
    config => {
        window.vm.loading();
        config.headers = {
            'X-Token': localStorage.getItem('token'),
            'Content-Type': 'application/json;charset=UTF-8',
            'language': 'cn'
        };
        if (config.url.indexOf(otherUrlArr) >= 0) {
            // todo
            console.log('todo');
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//http res 拦截器
axios.interceptors.response.use(
    res => {
        window.vm.loadEnd();
        // 某些返回res不是一个正常的对象,正常{code:'',data:'',msg:''}的那种
        if (res.config.url.indexOf(otherUrlArr) >= 0) {
            return res;
        }
        if (res.data.code != 0) {
            // window.vm.errorCode(window.vm, res.data);
            return Promise.reject(res);
        }
        return res;
    },
    err => {
        window.vm.loadEnd();
        // window.vm.errorToast("连接超时")
        return Promise.reject(err);
    }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            res => {
                resolve(res.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function del(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, data).then(
            res => {
                resolve(res.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            res => {
                resolve(res.data);
            },
            err => {
                reject(err);
            }
        );
    });
}
