/// <reference types="vite/client" />
declare const ElementPlusIconsVue;
declare module "element-plus/dist/locale/zh-cn.mjs";
declare global {
  const ElMessage: typeof import("element-plus")["ElMessage"];
  const ElLoading: typeof import("element-plus")["ElLoading"];
}
