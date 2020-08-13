<template>
  <div class="home">
    <div class="hang">
      <Topic />
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
// @ is an alias to /src
import Topic from "./Topic.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Article from "@/components/Article/Article.vue";
import Side from "@/components/Side/Side.vue";
// import SignIn from "@/components/Sign/SignIn.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Article,
    Side,
    Topic,
    // SignIn,
  },
};
</script>

<style lang="less">
.home {
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