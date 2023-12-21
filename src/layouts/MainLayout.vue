<template>
  <div>
    <router-view name="MenuHeader" />
    <router-view v-slot="{ Component }">
      <keep-alive> <component :is="Component" /> </keep-alive
    ></router-view>
  </div>
  <PopupMsg />
</template>

<script>
import { defineAsyncComponent } from "vue";

/**
 * MainLayout
 * @ param
 * @ return
 **/

export default {
  name: "MainLayout",
  components: {
    PopupMsg: defineAsyncComponent(() =>
      import("@/components/popupMsg/PopupMsg.vue")
    ),
  },
  setup() {
    return {};
  },
};
</script>
