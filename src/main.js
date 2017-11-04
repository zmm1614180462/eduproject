import Vue from 'vue'
import store from './store/'
import router from './router/router'
import axios from 'assets/js/http'
import FastClick from 'fastclick'
// import ElementUI from "element-ui"
import ElementUI from 'element-ui'
import vueEventCalendar from 'vue-event-calendar'
import 'vue-event-calendar/dist/style.css'
import 'element-ui/lib/theme-chalk/index.css'
//import 'element-ui/lib/theme-default/index.css'
Vue.use(vueEventCalendar, {locale: 'en'})
Vue.use(ElementUI)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  axios,
}).$mount('#app')

