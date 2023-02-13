import { AsyncComponentLoader, defineAsyncComponent } from "@vue/runtime-dom";
import { Router, RouteRecordRaw, RouteComponent } from "vue-router";
import StoreIndex from "@/store/index";
export default function (router: Router) {
  router.beforeEach(async (to, from, next) => {
    const storeIndex = StoreIndex();
    const token = storeIndex.getToken;
    if (!token && to.meta && to.meta.isNotCheckToken != true) {
      next("/login");
    } else next();
  });
}
