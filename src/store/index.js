import { createStore } from "vuex";

export default createStore({
  state: {
    navActive: false,
    pages: [
      {
        id: 0,
        name: "Home",
        link: "/",
      },
      {
        id: 1,
        name: "About",
        link: "/About",
      },
      {
        id: 2,
        name: "Experience",
        link: "/Experience",
      },
      {
        id: 3,
        name: "Skills",
        link: "/Skills",
      },
      {
        id: 4,
        name: "Projects",
        link: "/Projects",
      },
      {
        id: 5,
        name: "Testimonials",
        link: "/Testimonials",
      },
      {
        id: 6,
        name: "Contact",
        link: "/Contact",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
