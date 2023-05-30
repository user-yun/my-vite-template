/// <reference types="vite/client" />
declare const ElementPlusIconsVue;
declare module "element-plus/dist/locale/zh-cn.mjs";
declare module "three";
declare module "three/examples/jsm/loaders/FontLoader";
declare module "three/examples/jsm/geometries/TextGeometry";
declare global {
}
interface Navigator {
  msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
  browserLanguage: string;
}
