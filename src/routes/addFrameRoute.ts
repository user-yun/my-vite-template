import { AsyncComponentLoader, defineAsyncComponent } from "@vue/runtime-dom";
import { Router, RouteRecordRaw, RouteComponent } from "vue-router";
interface TEMPLATEDEMO {
  path: string;
  name: string;
  component?: string;
  redirect?: string;
  meta?: any;
  children?: any;
}
// 模拟接口返回的数据
const getTemplateDemo = () => {
  return new Promise<TEMPLATEDEMO[]>((resolve, reject) => {
    // 模拟接口返回的菜单数据
    import("./routersData").then((res) => {
      setTimeout(() => {
        // 接口请求过后注册路由，可以更改标识
        isLoadRouter = true;
        resolve(res.default);
      }, 1000);
    });
  });
};
// 路由框架父级理由承载组件
const frameIdentComponent = defineAsyncComponent(
  () => import("@/views/frame/index.vue")
);
const routerView = defineAsyncComponent(
  () => import("@/views/frame/routerView.vue")
);
const modules = import.meta.glob("@/views/business/*/*.vue");
// 读取路由框架识别字段，配置父级路由时需要此字段识别，根据接口动态配置路由时，需要接口配合
const frameIdent = import.meta.env.VITE_APP_FRAME_IDENT;
// 处理路由动态注册
const handlerRouters = (
  router: Router,
  routers: TEMPLATEDEMO[],
  path = ""
): RouteRecordRaw[] => {
  let routeRecordRaws: RouteRecordRaw[] = [];
  routers.forEach((e, index) => {
    let component: RouteComponent;
    if (e.component == frameIdent) {
      component = frameIdentComponent;
    } else if (e.component == "routerView") {
      component = routerView;
    } else {
      component = defineAsyncComponent(
        modules[e.component as string] as AsyncComponentLoader
      );
    }
    let routeRecordRaw: RouteRecordRaw = {
      path: e.path,
      name: e.name,
      // 根据路由框架固定字段判断是否是父路由，父路由加载承载组件，子路由加载独立组件
      component,
      meta: e.meta,
      children: [],
    };
    if (e.children && e.children.length) {
      routeRecordRaw.children = handlerRouters(router, e.children);
      // 重新设置父项的重定向，防止跳转父项路由时，没有页面显示
      routeRecordRaw.redirect = routeRecordRaw.children[0].path;
    }
    // 设置别名，解决动态路由随机分配权限第一页访问问题
    if (index == 0 && path != "") {
      routeRecordRaw.alias = path;
    }
    routeRecordRaws.push(routeRecordRaw);
    // 处理完时进行注册，原本打算在调用处循环加载，避免多个路由以及子路由重复注册，调试数据发现，路由本身就已经重复注册了
    router.addRoute(routeRecordRaw);
  });
  return routeRecordRaws;
};

let isLoadRouter = false;
export default function (router: Router) {
  router.beforeEach(async (to, from, next) => {
    // 只根据token获取一次数据即可，此处暂时用true和false来表示token，待有token后需要用是是否有token以及是否请求过两个标识判断
    if (!isLoadRouter) {
      // 模拟异步获取数据
      const templateDemo = await getTemplateDemo();
      handlerRouters(router, templateDemo, "/");
      // 原本打算在此处循环加载动态路由
      // const addRouter = handlerRouters(router, templateDemo);
      // for
      // router.addRoute(addRouter);
      // 或者在处理完成后，可以更改标识
      isLoadRouter = true;
      next(to.path);
    } else next();
  });
}
