<template>
  <div class="sides">
    <SideInfo />
    <SideRank />
  </div>
</template>
<script>
import SideInfo from "./SideInfo";
import SideRank from "./SideRank";

export default {
  name: "side",
  components: {
    SideInfo,
    SideRank,
  },
};
</script>

<style lang="less">
.sides {
  border-radius: 10px;
  box-shadow: 0px 5px 3px rgba(245, 245, 245, 0.6);
  margin: 0;
  padding: 0;
  width: 100%;
  display: block;
  flex-direction: column;
}
</style>