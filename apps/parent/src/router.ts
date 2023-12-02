import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/IndexView.vue"),
    },
    {
      path: "/home",
      component: () => import("./views/HomeView.vue"),
    },
    {
      path: "/about",
      component: () => import("./views/AboutView.vue"),
    },
    {
      path: "/vue-child",
      component: () => import("./views/ChildView.vue"),
    },
  ],
});
