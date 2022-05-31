<script lang="ts" setup>
import { ref } from "vue";
</script>

<template>
  <div class="flex justify-center w-1/1 p-1 box-border">
    <div class="footer-content"></div>
    <div class="footer-content"></div>
    <div class="footer-content"></div>
    <div class="footer-content"></div>
  </div>
</template>

<style lang="scss" scoped>
.footer-content {
  display: flex;
  justify-content: space-between;
}
</style>
