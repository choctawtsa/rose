import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Company from "./components/Company.vue";
const history = createWebHistory();
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/company",
    component: Company,
  },
];

const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
