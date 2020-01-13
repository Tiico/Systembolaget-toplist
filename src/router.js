import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

/* router.beforeEach(async (to, from, next) => {
  let loggedIn = store.state.userModule.user.token !== null;
  if (to.fullPath !== '/recipes/create-recipe') {
    next();
  } else {
    if (!loggedIn) {
      router.push('/login');
    }
  }
  next();
}); */

export default router;