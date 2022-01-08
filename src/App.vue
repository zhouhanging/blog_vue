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
    setTimeout(() => {             //定时器,created执行一秒后触发
      window.L2Dwidget.init({
        pluginRootPath: 'live2dw/',                 
        pluginJsPath: 'lib/',                       
        pluginModelPath: 'live2d-widget-model-nico/assets/',                                 
        tagMode: false,
        debug: false,
        model: { jsonPath: '/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },      
        display: { position: 'right', width: 150, height: 300 },                             
        mobile: { show: true },                                                      
        log: false  
      })
    }, 300)                                      
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
