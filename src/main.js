import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://celeste-api.herokuapp.com/'
axios.defaults.headers.common['Authorization'] = `auth ${store.state.idToken}`

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
