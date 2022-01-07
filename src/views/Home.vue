<template>
  <div class="home">
    <div class="hang">
      <Advert />
    </div>
    <div class="homes">
      <div class="articles">
        <article-part />
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
import ArticlePart from "../components/Article/ArticlePart.vue";
import Side from "../components/Side/Side.vue";

export default {
  name: "Home",
  components: {
    ArticlePart,
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
    margin: 18px auto;
  }
  .homes {
    justify-content: space-between;
    margin: auto;
    width: 70%;
    display: flex;
    box-sizing: border-box;
    .articles {
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