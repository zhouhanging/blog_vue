<template>
  <div id="main">
    <el-container>
      <el-header class="header">
        <Nav />
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
import Nav from "../components/Navs/Nav";

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
  .el-container {
    padding: 0;
    margin: 0;
    .el-header {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 60px;
    }
    .el-main {
      flex: 1;
    }

    .el-footer {
      width: 100%;
      height: 100px;
      font-size: 30px;
      color: #fff;
      background-color: rgb(43, 43, 43);
      p {
        text-align: center;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>