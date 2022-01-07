<template>
  <div class="markdown">
    <div class="titles">
      <span>
        <el-col :span="5">
          <el-input v-model="tit" placeholder="请输入您的题目"></el-input>
        </el-col>
      </span>
      <span>
        <el-select v-model="value1" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </span>
      <span>
        <el-button class="btn" @click="submit" type="primary" plain>提交</el-button>
      </span>
    </div>

    <div class="container">
      <mavon-editor
        :ishljs="true"
        v-model="content"
        ref="md"
        @imgAdd="$imgAdd"
        @change="change"
        style="min-height: 90vh"
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
          value: "选项1",
          label: "HTML",
        },
        {
          value: "选项2",
          label: "css",
        },
        {
          value: "选项3",
          label: "JavaScript",
        },
        {
          value: "选项4",
          label: "vue",
        },
        {
          value: "选项5",
          label: "react",
        },
        {
          value: "选项6",
          label: "后端",
        },
        {
          value: "选项7",
          label: "数据库",
        },
        {
          value: "选项8",
          label: "UI",
        },
        {
          value: "选项9",
          label: "其他",
        },
      ],
      value1: [],
    };
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      axios({
        url: "server url",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        $vm.$img2Url(pos, url);
      });
    },

    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    submit() {
      let aData = new Date();
      let value =
        aData.getFullYear() +
        "-" +
        (aData.getMonth() + 1) +
        "-" +
        aData.getDate();
      this.axios
        .post("/api/saveArticle", {
          title: this.tit,
          date: value,
          content: this.html,
        })
        .then((res) => {
          // console.log(res.data);
          console.log("图片上传成功！");
        });
      console.log(value);
      console.log(this.content);
      console.log(this.html);
      this.$message.success("提交成功，已打印至控制台！");
    },
  },
  mounted() {},
};
</script>

<style lang="less">
.markdown-body {
  //  编写容器的一些css，根据需要进行调整，这里是我博客的，在github提供的.markdown-body基础上修改的
  box-sizing: border-box;
  min-width: 200px;
  // max-width: 90%;
  margin: 0 auto;
  box-shadow: 2px 4px 6px gray;
  // padding-left: 20px;
  // padding-right: 15px;
  padding-top: 40px;
  // padding-bottom: 45px;
  // margin-bottom: 100px;
}

//github使用的是这个   根据自己的进行调整
.markdown-body {
  box-sizing: border-box;
  // min-width: 200px;
  // max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

//这个要配合移动端 不是很理解
@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>