export default [
  {
    path: "/topMenu",
    name: "topMenu",
    component: "frameIdent",
    meta: {
      title: "顶部菜单",
      icon: "Document",
    },
    children: [
      {
        path: "/topMenu/index",
        name: "topMenuIndex",
        component: "routerView",
        meta: {
          topMenu: "/topMenu",
          icon: "Document",
          // leftMenu: "/simulation/index",
          title: "顶部菜单父标题",
        },
        children: [
          {
            path: "/simulation/index",
            name: "simulationIndex",
            component: "/src/views/business/simulation/index.vue",
            meta: {
              topMenu: "/topMenu",
              icon: "Document",
              // leftMenu: "/simulation/index",
              title: "子标题模拟",
            },
          },
          {
            path: "/test/index",
            name: "testIndex",
            component: "/src/views/business/test/index.vue",
            meta: {
              topMenu: "/topMenu",
              icon: "Document",
              // leftMenu: "/test/index",
              title: "子标题测试",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/frame",
    name: "frame",
    component: "frameIdent",
    meta: {
      title: "模板顶部菜单",
      icon: "Document",
    },
    children: [
      {
        path: "/frameIndex",
        name: "frameIndex",
        component: "routerView",
        meta: {
          topMenu: "/frameIndex",
          title: "模板父标题",
          icon: "Document",
        },
        children: [
          {
            path: "/template/tableDemo",
            name: "templateTableDemo",
            component: "/src/views/business/template/tableDemo.vue",
            meta: {
              topMenu: "/frame",
              icon: "Document",
              title: "子标题表格模板",
            },
          },
          {
            path: "/template/inputDemo",
            name: "templateInputDemo",
            component: "/src/views/business/template/inputDemo.vue",
            meta: {
              topMenu: "/frame",
              title: "子标题输入框模板",
              icon: "Document",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/three",
    name: "three",
    component: "frameIdent",
    meta: {
      title: "Three",
      icon: "Document",
    },
    children: [
      {
        path: "/threeIndex",
        name: "threeIndex",
        component: "routerView",
        meta: {
          title: "Three父标题",
          icon: "Document",
        },
        children: [
          {
            path: "/three/index",
            name: "threeIndex",
            component: "/src/views/business/three/index.vue",
            meta: {
              topMenu: "/three",
              title: "子标题Three模板",
              icon: "Document",
            },
          },
        ],
      },
    ],
  },
];
