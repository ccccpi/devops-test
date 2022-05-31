<script lang="ts" setup>
import { ref } from "vue";
</script>

<template>
  <div class="SplitLine">
    <slot class="midText"></slot>
  </div>
</template>

<style lang="scss" scoped>
.SplitLine {
  margin: 0 auto;
  width: 600px;
  height: 1px;
  background-color: #d4d4d4;
  text-align: center;
  font-size: 16px;
  color: rgba(101, 101, 101, 1);
}

.midText {
  color: red;
  position: absolute;
  left: 50%;
  background-color: #ffffff;
  padding: 0 15px;
  transform: translateX(-50%) translateY(-50%);
}
</style>
