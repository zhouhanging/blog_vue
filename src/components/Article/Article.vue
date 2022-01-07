<template>
  <div class="articlepart">
    <div class="lis">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-submenu index="1">
          <template slot="title">排序</template>
          <el-menu-item index="1-1">最新</el-menu-item>
          <el-menu-item index="1-2">最热</el-menu-item>
          <el-menu-item index="1-3">榜单</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">前端</template>
          <el-menu-item index="2-1">基础</el-menu-item>
          <el-menu-item index="2-2">工具</el-menu-item>
          <el-menu-item index="2-3">框架</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">后端</template>
          <el-menu-item index="3-1">node</el-menu-item>
          <el-menu-item index="3-2">数据库</el-menu-item>
          <el-menu-item index="3-3">框架</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">链接</template>
          <el-menu-item index="4-1">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
          <el-menu-item index="4-2">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
          <el-menu-item index="4-3">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <div class="arts">
      <ArticleList />
    </div>
  </div>
</template>

<script>
import ArticleList from "./ArticleList";
export default {
  name: "articlepart",
  components: {
    ArticleList,
  },
};
</script>

<style lang="less">
.articlepart {
  width: 100%;
  border-radius: 10px;
  .lis {
    border-bottom: 1px solid #409eff;
    line-height: 60px;
    font-size: 20px;
    width: 100%;
    height: 60px;
  }
}
</style>