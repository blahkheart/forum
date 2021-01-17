import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import AppDate from '@/components/app-date' 

Vue.component('app-date', AppDate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
