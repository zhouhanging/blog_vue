<template>
  <div class="markdown">
    <div class="titles">

      <span class="sp-1">
        <el-col :span="12">
          <el-input v-model="tit" placeholder="请输入您的题目"></el-input>
        </el-col>
      </span>

      <span class="sp-2">
        <el-select v-model="categorys" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </span>
      <span class="sp-3">
        <el-button class="btn" @click="submit" type="primary" plain>提交</el-button>
      </span>
    </div>

    <div class="container">
      <mavon-editor
        :ishljs="true"
        v-model="content"
        ref="md"
        @change="change"
        style="min-height: 80vh"
      />
    </div>
    <!-- <el-button class="btn" @click="submit" type="primary" plain>提交</el-button> -->
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  name: "write",
  props: [],
  components: {
    mavonEditor,
  },
  data() {
    return {
      tit: "",
      input: "",
      content: "",
      html: "",
      configs: {},
      options: [
        {
          value: "HTML/css",
          label: "HTML/css",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
        {
          value: "框架/库",
          label: "框架/库",
        },
        {
          value: "算法/数据结构",
          label: "算法/数据结构",
        },
        {
          value: "后端",
          label: "后端",
        },
        {
          value: "设计",
          label: "设计",
        },
        {
          value: "学习/生活",
          label: "学习/生活",
        },
        {
          value: "其他",
          label: "其他",
        },
      ],
      categorys: [],
    };
  },
   computed:{
    username() {
     const username =this.$store.getters.user.name;
     return username
    },
    category(){
      return this.categorys
    }
  },
  methods: {
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    // submit(){
    //   this.$axios.get('api/articles/test').then(res=>{
    //     console.log(res.data)
    //   })
    // },
    submit() {
      let aData = new Date();
      let value =
        aData.getFullYear() +"-" +(aData.getMonth()+1) +"-" +aData.getDate();
        // console.log(value)
      this.$axios
        .post("api/articles/add", {
          "author_name":this.username, 
          "category":this.category,
          "title":this.tit,
          "date": value,
          "content": this.html,
          "summary":this.content
        })
        .then(res=> {
          console.log(res);
          console.log("上传成功！");
        });

      // console.log(this.username)
      // console.log(this.category)
      // console.log(value);
      // console.log(this.content);
      // console.log(this.html);
      // this.$message.success("提交成功，已打印至控制台！");
    },
  },
 
};
</script>

<style lang="less">
.markdown{ 
  .titles{
    padding: 30px;
    width: 1180px;
    margin: 0 auto;
    display: flex;
    .sp-1{
      flex: 4;
      .el-col{
        width: 60%;
      }
    }
     .sp-2{
       flex: 3;
       .el-select{
         width: 70%;
       }
     }
      .sp-3{
        justify-content: right;
        flex: 1;
      }
    .span{
      min-width: 300px;
      flex: 1;
    }

  }
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 45px;
}

}
</style>