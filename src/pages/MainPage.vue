<template>
  <div>MainPage</div>
</template>

<script>
import { testAPI } from "@/api/api";
import useAxios from "@/composables/useAxios";
/**
 * MainPage
 * @ param
 * @ return
 **/
export default {
  name: "MainPage",
  components: {},
  setup() {
    const { loading, data, getData } = useAxios(testAPI);
    return {};
  },
};
</script>
