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
        name: "Testimonials",
        link: "/Testimonials",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
