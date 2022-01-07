<template>
  <div class="signs">
    <el-form ref="form" :model="form" label-width="100px">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form-item label-width="70px">
            <span>
              <font text-align="center" color="#777" size="5">注册登录</font>
            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form-item label="账户：" prop="name">
            <el-input v-model="form.name" size="small"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form-item label="密码：" prop="password">
            <el-input v-model="form.password" size="small"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form-item>
            <el-button type="primary" @click="submit">登录</el-button>
            <el-button @click="register">注册</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
 
 
<!--数据存贮交互，事件控制地区-->
<script>
export default {
  name: "sign",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    /*提交进行判断的函数 */
    submit: function () {
      if (this.form.name === "张三" && this.form.password === "123456") {
        alert("登陆成功");
        this.$router.push("/home");
      } else alert("账号或密码错误");
    },
    register: function () {},
  },
};
</script>
 
<!-- 写样式的地方 -->
<style lang="less">
.signs {
  .el-form {
    margin: 100px auto;
    width: 30%;
    margin: 100px auto;
  }
}
</style>
