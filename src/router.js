import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/index.vue";
import Htimer from "./pages/htimer.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/htimer", component: Htimer, name: "htimer" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
