import { createRouter, createWebHistory } from "vue-router";

// 👉 Import toàn bộ các component một cách tĩnh (eager)
import HomeLayout from "../layout/home/index.vue";
import Home from "../layout/home/Home.vue";
import Cart from "../layout/home/Cart.vue";
import Login from "../layout/login/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeLayout,
      children: [
        {
          path: "",
          component: Home,
          name: "home",
        },
        {
          path: "cart",
          component: Cart,
          name: "cart",
        },
      ],
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 88,
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
