import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "@vue/runtime-dom";
import addFrameRoute from "./addFrameRoute";
import checkToken from "./checkToken";
// 固定两个路由，其他的路由通过动态加载的方式，需要接口配合
// 总共需要两个接口，返回menu菜单的接口和返回router配置的接口，后端可以处理成同一个接口返回，两者需要有关联性
// 如果做动态加载菜单和路由的系统，根据菜单勾选返回对应的路由
const routes = [
  {
    path: "/login",
    name: "login",
    component: defineAsyncComponent(() => import("@/views/frame/login.vue")),
    meta: {
      isNotCheckToken: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: defineAsyncComponent(
      () => import("@/views/frame/catchError.vue")
    ),
    meta: {
      isNotCheckToken: true,
    },
  },
];
// 路由
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
checkToken(router);
addFrameRoute(router);
// 导出
export default router;
