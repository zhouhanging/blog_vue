import Vue from 'vue'  // 引入vue框架
import VueRouter from 'vue-router'  // 引入vue-router路由依赖
import Home from '../views/Home.vue'  // 引入页面组件，命名为HelloWorld
import Index from '../pages/Index.vue'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import Topic from '../views/Topic.vue'
import Info from '../pages/Info.vue'
import Write from '../pages/Write.vue'


import Sign from '../components/Sign/Sign.vue'



Vue.use(VueRouter)  // Vue全局使用Router

const routes = [
  {
    path: '/',           //链接路径
    name: 'Index',          //路由名称
    component: Index
  },
  {
    path: '/main',      //一级路由
    component: Main,
    children: [
      {                      //二级路由
        path: '/home',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
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
    path: '/sign',
    name: 'Sign',
    component: Sign
  }

]

const router = new VueRouter({
  mode: 'history',  //路由模式，取值为history与hash
  base: process.env.BASE_URL,   //打包路径，默认为/，可以修改
  routes
})

export default router


// routes: [
//   {
//       path: string, //路径
//       ccomponent: Component; //页面组件
//       name: string; // 命名路由-路由名称
//       components: { [name: string]: Component }; // 命名视图组件
//       redirect: string | Location | Function; // 重定向
//       props: boolean | string | Function; // 路由组件传递参数
//       alias: string | Array<string>; // 路由别名
//       children: Array<RouteConfig>; // 嵌套子路由
//       beforeEnter?: (to: Route, from: Route, next: Function) => void; // 路由单独钩子
//       meta: any; // 自定义标签属性，比如：是否需要登录
//       icon: any; // 图标
//       // 2.6.0+
//       caseSensitive: boolean; // 匹配规则是否大小写敏感？(默认值：false)
//       pathToRegexpOptions: Object; // 编译正则的选项
//   }
//   ]
// })