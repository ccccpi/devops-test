import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import WindiCSS from "vite-plugin-windicss";

const alias = {
  "@": path.resolve(__dirname, "src"),
  "@public": path.resolve(__dirname, "public"),
  "@components": path.resolve(__dirname, "src/components"),
  "@pages": path.resolve(__dirname, "src/pages"),
  "@api": path.resolve(__dirname, "src/api"),
};

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue(), WindiCSS()],
    resolve: {
      alias,
    },
    server: {
      port: process.env.VITE_PORT || 3000,
    },
  });
};
