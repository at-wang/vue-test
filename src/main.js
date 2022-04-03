import Vue from 'vue'
import App from './App.vue'

// 配置全局组件
import TypeNav from "@/pages/Home/TypeNav"
// 第一个参数全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);

// 关闭vue提示
Vue.config.productionTip = false

// 引入vuex仓库
import store from '@/store';
// 引入路由
import router from './router' 
new Vue({
  render: h => h(App),
  // 注册路由：kv写法省略v【router小写】,当这里书写router的时候,组件身上拥有$route,$router属性
  router,
  // 注册仓库：组件实例身上拥有$store属性
  store
}).$mount('#app')
