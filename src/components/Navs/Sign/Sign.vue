<template>
  <div v-show="!sign_state" class="sign">
    <!-- <div class="in">
      <span @click="sign1" class="s1">登录</span>|
      <span @click="sign2" class="s2">注册</span>
    </div>-->

    <div @click="turnsilo" class="block">
      <el-avatar :size="50" :src="circleUrl"></el-avatar>
    </div>

    <!-- <el-dialog
      :visible.sync="dialogTableVisible"
      center
      :append-to-body="true"
      :lock-scroll="false"
      width="20%"
    >
      <Login />
    </el-dialog>-->
  </div>
</template>
<script>
import Login from "./Login";
export default {
  name: "sign",
  components: {
    Login,
  },
  data() {
    return {
      dialogTableVisible: false,
      sign_state: false,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
    turnsilo() {
      this.$router.push({ path: "/silo" });
    },
    // submitForm() {
    //   this.dialogTableVisible = true; //默认页面不显示为false,点击按钮将这个属性变成true
    // },
  },
};
</script>
<style lang="less">
.sign {
  padding: 0;
  margin: 0;
  height: 60px;
  width: 100px;
  height: auto;
  .block {
    height: 60px;
    text-align: center;
    margin: auto;
    span {
      display: inline-block;
      margin-top: 5px;
    }
  }
}
</style>