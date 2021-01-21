import Vue from 'vue'
import App from './App.vue'
import router  from "@/router";
//引入并注册bootstrap-vue
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue)
//引入bootstrap-vue与bootstrap样式文件
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap-vue/dist/bootstrap-vue.css'

import  '../src/assets/css/html.css'
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
