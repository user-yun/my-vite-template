export default [
  {
    path: "/topMenu",
    name: "topMenuIndex",
    component: "frameIdent",
    meta: {
      title: "顶部菜单",
    },
    children: [
      {
        path: "/simulation/index",
        name: "simulationIndex",
        component: "/src/views/business/simulation/index.vue",
        meta: {
          topMenu: "/topMenu",
          // leftMenu: "/simulation/index",
          title: "模拟",
        },
      },
      {
        path: "/test/index",
        name: "testIndex",
        component: "/src/views/business/test/index.vue",
        meta: {
          topMenu: "/topMenu",
          // leftMenu: "/test/index",
          title: "测试",
        },
      },
    ],
  },
  {
    path: "/frameIndex",
    name: "frameIndex",
    component: "frameIdent",
    meta: {
      title: "模板",
    },
    children: [
      {
        path: "/template/tableDemo",
        name: "templateTableDemo",
        component: "/src/views/business/template/tableDemo.vue",
        meta: {
          topMenu: "/frameIndex",
          title: "表格模板",
        },
      },
      {
        path: "/template/inputDemo",
        name: "templateInputDemo",
        component: "/src/views/business/template/inputDemo.vue",
        meta: {
          topMenu: "/frameIndex",
          title: "输入框模板",
        },
      },
    ],
  },
  {
    path: "/threeIndex",
    name: "threeIndex",
    component: "frameIdent",
    meta: {
      title: "Three",
    },
    children: [
      {
        path: "/three/index",
        name: "threeIndex",
        component: "/src/views/business/three/index.vue",
        meta: {
          topMenu: "/threeIndex",
          title: "Three模板",
        },
      }
    ],
  },
];
