<template>
  <div id="app">
    <router-view />
    <div class="girl">
      <Dialogs/>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import Dialogs from './components/Dialogs'
export default {
  components: { 
    Dialogs
    },
  name: "app",
  methods:{
     isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  },
  created () {    
     if (localStorage.eleToken) {  
      const decode = jwt_decode(localStorage.eleToken);
			//将用户信息存贮到vuex里面
      this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
      this.$store.dispatch("setUser", decode);
    }
    
    //页面钩子函数:页面加载完成后触发
    setTimeout(() => {                             //定时器,created执行一秒后触发
      window.L2Dwidget.init({
        pluginRootPath: 'live2dw/',                 //指向你的目录
        pluginJsPath: 'lib/',                       //指向你的目录
        pluginModelPath: 'live2d-widget-model-nico/assets/',                                   //中间这个koharu就是你的老婆,想换个老婆,换这个就可以了
        tagMode: false,
        debug: false,
        model: { jsonPath: '/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },       //中间这个koharu就是你的老婆,想换个老婆,换这个就可以了
        display: { position: 'right', width: 150, height: 300 },                               //调整大小,和位置
        mobile: { show: true },                                                                //要不要盯着你的鼠标看
        log: false  
      })
    }, 300)                                         //页面加载完成之后多久触发(好像是这个)
  }
  
};
</script>
<style lang="less">
#app {
  margin: 0;
  padding: 0;
  background-color: rgb(252, 252, 252);
  .girl{
    z-index:999;
    position: fixed;
    right: 120px;
    bottom: 180px;

  }
}
</style>
