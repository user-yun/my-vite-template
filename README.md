# Vue 3 + TypeScript + Vite

### Run：

`npm run dev` 启动本地环境

### build：

`npm run build:dev` 打包本地环境
`npm run build:pro` 打包生产环境

### 目录结构（比较有特殊处理的目录）

- **更快的熟悉目录结构**

```text
.env 基本配置文件（通用配置）
.env.dev 本地环境配置文件（区分环境的配置）
.env.pro 生产环境配置文件（区分环境的配置）

src/components/common 常用组件
src/components/index.ts 会自动注册常用组件

src/routes/addFrameRoute.ts 动态加载路由示例（需要改动的文件或者逻辑）

src/utils/format.ts 格式化常用函数
src/utils/test.ts 正则校验常用函数

src/views/frame 项目整体搭建文件目录，通常不需要进行改动
src/views/frame/mock.ts 模拟接口返回菜单数据（需要改动的文件或者逻辑）
src/views/frame/index.vue 处理返回菜单数据的文件（需要改动的文件或者逻辑）

src/views/business 存放业务功能文件目录

src/views/template 示例模板文件目录，常用组件的示例
```
