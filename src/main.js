import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入mint-ui
import MintUI from 'mint-ui'
// 引入axios
import  axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(MintUI)
Vue.use(VueAxios, axios)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
