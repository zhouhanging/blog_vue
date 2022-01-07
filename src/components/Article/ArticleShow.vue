<template>
  <div class="show">
    <article class="context" v-html="compiledMarkdown"></article>
  </div>
</template>
<script>
export default {
  name: "ArtcleShow",
  data() {
    return {
      articleDetail: [], //数据，可以从数据库中读取
    };
  },
  computed: {
    compiledMarkdown() {
      //this.articleDetail.context数据
      return marked(this.articleDetail.context, { sanitize: true });
    },
  },
};
</script>