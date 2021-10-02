import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login.vue";
import TestLists from "../components/TestLists.vue";
import Main from '../components/Main.vue'

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path:"/main",
    name:"Main",
    component: Main,
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