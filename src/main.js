import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
import mavonEditor from 'mavon-editor'  //引入mavon-editor 就是上面所安装的
Vue.use(mavonEditor)  //让Vue使用mavonEditor

Vue.use(VueAxios, axios)

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
