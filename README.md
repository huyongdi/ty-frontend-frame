1. cra构建 -eject
2. 引入antd reach-router
3. 初始化目录
4. 引入rematch 放于stores目录下，并通过test app.js辅助测试 （引入@babel/plugin-proposal-export-default-from，方便导出）
    修改webpack配置，导出别名@stroe
5. eslint删除package.json 新建eslintrc.js 并在配置webpack （具体配置待完善）
6. 引入@rematch/persist，通过rematch进行加载自动关联到local，实现rematch数据持久化
7. 加入less支持，并配置antd按需加载，注意新版的less（6+），多了一个参数lessOptions
