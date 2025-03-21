import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    { path: "/users", name: "users", component: Users },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
