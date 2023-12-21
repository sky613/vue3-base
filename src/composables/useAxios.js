import { reactive, toRefs } from "vue";

export default function useAxios(func) {
  const state = reactive({
    loading: false,
    error: false,
    data: [],
  });

  // eslint-disable-next-line no-unused-vars
  const getData = async (payload) => {
    state.loading = true;
    try {
      const { data } = await func(payload);
      console.log(data);

      state.data = data;
    } catch (error) {
      state.error = true;
      //  router.push({name: 'ErrorPage'})
    }
    state.loading = false;
  };

  return {
    ...toRefs(state),
    getData,
  };
}
