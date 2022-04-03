// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";


//import HelloWorld from '@/components/HelloWorld' 防止报错 我也不知道啥意思(重写push方法)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'





//配置路由
export default new VueRouter({
    // 配置路由
    routes: [{
            path: '/home', //路由路径
            component: Home, //路由组件名称
            meta: {
                show: true
            } //路由元信息展示与否
        },
        {
            path: '/Search',
            component: Search,
            meta: {
                show: true
            } //路由元信息展示与否
        },
        {
            path: '/Login',
            component: Login,
            meta: {
                show: false
            } //路由元信息展示与否
        },
        {
            path: '/Register',
            component: Register,
            meta: {
                show: false
            } //路由元信息展示与否
        },
        
        // 访问/定向到首页
        {
            path: '/',
            redirect: '/home'
        }
    ]
})