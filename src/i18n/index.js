import {createI18n} from "vue-i18n";
import messages from '@/i18n/locales'

const instance = createI18n({
  legacy: false,
  locale: 'ko_KR',
  fallbackLocale: 'ko_KR',
  messages
})

export default instance;
export const i18n = instance.global;