import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import CraftsIndex from "..//views/CraftsIndex.vue";
import CraftsNew from "..//views/CraftsNew.vue";
import CraftsShow from "..//views/CraftsShow.vue";
import CraftsEdit from "..//views/CraftsEdit.vue";
import CraftsFavorite from "../views/CraftsFavorite.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/crafts",
    name: "crafts-index",
    component: CraftsIndex,
  },
  {
    path: "/crafts/new",
    name: "crafts-new",
    component: CraftsNew,
  },
  {
    path: "/crafts/:id",
    name: "crafts-show",
    component: CraftsShow,
  },
  {
    path: "/crafts/:id/edit",
    name: "crafts-edit",
    component: CraftsEdit,
  },
  {
    path: "/favorites",
    name: "favorites-index",
    component: CraftsFavorite,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
