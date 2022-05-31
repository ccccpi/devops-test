import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import { setupNavieUI } from "./plugins/NaiveUI";
// 导入自定义的顶层组件，为了能够使用 message,dialog,notification 组件
import { AppProvider } from "@/components/NaiveUIKit/Application";
// 导入WindiCSS
import "virtual:windi.css";
// 导入pinia
import { setupStore } from "./store";

async function bootstrap() {
  const app = createApp(App);
  app.use(router);
  setupNavieUI(app);
  setupStore(app);
  app.mount("#app");
}

bootstrap();
