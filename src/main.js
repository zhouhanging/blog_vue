import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from './store/index.js'
import VueAxios from 'vue-axios'
import mavonEditor from 'mavon-editor'  //引入mavon-editor 就是上面所安装的


Vue.use(mavonEditor)  //让Vue使用mavonEditor
Vue.config.productionTip = false
// 阻止你显示显示生产模式的消息

Vue.use(VueAxios, axios)
//
Vue.prototype.$axios = axios

//使用elements组件
Vue.use(ElementUI)

new Vue({                                                         
  router,
  store,
  render: h => h(App)
}).$mount('#app')
