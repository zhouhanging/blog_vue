import Vue from 'vue'  // 引入vue框架
import VueRouter from 'vue-router'  // 引入vue-router路由依赖
import Home from '../views/Home.vue'  // 引入页面组件，命名为HelloWorld
import Index from '../pages/Index.vue'
import Mains from '../views/Mains.vue'
import About from '../views/About.vue'
import Topic from '../views/Topic.vue'
import Info from '../pages/Info.vue'
import Write from '../pages/Write.vue'
import Show from '../pages/Show.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'




Vue.use(VueRouter)  // Vue全局使用Router

const routes = [
  {
    path: '/',           //链接路径
    name: 'Index',          //路由名称
    component: Index
  },
  {
    path: '/mains',      //一级路由
    component: Mains,
    children: [
      {                      //二级路由
        path: '/',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        nhomeame: 'About',
        component: About
      },
      {
        path: '/topic',
        name: 'Topic',
        component: Topic
      }
    ]
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/write',
    name: 'Write',
    component: Write
  },
  {
    path: '/show/:_id',
    name: 'Show',
    component: Show
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  }

]

const router = new VueRouter({
  mode: 'history',  //路由模式，取值为history与hash
  base: process.env.BASE_URL,   //打包路径，默认为/，可以修改
  routes
})  


// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next();
  } 
  if(to.path=="/write"){
    console.log(localStorage.eleToken)
    isLogin ? next() : next("/login");
  }else{
    next()
  }

})


export default router


