import { createRouter, createWebHistory } from "vue-router";
// import { projectAuth } from "../config/firebase";

// const requiredAuth = (to, from, next) => {
//   const user = projectAuth.currentUser;

//   if (!user) next({ name: "Login" });
//   else next();
// };

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/users",
    name: "users.index",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/users.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "auth",
    },
    component: () => import("../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import("../views/login.vue"),
  },
  {
    path: "/transaction",
    name: "Transactions",
    component: () => import("../views/transactions.vue"),
  },
  {
    path: "/user/create",
    name: "users.create",
    component: () => import("../views/create-users.vue"),
  },
  {
    path: "/user/:id?",
    name: "users.show",
    component: () => import("../views/show-users.vue"),
  },
  {
    path: "/notifications",
    name: "notifications.index",
    component: () => import("../views/notifications/index.vue"),
  },
  {
    path: "/notification/:id?",
    name: "notifications.show",
    component: () => import("../views/notifications/show.vue"),
  },
  {
    path: "/notification/create",
    name: "notifications.create",
    component: () => import("../views/notifications/create.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
