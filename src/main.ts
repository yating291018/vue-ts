import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import '@/assets/reset.scss'
import 'iview/dist/styles/iview.css'
import '@/common/tuhu.ts'
import { filterInit } from '@/common/filter.ts'
filterInit(Vue)
Vue.use(iView)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
