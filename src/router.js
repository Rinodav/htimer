import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/index.vue";
import Baz from "./pages/baz.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/baz", component: Baz, name: "baz" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
