import Home from "@/views/Home/Home.vue";
import About from "@/views/About/About.vue";
import Test from "@/test/index.vue";

const route = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  // { path: "/about", component: About },
  { path: "/about", component: () => import("@/views/About/About.vue") },
  {
    path: "/test/index",
    name: "index",
    component: () => import("@/test/index.vue"),
  },
];

export default route;
