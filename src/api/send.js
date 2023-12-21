import axios from "axios";

const instance = axios.create({
    // baseURL: `${process.env.VUE_APP_API}`,
    // baseURL: "http://192.168.0.114:10000",
  // baseURL: "http://192.168.0.110:10000", // local
  //   baseURL: 'http://43.200.154.100:10000/',
  timeout: process.env.VUE_APP_BASE_API_TIMEOUT || 10000,
  withCredentials: true
});

instance.interceptors.request.use(
    function (config) {
      // 요청직전 axios 설정값
      // Localstorage 사용
      // axios.defaults.post['asp.smartdatacorp.co.kr'] = window.localStorage.getItem('asp.smartdatacorp.co.kr')
      // alert(window.localStorage.getItem('asp.smartdatacorp.co.kr'))
      config.headers["tableorderfo.smartdatacorp.co.kr"] = window.localStorage.getItem("tableorderfo.smartdatacorp.co.kr");
      config.headers["Content-Type"] = "application/json";
      // config.headers["Content-Type"] = "application/x-www-form-urlencoded";
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Headers"] = "*";
      // config.headers.common['Access-Control-Allow-Private-Network'] = 'true';
      // STORE 사용
      // config.headers.common['tableorderfo.smartdatacorp.co.kr'] = store.getters.getToken
      return config;
    },
    function (error) {
      // 요청에러 처리
      // if(axios.defaults.headers.)
      console.log(error)
      return Promise.reject(error);
    }
);
/*
    2. 응답 인터셉터를 작성합니다.
    2개의 콜백 함수를 받습니다.

    1) 응답 정성 - 인자값: http response
    2) 응답 에러 - 인자값: http error
*/
instance.interceptors.response.use(
    function (response) {
      /*
          http status가 200인 경우
          응답 바로 직전에 대해 작성합니다.
          .then() 으로 이어집니다.
      */
      // Localstorage 사용
      if (response.data["tableorderfo.smartdatacorp.co.kr"] != null) {
        window.localStorage.setItem(
            "tableorderfo.smartdatacorp.co.kr",
            response.data["tableorderfo.smartdatacorp.co.kr"]
        );
      } else {
        window.localStorage.setItem(
            "tableorderfo.smartdatacorp.co.kr",
            response.headers["tableorderfo.smartdatacorp.co.kr"]
        );
      }
      return response;
    },
    function (error) {
      /*
          http status가 200이 아닌 경우
          응답 에러 처리를 작성합니다.
          .catch() 으로 이어집니다.
      */
      return Promise.reject(error);
    }
);
// 생성한 인스턴스를 익스포트 합니다.
export default instance;
