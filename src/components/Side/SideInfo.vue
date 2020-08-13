<template>
  <div class="SideInfo">sideinfo</div>
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
}
</style>