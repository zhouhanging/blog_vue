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

        <el-button @click="todeng" type="primary">登录</el-button>
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
      restaurants: [],
      state1: "",
    };
  },
  methods: {
    toin() {
      this.$router.push("/");
    },
    towr() {
      this.$router.push("/write");
    },
    todeng() {
      this.$router.push("/sign");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
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
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号",
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号",
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号",
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号",
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室",
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号",
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位",
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼",
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13",
        },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style lang="less">
.nav {
  background-color: #ffffff;
  min-width: 800px;
  font-size: 28px;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 60px;
  .el-menu {
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
        height: 39px;
        width: 80px;
        margin: auto 5px;
        text-align: center;
      }
      // .el-button {
      //   height: 38px;
      //   text-align: center;
      // }
    }
  }
}
</style>