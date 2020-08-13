<template>
  <div class="lists" >
   <div class="list" :key="index" v-for="(item, index) in itemList" >
   

    <div class="mes" > 
      <h3>{{item.title}}</h3>

      <p>
       <span class="author">作者：{{item.author}}</span>
       <span>标签:</span>
        <span :key="index1" v-for="(items, index1) in item.marks" >{{items.key}} </span> 
      </p>
      <p>
        <span class="data">时间；{{item.data}} </span>
        <ul>
          <li> <span>观看:{{item.hot.guankan}} |</span> </li>
          <li>  <span>点赞:{{item.hot.dianzan}} |</span> </li>
          <li><span> 收藏:{{item.hot.shoucang}}</span>  </li>        
        </ul>
      </p>
    </div>

   <a v-show="item.src" href="#">
      <img src='require(item.src)' alt="" />
    </a>
   </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ArticleList",
  data() {
    return {
      itemList: [],
      imguel:''
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
   
    getData() {
      axios.get("./datas/blog.json").then(
        (response) => {
          this.itemList = response.data.blog;
          imguel= require()
          console.log(this.itemList);
        },
        (response) => {
          console.log("error");
        }
      );
    },
  },
};
</script>

<style lang="less">
.lists{
  .list {
  display: flex;
  margin-bottom: 5px;
  padding: 0;
  height: 210px;
  border-radius: 10px;
  a {
    // display: inline-block;
    height: 100px;
    img {
      border-radius: 3px;
      width: 100px;
      height: 100px;
    }
  }
  .mes {
    flex: 1;
    h3 {
      text-align: center;
      margin: 10px auto;
    }
    p {
      display: flex;
      padding: 0px;
      margin: 0px;
      .data {
        margin: 0 20px;
      }
      .author {
        margin: 3px 20px;
      }
      span {
        margin: 1px 3px;
      }
      ul {
        padding: 0px;
        margin: 0px;
        list-style: none;
        display: flex;
        li {
          margin: 1px 5px;
        }
      }
    }
  }
}
}
</style>