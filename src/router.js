import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Company from "./components/Company.vue";
import About from "./components/About.vue";
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
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
