<template>
  <div id="main">
    <el-container>
      <el-header class="header">
        <Nav />
      </el-header>

      <el-main class="section">
        <router-view />
      </el-main>

      <!-- <el-footer>
        <div class="foot">
          <p>hello</p>
        </div>
      </el-footer> -->
    </el-container>
  </div>
</template>

<script>
import Nav from "../components/Navs/Nav";

export default {
  name: "mains",
  components: {
    Nav,
  },
};
</script>


<style lang="less">
#main {
  margin: 0;
  padding: 0;
  padding: 0; 
  margin: 0;
  .el-container {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    // flex-direction: column;
    display: flex;
    .el-header {
      background-color: rgba(255, 244, 244, 0.3);
      position: relative;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 80px;
    }

    .el-main {
      margin: 0;
      padding: 0;
      min-height: 60vh;
    }

    // .el-footer {
    //   margin-top: 50px;
    //   width: 100%;
    //   height: 80px;
    //   font-size: 30px;
    //   color: #fff;
    //   background-color: rgb(43, 43, 43);
    //   p {
    //     text-align: center;
    //     margin: 0;
    //     padding: 0;
    //   }
    // }
  }
}
</style>