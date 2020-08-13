<template>
  <div class="writed">
    hello write
    <!-- <mavon-editor
      class="md"
      :value="opts.api_doc"
      :subfield="prop.subfield"
      :defaultOpen="prop.defaultOpen"
      :toolbarsFlag="prop.toolbarsFlag"
      :editable="prop.editable"
      :scrollStyle="prop.scrollStyle"
    ></mavon-editor>-->
  </div>
</template>

<script>
export default {
  name: "write",
  data() {
    return {
      // opts.api_doc 即为md文档内容
      opts: null,
    };
  },
  // methods: {
  //   //接口获取md文档内容，可参考
  //   async queryOpts() {
  //     let para = {};
  //     para.items = ["api_doc"];
  //     let res = await requestApi.queryOpts(para);
  //     if (res.data.code !== 200) {
  //       this.$message({
  //         message: res.data.msg,
  //         type: "error",
  //       });
  //       return;
  //     }
  //     this.opts = res.data.data;
  //   },
  // },
  // mounted() {
  //   this.queryOpts();
  // },
};
</script>

<style lang="less">
.writed {
  font-family: cursive;
  font-size: 20px;
}
</style>