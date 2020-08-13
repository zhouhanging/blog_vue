<template>
  <div id="main">
    <!-- <Index /> -->

    <el-container>
      <el-header class="header">
        <Nav id="nav" />
      </el-header>

      <el-main class="section">
        <router-view />
      </el-main>

      <el-footer>
        <div class="foot">
          <p>hello</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import About from "./About";
import Nav from "../components/Navs/Nav";
// import Home from "./Home";

export default {
  name: "main",
  components: {
    Nav,
  },
};
</script>


<style lang="less">
#main {
  min-height: 100vh;
  background-color: rgb(245, 247, 250);
  flex-direction: column;
  display: flex;
  padding: 0;
  margin: 0;
  .header {
    height: 60px;

    #nav {
      background-color: #ffffff;
      flex-direction: column;
      display: flex;
    }
  }
  .section {
    flex: 1;
  }
  .footer {
    height: 100px;
    width: 100%;
    .foot {
      width: 100%;
      height: 100px;
      font-size: 30px;
      color: #fff;
      background-color: rgb(43, 43, 43);
      p {
        text-align: center;
      }
    }
  }
}
</style>