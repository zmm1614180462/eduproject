import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './index'
import {
  routerMode
} from '../config/env'
import store from '../store/'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  // mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
});

//添加登录验证权限   登陆后禁止访问的页面
router.beforeEach((to, from, next) => {
  next()
})

export default router
