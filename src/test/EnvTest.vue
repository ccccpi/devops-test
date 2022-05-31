<script lang="ts" setup>
import { useRouter } from "vue-router";
// console.log("import.meta.env.vite_port = " + import.meta.env.vite_port);
// console.log("import.meta.env.VITE_PORT = " + import.meta.env.VITE_PORT);

const rout = useRouter();

// console.log("所有的路由", rout.options.routes);
</script>

<template>
  <div>
    <h1>TestEnv.vue</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
      autem deserunt sit natus eligendi odio illum assumenda corrupti,
      temporibus corporis voluptates quasi incidunt aspernatur quo blanditiis at
      earum repellat suscipit!
    </p>
    <div>
      <button
        class="b"
        v-for="key in rout.options.routes"
        @click="rout.push(key)"
      >
        {{ key.name }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  text-align: center;
  text-justify: auto;
}
.b {
  margin: 10px;
  padding: 10px;
  border-radius: 1rem;
  border-style: none;
  &:hover {
    background-color: rgb(168, 85, 85);
  }
}
</style>
