<template>
  <div v-show="popupMsg">
    {{ popupMsg }}
  </div>
</template>

<script>
// @@ PopupMsg
import usePopupMsg from "@/composables/usePopupMsg";
import { watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "PopupMsg",
  props: {},

  setup() {
    const { locale, t } = useI18n();
    const { popupMsg, setPopupMsg } = usePopupMsg();

    watch(
      () => popupMsg.value,
      (popupMsg) => {
        if (popupMsg) {
          // console.log("popupMsg", popupMsg);
          setTimeout(() => {
            setPopupMsg("");
          }, 1000);
        }
      },
      { deep: true, immediate: true }
    );
    return { popupMsg };
  },
};
</script>

<style scoped></style>
