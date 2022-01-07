<template>
  <div class="index">

    <div class="back" :style="backgourndStyle" >
      <p class="show"> HELLO </p>
      
      <div class="btn">
        <span @click="go">进入</span>
      </div>
      
    </div>
   <!-- -------------------------- -->
    <div class="content">
     
      <div class="cat" >
         <p class="print">Welcome</p>
        <div class="alicat">
          <Cat />
        </div>       
      </div>


        <div class="detail">
          <div class="readme">
            <p class="me">
              <img src="../../static/me.jpg" width="150px" alt="pic">
            </p>
            <div class="info">
              <p>姓名：XXX </p>
              <p>年龄：xxx </p>
              <p>爱好：xxx </p>
              <p>技术型：前端(初涉后端) </p>
              <p>技术栈：H5+C3+JS，vue，react，MongoDB，node，微信小程序，AI+PS </p>
            </div>

            <img class="img" src="../../static/pang.jpg" alt="胖嘟嘟">

          </div>
          <div class="marks">
          <p class="topic">{{ Infos }}</p>

          </div>
        </div>

        <div class="passer">
          <div class="year">
         
              <p>2020</p>
              <p>2019</p>
              <p>2018</p>
              <p>2017</p>
        
          </div>
          <div class="pic"> 
            <p>我的足迹</p>
            <div class="li">
             <div class="li_list"> <img src="../../static/yearpic/j1.jpg" alt="pic"></div>
             <div class="li_list"> <img src="../../static/yearpic/j2.jpg" alt="pic"></div>
             <div class="li_list"> <img src="../../static/yearpic/j3.jpg" alt="pic"></div>
            
            </div>
              <div class="li">
             <div class="li_list"> <img src="../../static/yearpic/j4.jpg" alt="pic"></div>
             <div class="li_list"> <img src="../../static/yearpic/j5.jpg" alt="pic"></div>
             <div class="li_list"> <img src="../../static/yearpic/j6.jpg" alt="pic"></div>           
            </div>  

             <div class="li">
             <div class="li_list"> <img src="../../static/yearpic/p1.jpg" alt="pic"></div>
             <div class="li_list"> <img src="../../static/yearpic/p2.jpg" alt="pic"></div>
             <div class="li_list"> <img src="../../static/yearpic/p3.jpg" alt="pic"></div>           
            </div>

             <div class="li">
             <div class="li_list"> <img src="../../static/yearpic/s1.jpg" alt="pic"></div>
             <div class="li_list"> <img src="../../static/yearpic/s2.jpg" alt="pic"></div>
             <div class="li_list"> <img src="../../static/yearpic/s3.jpg" alt="pic"></div>           
            </div>
           
          </div>
        </div>
    </div>
<!-- ----------copyright------------- -->
    <div class="foot">
      <div>hello</div>

    </div>


  </div>
</template>

<script>
import Cat from "../components/Cat";
export default {
  name: "index",
  components: {
    Cat,
  },
  data() {
    return {
      Infos: "心若没有栖息的地方,到哪里都是在流浪...",
   
    };
  },
  methods: {
    go() {
      this.$router.push("/home");
    },
  },
  computed:{
        backgourndStyle:()=>{
            // 计算body可用高度
            // let cHeight = window.outerHeight - (window.outerHeight - window.innerHeight)
            // 存放要换的图片
            let imgs = 
              [
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2337312372,3962664214&fm=26&gp=0.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603010971202&di=e53176cb7544136107e359ac9cd0d741&imgtype=0&src=http%3A%2F%2Fimg.yxbao.com%2Fphoto%2F201907%2F02%2F75af5fe3a6.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603013087523&di=a38ed2ad7b6b164a4175d75138131f78&imgtype=0&src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F22%2F15131%2F554697b89e61378c_1440x900.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603013087524&di=02722b6558484d5e9207d51ab5f455a7&imgtype=0&src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F121%2F84540%2Fcc919b997f53b55e_1366x768.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603013420547&di=8bba429213a127e1488c07534fe97c85&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201307%2F14%2F20130714185754_SztSv.jpeg"
              ]
            let imgName = imgs[Math.floor(Math.random() * imgs.length)] //进行计算随机
            let style = "background-image:url('" + imgName + "');  background-repeat: no-repeat;  opacity: 0.6;  background-size: cover; background-position: center;  height: 100vh; " 
            return style
        }
   }

  
};
</script>

