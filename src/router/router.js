import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "IntroPage",
      component: () => import("@/pages/IntroPage.vue"),
      // beforeEnter: beforeEnterHandler(),
      strict: true,
    },
    {
      path: "/main",
      name: "MainLayout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/mainPage",
          name: "MainPage",
          components: {
            default: () => import("@/pages/MainPage.vue"),
            MenuHeader: () => import("@/components/MainHeader.vue"),
          },
          props: true,
        },
      ],
    },

    {
      path: "/error404",
      name: "ErrorPage",
      component: () => import("@/pages/ErrorPage.vue"),
    },
  ],
});

router.beforeEach((to) => {
  console.log("to::", to);
  // return { name: "ErrorPage" };
});

export default router;
