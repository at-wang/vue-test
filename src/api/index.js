// 当前这个模块：Api进行统一管理
import requests from "./request";

// 三级联动接口
// 发请求
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
});