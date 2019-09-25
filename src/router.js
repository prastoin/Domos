import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home.vue";
import flat from "@/views/flat.vue";
import devTest from "@/views/devTest.vue";
import contact from "@/views/contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/flat/:flat_name",
      name: "flat",
      props: true,
      component: flat
    },
    {
      path: "/dev",
      name: "devTest",
      component: devTest
    },
    {
      path: "/contact",
      name: 'contact',
      component: contact
    }
   /*{
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( webpackChunkName: "about"  "./views/About.vue")
    }*/
  ]
});