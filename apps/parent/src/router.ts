import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/HomeView.vue"),
    },
    {
      path: "/about",
      component: () => import("./views/AboutView.vue"),
    },
    {
      path: "/settings",
      component: () => import("./views/SettingsView.vue"),
    },
    {
      path: "/child",
      component: () => import("./views/ChildView.vue"),
    },
  ],
});
