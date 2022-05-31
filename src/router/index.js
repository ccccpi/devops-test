import { createWebHistory, createRouter } from "vue-router";
import routesTest from "./routestest.js";
import routes from "./routes";

const history = createWebHistory();

// 判断是否是生产环境
const isProd = import.meta.env.PROD;
let route = isProd ? routes : routesTest;

const router = createRouter({
  history: history,
  routes: route,
});

export default router;
