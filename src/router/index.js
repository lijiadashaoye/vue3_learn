import { createRouter, createWebHistory } from "vue-router";
import one from "@/views/one.vue";

const routes = [
  {
    path: "/",
    name: "one",
    component: one,
  },
  {
    path: "/two",
    name: "two",
    component: () =>
      import( "../views/two.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
