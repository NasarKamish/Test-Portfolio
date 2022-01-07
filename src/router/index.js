import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Experience",
    name: "Experience",
    component: () => import("../views/Experience.vue"),
  },
  {
    path: "/Skills",
    name: "Skills",
    component: () => import("../views/Skills.vue"),
  },
  {
    path: "/Projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component: () => import("../views/Testimonials.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
