import path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
// 打包时使用CDN形势引入其他插件
import { Plugin as PluginImportToCDN } from "vite-plugin-cdn-import";
// 自动导入element-plus-icon
// import Icons from "unplugin-icons/vite";
// import IconsResolver from "unplugin-icons/resolver";
// element-plus
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite";
// 自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from "unplugin-vue-components/vite";
// 语法扩展插件
import vueJsx from "@vitejs/plugin-vue-jsx";
// vite-plugin-compression:使用 gzip 或者 brotli 来压缩资源.
import viteCompression from "vite-plugin-compression";
// 配置全局变量导出
import externalGlobals from "rollup-plugin-external-globals";
// 引入打包工具
import commonjs from "rollup-plugin-commonjs";

const pathSrc = path.resolve(__dirname, "src");

const PluginImportToCDNModules = [
  {
    name: "vue",
    var: "Vue",
    path: "https://unpkg.com/vue@3.2.45/dist/vue.global.js",
  },
  {
    name: "vue-demi",
    var: "VueDemi",
    path: "https://unpkg.com/vue-demi@0.13.11/lib/index.iife.js",
  },
  // {
  //   name: "@vueuse/core",
  //   var: "VueUse",
  //   path: "https://unpkg.com/@vueuse/core@10.1.2/index.iife.js",
  // },
  {
    name: "vue-router",
    var: "VueRouter",
    path: "https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.js",
  },
  {
    name: "pinia",
    var: "Pinia",
    path: "https://unpkg.com/pinia@2.0.29/dist/pinia.iife.js",
  },
  {
    name: "pinia-plugin-persist",
    var: "piniaPersist",
    path: "https://unpkg.com/pinia-plugin-persist@1.0.0/dist/pinia-persist.umd.js",
  },
  {
    name: "element-plus",
    var: "ElementPlus",
    path: "https://unpkg.com/element-plus@2.2.28/dist/index.full.js",
    css: "https://unpkg.com/element-plus@2.2.28/dist/index.css",
  },
  {
    name: "@element-plus/icons-vue",
    var: "ElementPlusIconsVue",
    path: "https://unpkg.com/@element-plus/icons-vue@2.0.10/dist/index.iife.js",
  },
  {
    name: "axios",
    var: "axios",
    path: "https://unpkg.com/axios@1.2.6/dist/axios.js",
  },
  {
    name: "three",
    var: "three",
    path: "https://unpkg.com/three@0.152.2/build/three.js",
  },
];

export default defineConfig(async ({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "VITE_");
  console.log(env);
  console.log(
    PluginImportToCDNModules.reduce(
      (obj, item) => (obj.push(item.name), obj),
      []
    )
  );
  console.log(
    PluginImportToCDNModules.reduce(
      (obj, item) => ((obj[item.name] = item.var), obj),
      {}
    )
  );
  return {
    base: "./",
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue", "pinia", "vue-router"],
        dts: path.resolve(pathSrc, "auto-imports.d.ts"),
        resolvers: [
          // 自动导入图标组件
          // IconsResolver(),
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
        ],
      }),
      Components({
        dts: path.resolve(pathSrc, "components.d.ts"),
        resolvers: [
          // 自动注册图标组件
          // IconsResolver(),
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],
      }),
      // Icons({
      //   compiler: "vue3",
      //   autoInstall: true,
      // }),
      // * vite 可以使用 jsx/tsx 语法
      vueJsx(),
      // 打包使用CDN
      PluginImportToCDN({
        modules: PluginImportToCDNModules.reduce(
          (obj, item) => (obj.push(item), obj),
          []
        ),
      }),
      viteCompression({
        verbose: true, //是否在控制台输出压缩结果
        disable: false, //是否禁用,相当于开关在这里
        threshold: 1, //体积大于threshold 才会被压缩
        algorithm: "gzip", //压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        ext: ".gz", //文件后缀
      }),
    ],
    define: {
      // __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    server: {
      hmr: true,
      host: "0.0.0.0",
      port: 8080,
      open: true,
      cors: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          /**
           * 如果引入多个文件，可以使用
           * @import "@/assets/scss/1.scss";
           * @import"@/assets/scss/2.scss";
           **/
          // 如果使用单个文件的变量，可以在这里配置
          // additionalData: '@import "@/style.scss";',
        },
      },
    },
    build: {
      // 打包前先清空原有打包文件
      emptyOutDir: true,
      // 关闭文件计算
      reportCompressedSize: false,
      // 关闭生成map文件 可以达到缩小打包体积
      sourcemap: false, // 这个生产环境一定要关闭，不然打包的产物会很大
      terserOptions: {
        compress: {
          booleans_as_integers: true,
          drop_console: env.VITE_USER_NODE_ENV == "production",
        },
      },
      rollupOptions: {
        // 告诉打包工具 在external配置的 都是外部依赖项  不需要打包
        external: PluginImportToCDNModules.reduce(
          (obj, item) => (obj.push(item.name), obj),
          []
        ),
        plugins: [
          commonjs(),
          // "在项目中引入的变量名称" ："CDN包导出的名称，一般在CDN包中都是可见的"
          externalGlobals(
            PluginImportToCDNModules.reduce(
              (obj, item) => ((obj[item.name] = item.var), obj),
              {}
            )
          ),
        ],
        output: {
          format: "es",
          globals: PluginImportToCDNModules.reduce(
            (obj, item) => ((obj[item.name] = item.var), obj),
            {}
          ),
          //静态资源分类打包
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            //静态资源分拆打包
            if (id.includes("element-plus")) {
              return;
            }
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  };
});
