export default [
  {
    path: "/topMenu",
    name: "topMenuIndex",
    component: "frameIdent",
    children: [
      {
        path: "/simulation/index",
        name: "simulationIndex",
        component: "/src/views/business/simulation/index.vue",
        meta: {
          topMenu: "/topMenu",
          // leftMenu: "/simulation/index",
        },
      },
      {
        path: "/test/index",
        name: "testIndex",
        component: "/src/views/business/test/index.vue",
        meta: {
          topMenu: "/topMenu",
          // leftMenu: "/test/index",
        },
      },
    ],
  },
  {
    path: "/",
    name: "frameIndex",
    component: "frameIdent",
    children: [
      {
        path: "/template/tableDemo",
        name: "templateTableDemo",
        component: "/src/views/business/template/tableDemo.vue",
        meta: {
          topMenu: "/",
        },
      },
      {
        path: "/template/inputDemo",
        name: "templateInputDemo",
        component: "/src/views/business/template/inputDemo.vue",
        meta: {
          topMenu: "/",
        },
      },
    ],
  },
];
