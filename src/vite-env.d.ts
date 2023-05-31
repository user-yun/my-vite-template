/// <reference types="vite/client" />
declare const ElementPlusIconsVue;
declare module "@/App.vue";
declare module "element-plus/dist/locale/zh-cn.mjs";
declare module "three";
declare module "three/*";
declare const ElMessage: typeof import('element-plus/es')['ElMessage']
declare global {
}
interface Navigator {
  msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
  browserLanguage: string;
}
