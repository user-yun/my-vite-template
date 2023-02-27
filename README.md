# Vue 3 + TypeScript + Vite

### Run：

`npm run dev` 启动本地环境

### build：

`npm run build:dev` 打包本地环境
`npm run build:pro` 打包生产环境

### 目录结构（比较有特殊处理的目录）

- **更快的熟悉目录结构**

```text
架构：
.env 基本配置文件（通用配置）
.env.dev 本地环境配置文件（区分环境的配置）
.env.pro 生产环境配置文件（区分环境的配置）
src\theme-dark.css 暗黑主题配置文件
src\theme-light.css 高亮主题配置文件

组件：
src\api\index.ts 接口请求示例
src\components\ 该目录下放其他封装组件即可
src\components\common 该目录下为自动注册的常用组件
src\components\index.ts 会自动注册常用组件

路由：
src\routes\addFrameRoute.ts 动态加载路由守卫处理 （处理》模拟接口返回路由数据）
src\routes\checkToken.ts 校验token路由守卫处理
src\routes\index.ts 默认加载路由文件
src\routes\routersData.ts 模拟接口返回路由数据

存储：
src\store\index.ts pinia使用示例

工具：
src\utils\axios.ts axios请求封装
src\utils\format.ts 数据格式化方法封装
src\utils\index.ts 其他常用方法封装
src\utils\rules.ts 表单校验方法封装
src\utils\test.ts 数据判断方法封装

视图：
src\views\frame 项目整体搭建文件目录，通常不需要进行改动
src\views\frame\MenusData.ts 模拟接口返回菜单数据
src\views\frame\index.vue 处理返回菜单数据的文件 （处理》模拟接口返回菜单数据）
src\views\business 存放业务功能文件目录
src\views\business\template 示例模板文件目录，常用组件的示例
src\views\business\test\index.vue 请求接口示例路由页面
需要路由的页面视图创建规则必须为：src\views\business\******\******.vue
```
