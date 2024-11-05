const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/towtruck",
        component: () => import("src/pages/TowTruckPage.vue"),
      },
      {
        path: "/battery",
        component: () => import("src/pages/BatteryPage.vue"),
      },
      {
        path: "/tire",
        component: () => import("src/pages/TirePage.vue"),
      },
      {
        path: "/about",
        component: () => import("pages/AboutPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
