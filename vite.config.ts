import path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
// 打包时使用CDN形势引入其他插件
import { Plugin } from "vite-plugin-cdn-import";
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

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig(async ({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "VITE_");
  console.log(env);
  return {
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue", "vue-router"],
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
      Plugin({
        modules: [
          {
            name: "vue",
            var: "Vue",
            path: "https://unpkg.com/vue@3.2.45/dist/vue.global.js",
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
            name: "vue-router",
            var: "VueRouter",
            path: "https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.js",
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
            path: "https://unpkg.com/@element-plus/icons-vue@2.0.10/dist/index.iife.min.js",
          },
          {
            name: "axios",
            var: "axios",
            path: "https://unpkg.com/axios@1.2.6/dist/axios.min.js",
          },
        ],
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
      terserOptions: {
        compress: {
          booleans_as_integers: true,
          drop_console: env.VITE_USER_NODE_ENV == "production",
        },
      },
    },
  };
});
