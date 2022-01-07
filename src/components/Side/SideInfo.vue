<template>
  <div class="SideInfo">
    <div class="come">
      <div class="block">
        <span class="demonstration">一起加油吧！</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sideinfo",
  data() {
    return {
      srcs: [],
    };
  },
};
</script>

<style lang="less">
.SideInfo {
  border-radius: 10px;
  display: block;
  width: 100%;
  height: 380px;
  background-color: rgb(240, 240, 240);
  text-align: center;
  img {
    width: 100%;
    border-radius: 10px;
  }
  h3 {
    padding: 0;
    margin: 0;
  }
  .come {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
}
</style>