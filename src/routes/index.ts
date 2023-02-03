import { createRouter, createWebHistory } from "vue-router";
import addFrameRoute from "./addFrameRoute";
// 固定两个路由，其他的路由通过动态加载的方式，需要接口配合
// 总共需要两个接口，返回menu菜单的接口和返回router配置的接口，后端可以处理成同一个接口返回，两者需要有关联性
// 如果做动态加载菜单和路由的系统，根据菜单勾选返回对应的路由
const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      defineAsyncComponent(() => import("@/views/frame/login.vue")),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () =>
      defineAsyncComponent(() => import("@/views/frame/catchError.vue")),
  },
];
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
addFrameRoute(router);
// 导出
export default router;
