import { App, AsyncComponentLoader } from "@vue/runtime-dom";
export const installCommon = {
  // 默认将common文件夹下常用的组件全局懒加载注册
  install(app: App) {
    // 获取当前路径任意文件夹下的 index.vue 文件
    const common = import.meta.glob("./common/*.vue");
    // 遍历获取到的组件模块
    for (const [key, value] of Object.entries(common)) {
      // 拼接组件注册的 name
      const componentName = key.replace("./common/", "").replace(".vue", "");
      // 通过 defineAsyncComponent 异步导入指定路径下的组件
      app.component(
        componentName,
        defineAsyncComponent(value as AsyncComponentLoader)
      );
    }
  },
};
