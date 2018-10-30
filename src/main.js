import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
Vue.use(ElementUI, { size: 'mini', locale })

Vue.config.productionTip = false
// 注册全局指令判断权限信息
import permission from '@/directive/permission'
Vue.directive('permission', permission)
// VUE函数注册引入外部JS组件
// Vue.component('remote-script', {
//   render: function(createElement) {
//     var self = this
//     return createElement('script', {
//       attrs: {
//         type: 'text/javascript',
//         src: this.src
//       },
//       on: {
//         load: function(event) {
//           self.$emit('load', event)
//         },
//         error: function(event) {
//           self.$emit('error', event)
//         },
//         readystatechange: function(event) {
//           if (this.readyState === 'complete') {
//             self.$emit('load', event)
//           }
//         }
//       }
//     })
//   },
//   props: {
//     src: {
//       type: String,
//       required: true
//     }
//   }
// })

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