<style lang="less">
.index {
  display: flex;
  flex-direction: column;
.back{
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  .show{
    letter-spacing: 18px;
    margin: 230px auto;
   height: 50px;
   line-height: 50px;
    font-size: 180px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #fff;
  }
  .btn{
    height: 45px;
    font-size: 23px;
    margin: 30px auto;
    font-weight: bold;
    span{
      display: inline-block;
      width: 90px;
      height: 100%;
      text-align: center;
      line-height: 45px;
      border: 2px solid #eee;
      background-color: #fff;
      border-radius: 25px ;
    }
    span:hover{
      background-color: #000;
      color: #fff;
      opacity: 0.5;
    }
     
  }
 
}

  .content {
    // flex: 1;
    margin-top: 30px;
    vertical-align: auto;
    text-align: center;
    .cat {
      height: 800px;
      .print {
       margin-top: 20px;
      font-size: 80px;
      font-weight: bold;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      margin-bottom: 150px;
      color: #000;
    }
      .alicat{
      height: 500px;
      margin-top: 10px;
    }
    }
    .detail{
      display: flex;
      height: 800px;
      .readme{
        flex: 5;
        background-image: url('../../static/backme.jpg');
        background-position: center;
           background-size: contain;
        background-repeat: no-repeat;

        border-radius: 0 0 150px 0;
          .me{
            padding: 0;
            margin-top: 80px;
            img{
              height: 150px;
              width: 150px;
              border-radius: 50%;
            }          
        }
         .info{
           background-color: #fff;
					 width: 60%;
              p{
                line-height: 30px;
                padding: 0;
                margin: 3px auto;
              }
            }
        .img{
          width: 43%;
          margin-right: 200px;
            margin-top: 30px;
            -webkit-transform:rotate(-10deg);
            transform:rotate(-10deg);
            -webkit-transition:-webkit-transform 1s linear;
            transition:transform 1s linear;
        }
         img:hover{
             -webkit-transform:rotate(1deg);
    transform:rotate(1deg);
    -webkit-transition:-webkit-transform 1s linear;
    transition:transform 1s linear;
         }

      }
      .marks{
        background-image: url('../../static/text.jpg');
        background-position: center;
        flex: 3;
        background-size: contain;
        background-repeat: no-repeat;
          .topic{
      font-size: 18px;

        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        letter-spacing: 1px;
        padding-top: 350px;
        line-height: 20px;
        overflow:hidden;
	text-overflow:ellipsis;
  white-space:nowrap;
    -webkit-transform:rotate(-10deg);
    transform:rotate(-10deg);
    -webkit-transition:-webkit-transform 1s linear;
    transition:transform 1s linear;
      }
      }
    
    }
    .passer{
      margin-top: 130px;
      padding-bottom: 100px;
      display: flex;
      background-color: rgb(255, 254, 254);
  
      .year{
        flex: 1;
        p{
          height: 380px;
          padding: 0;
          margin: auto;
          padding-top: 20px;
          line-height: 300px;
          font-size: 38px;
          font-weight: bold;
        }

      }
      .pic{
        display: flex;
        flex-direction: column;
        flex: 6;
        p{
          font-size: 30px;
          letter-spacing: 5px;

        }
     .li{
       height: 380px;
       display: flex;
       border-radius: 20px;

      .li_list{
        padding: 50px;
        border-radius: 20px;
        box-sizing: border-box;
        flex: 1;   
       
       }

          
       img{
         border-radius: 10px;
       width: 300px;
        -webkit-transform:rotate(-10deg);
        transform:rotate(-10deg);
        -webkit-transition:-webkit-transform 1s linear;
        transition:transform 1s linear;  
      }
    img:hover{

        -webkit-transform:rotate(-370deg);
        transform:rotate(-370deg);
        -webkit-transition:-webkit-transform 0.3ss linear;
        transition:transform 10s linear;   
    }
     }
    }
    
  }

  .foot {
    padding-top: 30px;
    font-size: 30px;
    text-align: center;
    height: 180px;
    background-color: black;
    color: #ffffff;
  }
}
}
</style>
