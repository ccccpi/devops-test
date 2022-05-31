<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useRouter } from "vue-router";
import { AppProvider } from "./components/NaiveUIkit/Application";
const route = useRouter();
</script>

<template>
  <div class="app-bg-color">
    <router-link to="/">跳到首页</router-link>
    <br />
    <button
      class="b"
      v-for="item in route.options.routes"
      @click="route.push(item)"
    >
      {{ item.name }}
    </button>
    <!-- <hr />-->
    <N-divider style="margin: 0">以下是对应组件</N-divider>
  </div>
  <AppProvider> <router-view></router-view> </AppProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.b {
  margin: 10px;
  padding: 10px;
  border-radius: 1rem;
  border-style: none;
}
.b:hover {
  cursor: pointer;
  background-color: rgb(168, 85, 85);
}
.app-bg-color {
  background-color: aliceblue;
}
</style>
