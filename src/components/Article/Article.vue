<template>
  <div class="articlepart">
    <div class="lis">子导航</div>
    <article-list />
  </div>
</template>

<script>
import ArticleList from "./ArticleList";
export default {
  name: "articlepart",
  components: {
    ArticleList,
  },
};
</script>

<style lang="less">
.articlepart {
  width: 100%;
  border-radius: 10px;
  .lis {
    width: 100%;
    height: 50px;
  }
}
</style>