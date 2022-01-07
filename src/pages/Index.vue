<template>
  <div class="index">
    <div class="cat">
      <cat/>
      <h2>欢迎来到我的博客</h2>
    </div>
    <div class="more">

    </div>
    <div class="foot">
      
    </div>    
  </div>
</template>

<script>
import Cat from "../components/Cat";
export default {
  name: "index",
  components: {
     Cat
  },
  data() {
    return {
      Infos: "心若没有栖息的地方,到哪里都是在流浪...",
   
    };
  },
  created(){
    setTimeout(()=>{
      this.$router.push('/mains')
    },2000)
  },
  methods: {
    go() {
      this.$router.push("/home");
    }
  },
  computed:{
    backgourndStyle:()=>{
        // 计算body可用高度
        let cHeight =window.innerHeight;
        let cWith=window.innerWidth;
        // 存放要换的图片
        let imgs = 
          [
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2337312372,3962664214&fm=26&gp=0.jpg",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F160827%2F3-160RG41142.jpg&refer=http%3A%2F%2Fpicture.ik123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620436893&t=f129c0687bf609558dea459c6e4bde56"
          ]
        let imgName = imgs[Math.floor(Math.random() * imgs.length)] //进行计算随机
        let style = "background-image:url('" + imgName + "');  background-repeat: no-repeat;  opacity: 0.6;overflow-x: hidden;  background-size: cover; background-position: center; with:cWith; height: cHeight;margin:0;padding:0 " 
        return style
    }
   }
  
};
</script>

<style lang="less">
.index{
  .cat{
    width: 100%;
    height: 100vh;
    .cat{
      margin-top: 30px;
      height: 500px;
      margin: 30px auto;
    }
    h2{
      text-align: center;
      margin: 30px auto;
    }
  }
  .more{
    height: 10px;
  }
  .foot{
    height: 10px;
  }
}
</style>
