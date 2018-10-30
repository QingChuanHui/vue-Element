import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权
NProgress.configure({ showSpinner: false })// NProgress Configuration
import { adminRouterMap, shopRouterMap } from './router'
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      // next()
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.userInfo.id === undefined || store.getters.userInfo.id === '') {
        store.dispatch('GetInfo').then(res => { // 拉取user_info
          if (typeof (res.new.clientId) === 'undefined') { // 不是维修厂登录
            router.options.routes = router.options.routes.concat(adminRouterMap)
            router.addRoutes(adminRouterMap) // 管理人路由信息
            store.dispatch('GetUserMenu').then(() => { // 获取菜单权限
              next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
          } else {
            router.options.routes = router.options.routes.concat(shopRouterMap)
            router.addRoutes(shopRouterMap)// 维修厂路由信息
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          }
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || '登录信息获取失败请重新登录！')
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
