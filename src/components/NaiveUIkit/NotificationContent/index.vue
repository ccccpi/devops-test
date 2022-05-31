<template></template>
<script>
import { useNotification } from "naive-ui";
export default {
  name: "NotificationContent",
  setup() {
    window["$notification"] = useNotification();
  },
};
</script>
