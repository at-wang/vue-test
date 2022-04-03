## 第一天
1.设置项目运行自动打开浏览器：
    在serve后面加入--open
2.关闭eslint语法检查：
    新建文件vue.config.js并写入
    module.export={
    lintOnSave:false 
}
3.src文件夹简写模式
    新建文件jsconfig.json并写入
    {
    "compilerOptions": {
        "baseUrl":"./",
        "paths": {
            "@/*":[
                "src/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}
