// 引入vue和vuex
import Vue from "vue";
import Vuex from "vuex";
// 使用插件
Vue.use(Vuex);

// 引入小仓库
import home from "./home";
import search from "./search";

// vuex是一个仓库
// 1.state：仓库存储数据的地方
/* const state={
    count:1,
};
// 2.mutations：修改state的唯一手段
const mutations={
    ADD(state){
        state.count++
    }
};
// 3.actions: 处理action，可以自己书写业务逻辑，也可以处理异步
const actions={
    add({commit}){
        commit("ADD")
    }
};
// 4.getters:理解为计算属性，用于简化仓库数据，让组件获取仓库额数据更加方便
const getters={}; */

// 对外暴露store类的一个实例
export default new Vuex.Store({
   // 实现vuex仓库模块式开发存储数据
   modules:{
       home,search
   }
})