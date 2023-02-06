import { createApp } from "vue";
import { Component } from "@vue/runtime-dom";
import "@/style.scss";
import App from "@/App.vue";
import router from "@/routes/index";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/theme-dark.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { installCommon } from "@/components/index";
// 创建VUE
const app = createApp(App);
// 获取ENV配置信息
const ENV = import.meta.env;
// 设置标题
document.title = ENV.VITE_APP_TITLE;
// 加载所有emelent图标
for (const [key, value] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, value as Component);
}
// 创建pinia存储
const pinia = createPinia();
// pinia存储持久化插件
pinia.use(piniaPersist);
// 注册pinia
app.use(pinia);
// 注册常用自定义组件
app.use(installCommon);
// 注册ElementPlus
app.use(ElementPlus, {
  zIndex: 3000,
  size: "default",
  locale: zhCn,
});
// 注册router
app.use(router);
app.mount("#app");
