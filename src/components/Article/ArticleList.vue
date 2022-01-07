<template>
  <div class="lists">
   <ul>
     <li v-for="article in articles" :key="article._id" >
      <div class="list">
        <div class="titel" @click="articleDetail(article._id)" > {{article.title }} </div>
        <div class="summary">
         {{article.summary}}
        </div>

        <!-- <div class="catgory" v-for="(item,index) in article.catgory" :key="index">
           # {{item}}
        </div> -->
         <div class="catgory" >
           # {{article.category}}
        </div>
        <div class="ar_info">
          <span> <i class="iconfont icon-huore"></i>  {{article.start_counts}} &nbsp;&nbsp;</span>
          <span> <i class="iconfont icon-zanpress"></i> {{article.view_counts}}  &nbsp;&nbsp;</span>
          <span> {{article.date}} &nbsp;&nbsp;</span>
          <span> {{article.start_counts}}</span>
        </div>
      </div>
     </li>
    
   </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ArticleList",
  data() {
    return {
      itemList: [],
      articles:[]
    };
  },

  created() {
    this.getArticles();
  },
  computed:{

  },
  methods: {
    articleDetail(_id){
       this.$router.push({ path: `show/${_id}`});
    },
    getArticles() {
      this.$axios.get('api/articles').then(res=>{
        this.articles=res.data
        console.log(this.articles)
      }).catch(error=>{
        console.log(error)
      })
    },
  },
};
</script>

<style lang="less">
.lists{
  display: flex;
  width: 100%;
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    li{
      width: 100%;
      height: 120px;
      margin: 10px auto;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .list{
        margin: 0;
        padding: 0;
        .titel{
          cursor: pointer;
          padding: 5px auto;
          height: 20px;
          line-height: 20px;
          font-size: 22px;
          color: rgb(83, 83, 83);
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-weight: bold;
          white-space: 0.3em;
        }
        .summary{
          color: rgb(102, 101, 101);
          height: 40px;
          line-height: 20px;
          text-indent: 1.2em;
          margin: 8px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Courier New', Courier, monospace;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .catgory{
          color: rgb(120, 120, 129);
          height: 20px;
          line-height: 20px;
          margin: 3px;
        }
        .ar_info{
          height: 20px;
          line-height: 20px;
          display: flex;
          align-self: flex-end;
          justify-content: flex-end;
          margin-right: 10px;
          span{
            margin: 0 5px;
            color: rgb(150, 147, 147);
          }
        }

      }
    }
  }
}
</style>