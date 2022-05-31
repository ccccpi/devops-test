<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "2-Footer",
  components: {},
  props: {},
  emits: {},
  setup(props, { emit }) {
    const items = [
      {
        id: 1,
        title: "",
      },
    ];
    return {};
  },
});
</script>

<template>
  <div class="footer-main">
    footer-main
    <div class="footer-contain" v-for="item in items">footer-contain</div>
  </div>
</template>

<style lang="scss" scoped>
.footer-main {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 20px;
}
.footer-contain {
  display: flex;
  width: auto;
  justify-content: space-between;
}
</style>
