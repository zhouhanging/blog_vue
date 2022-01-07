<template>
  <div class="lists">hello</div>
</template>
<script>
import axios from "axios";

export default {
  name: "ArticleList",
  data() {
    return {
      itemList: [],
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("./data.json").then(
        (response) => {
          this.itemList = response.data.blog;
          imguel = require();
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
.lists {
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