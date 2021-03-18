import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Newsroom from "./views/Newsroom.vue";
import Company from "./views/Company.vue";
import About from "./views/About.vue";
import PrivacyPolicy from "./views/legal/PrivacyPolicy.vue";
const history = createWebHistory();
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/newsroom",
    component: Newsroom,
  },
  {
    path: "/company",
    component: Company,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/legal/privacy-policy",
    component: PrivacyPolicy,
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
