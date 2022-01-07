<template>
  <div class="home">
    <div class="hang">
      <Advert />
    </div>
    <div class="homes">
      <div class="article">
        <Article />
        <!-- <SignIn /> -->
      </div>
      <div class="side">
        <Side />
      </div>
    </div>
  </div>
</template>

<script>
import Advert from "../components/advert/Advert.vue";
import Article from "../components/Article/Article.vue";
import Side from "../components/Side/Side.vue";

export default {
  name: "Home",
  components: {
    Article,
    Side,
    Advert,
  },
};
</script>

<style lang="less">
.home {
  min-width: 1300px;
  .hang {
    width: 70%;
    margin: 20px auto;
  }
  .homes {
    justify-content: space-between;
    margin: auto;
    width: 70%;
    display: flex;
    box-sizing: border-box;
    .article {
      background-color: #fff;
      width: 68%;
    }
    .side {
      margin: 0;
      padding: 0;
      width: 28%;
    }
  }
}
</style>