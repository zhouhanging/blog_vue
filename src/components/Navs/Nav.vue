<template>
  <div class="nav">
    <el-menu>
      <img @click="toin" class="logo" src="./igo.jpg" alt />

      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link to="/home">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/about">话题</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/topic">资源</router-link>
        </el-menu-item>

      </el-menu>

      <el-menu class="right">
        <el-col :span="12">
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>

        <el-button @click="towr" icon="el-icon-search" type="primary">写</el-button>

        <el-button v-if="!isLogin"  @click="todeng" type="primary">登錄</el-button>

        <!-- <el-avatar  style="margin:10px 5px" v-if="!isLogin" :size="38" :src="circleUrl"></el-avatar> -->
          <span class='username' v-if="isLogin">
              <el-dropdown
                  trigger="click"
                  @command='setDialogInfo'>
                  <span class="el-dropdown-link">
                      <el-avatar  style="margin:10px 5px"  :size="38" :src="user.avatar ?user.avatar : circleUrl"></el-avatar>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command='info'>主页</el-dropdown-item>
                      <el-dropdown-item  command='logout'>退出</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
          </span>

      </el-menu>

    </el-menu>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      searchKey: [],
      state1: "",
      circleUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=306993806,2711758221&fm=26&gp=0.jpg",
    };
  },
  computed: {
    user() {
      const islogin =this.$store.getters.user;
      return islogin
    },
    isLogin(){
     return localStorage.eleToken ? true : false;
    }
    // img(){
    //    let imgmail=this.user.email
    //   let qqnum=parseInt(imgmail);
    //   this.$axios.get('/qqmsg.php',{
    //     params:{qq:qqnum} }).then(
    //       res=>{
    //         return res.headimg
    //       }
    //     ).catch(
    //       error=>{console.log(error)}
    //     )
    // }
  },
  methods: {
    toin() {
      this.$router.push("/");
    },
    towr() {
       //跳转写博客
      this.$router.push("/write");
    },
    todeng() {
      //跳转登录
      this.$router.push("/login");
    },
    logout() {
    // 清除token
    localStorage.removeItem("eleToken");
    this.$store.dispatch("clearCurrentState");
    // 页面跳转
    this.$router.push("/");
    },
     setDialogInfo(cmditem) {
      if (!cmditem) {
        console.log("test");
        this.$message("菜单选项缺少command属性");
        return;
      }
      switch (cmditem) {
        case "info":
          console.log(this.user)
          this.toin();
          break;
        case "logout":
          this.logout();
          break;
      }
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    querySearch(queryString, cb) {
      var searchKey = this.searchKey;
      var results = queryString
        ? searchKey.filter(this.createFilter(queryString))
        : searchKey;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "前端三年", address: "长宁区新渔路144号" },
        { value: "泷千家", address: "天山西路438号" },

    
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.searchKey = this.loadAll();
  },
};
</script>

<style lang="less">
.nav {
  box-sizing: border-box;
  z-index: 10;
  position: fixed;
  top: 0px;
  background-color: #ffffff;
  min-width: 800px;
  font-size: 28px;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 66px;
  a{
    outline: none;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
  }

  .el-menu {
    box-sizing: border-box;
    border: none;
    margin: 0 auto;
    width: 70%;
    display: flex;
    .logo {
      height: 60px;
      display: flex;
      margin: 0 30px;
    }
    .right {
      width: 50%;
      display: flex;
      justify-content: space-between;
      .el-autocomplete {
        margin-top: 6px;
        .el-input {
          margin-top: 6px;
        }
     
      }
      .el-button--primary {
        height: 36px;
        width: 70px;
        margin: auto 5px;
        text-align: center;
      }
      .el-button {
        height: 38px;
        text-align: center;
      }
      .el-avater{
        margin: 10px 5px;
      }
    }
  }

}
</style>