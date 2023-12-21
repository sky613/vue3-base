<template>
  <div>IntroPage</div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

/**
 * IntroPage
 * @ param
 * @ return
 **/

export default {
  name: "IntroPage",
  components: {},
  setup() {
    const router = useRouter();
    onMounted(() => {
      router.push({ name: "MainPage" });
    });
    return {};
  },
};
</script>
