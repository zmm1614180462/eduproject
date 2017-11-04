import axios from 'axios'
import store from '../../store/index'
import * as types from '../../store/mutation-types'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://batpool.dev.ailadui.net/v1/'; //https://api.github.com
//request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers["xx-Device-Type"] = "web"
    if (localStorage.token) {
      config.headers["xx-Token"] = localStorage.getItem('token');
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

//http reqsponse 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.OUT_LOGIN);
          window.location.href = '/login'
          router.replace({
            path: 'login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)

export default axios;
