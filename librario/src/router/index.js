import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login.vue";
import TestLists from "../components/TestLists.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/test",
    name: "Test",
    component: TestLists,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;