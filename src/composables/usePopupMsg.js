import { readonly, ref } from "vue";

// @@ usePopupMsg
const popupMsg = ref("");
export default () => {
  //팝업 내용set
  const setPopupMsg = (v) => {
    popupMsg.value = v;
  };

  return {
    popupMsg: readonly(popupMsg),

    setPopupMsg,
  };
};
