import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layout/home/index.vue"),
      children: [
        {
          path: "/",
          component: () => import("../layout/home/Home.vue"),
          name: "home",
        },
        {
          path: "/cart",
          component: () => import("../layout/home/Cart.vue"),
          name: "cart",
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../layout/login/index.vue"),
      name: "login",
    },

    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "404" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 88,
      };
    }

    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
