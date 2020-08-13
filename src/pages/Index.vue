<template>
  <div class="index">
    <div class="img">
      <img src="../../static/img/bc1.jpg" alt="hello" />
    </div>
    <div class="value">
      <p class="print">Welcome</p>
      <div>
        <Div class="alicat">
          <Cat />
        </Div>

        <div>
          <p>{{Infos}}</p>
        </div>
      </div>

      <div>
        <el-row>
          <el-button @click="go" type="info" round>进入</el-button>
        </el-row>
      </div>
    </div>

    <div class="foot">
      <div>hello</div>
    </div>
  </div>
</template>

<script>
import Cat from "../components/Cat";
export default {
  name: "index",
  components: {
    Cat,
  },
  data() {
    return {
      Infos: "这是一个博客系统，欢迎交流学习",
    };
  },
  methods: {
    go() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less">
.index {
  display: flex;
  flex-direction: column;
  .img {
    height: 110vh;
    img {
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: center 0;
    }
  }

  .value {
    flex: 1;
    height: 200vh;
    margin: 30px;
    vertical-align: auto;
    text-align: center;
    .alicat {
      height: 100vh;
    }
    .print {
      font-size: 50px;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 150px;
      padding: 60px;
      color: #000000;
      font-family: "Courier New", Courier, monospace;
    }
  }

  .foot {
    margin-top: 30px;
    font-size: 30px;
    text-align: center;
    height: 180px;
    background-color: black;
    color: #ffffff;
  }
}
</style>
