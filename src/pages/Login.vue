<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">欢迎登录</span>
            </div>

            <el-form :model="loginUser" :rules="rules" ref="loginForm" class="loginForm" label-width="60px">
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginUser.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn">登  录</el-button>
                </el-form-item>
                <div class="tiparea">
                    <p>还没有账号？现在<router-link to='/register'>注册</router-link></p>
                </div>
            </el-form>
        </section>
    </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
  name: "login",
  data() {
    return {
      loginUser: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/api/users/login", this.loginUser).then(res => {
            // 登录成功,后端返回token
            //es6解构
            const { token } = res.data;
            //打印token
            console.log(token);
            //setItem() 作为 Storage 接口的方法 ==> storage.setItem(keyName, keyValue);
            // 如  localStorage.setItem('bgcolor', 'red');
            //将token存在变量名为eleToken的变量中
            localStorage.setItem("eleToken", token);
            // 解析token
            const decode = jwt_decode(token);
            //解析得到用户信息
            //id: "60165f43e1163d4a602fe1a3",
            // avatar: "//www.gravatar.com/avatar/e66ba0b6ea3eac5f095a5d1a20d78f20?s=200&r=pg&d=mm"
            // exp: 1612083036
            // iat: 1612079436
            // id: "60165f43e1163d4a602fe1a3"
            // name: "wdww"
            console.log(decode)
            // 存储数据 
            //  Action 通过 store.dispatch 方法触发：(mutation 必须同步执行这个限制)
            this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));//decode 不为空为已授权为true，反之为false 
            //将用户数据存入到vuex中
            this.$store.dispatch("setUser", decode);
            // 页面跳转
            this.$router.push("/mains");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 判断若为空的状态，则返回真
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  /* background: url(../assets/bg.jpg) no-repeat center center; */
  background-size: 100% 100%;
}
.form_container {
  width: 370px;
  height: 380px;
  position: absolute;
  top: 20%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: rgb(53, 53, 53);
}
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>


