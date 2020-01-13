import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [{
        name: 'test',
        path: '/test',
        meta: {
            title: 'test'
        },
        component: resolve => require(['pages/Test.vue'], resolve)
    }, {
        name: 'demo',
        path: '/demo',
        meta: {
            title: 'demo'
        },
        component: resolve => require(['pages/Demo.vue'], resolve)
    }, {
        path: "/",
        redirect: '/index'
    },
    {
        name: 'error',
        path: '/404',
        meta: {
            title: '404'
        },
        component: resolve => require(['pages/404.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/404'
    }, {
        path: "/",
        name: "home",
        component: resolve => require(['@/pages/Home.vue'], resolve),
        children: [{
                name: 'index',
                path: 'index',
                meta: {
                    title: '首页'
                },
                component: resolve => require(['pages/Index.vue'], resolve)
            },
            {
                name: 'heyuanda',
                path: 'heyuanda/:id',
                meta: {
                    title: '和元达测试'
                },
                component: resolve => require(['pages/heyuanda.vue'], resolve)
            }
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});
// 使用分页器切换page会触发beforeEach和afterEach
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title || '默认';
    next();
});
router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});
export default router;
