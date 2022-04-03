import {reqCategoryList} from '@/api';
// home的小仓库
// 存储数据的地方
const state={
    // state
    categoryList:[],
};
// 修改state的唯一手段
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
    }
};
// 用来写业务逻辑，也可以处理异步
const actions={
    //通过api里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result=await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    }
};
const getters={};// 理解为计算属性，用于简化仓库数据，让组件获取仓库额数据更加方便

// 对外暴露
export default {
    state,mutations,actions,getters
}