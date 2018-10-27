import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import Multiselect from 'vue-multiselect'
import VCharts from 'v-charts'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import '@/icons' // icon
import '@/permission' // permission control


Vue.use(ElementUI, { locale })
Vue.use(VCharts)
Vue.component('multiselect', Multiselect)
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
