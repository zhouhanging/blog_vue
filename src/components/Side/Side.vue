<template>
  <div class="sides">
      <img src="https://up.enterdesk.com/edpic_360_360/50/16/e6/5016e60e69eba729ec75d46da09c6755.jpg" alt="">
      <p>人生如逆旅，我亦是行人</p>
  </div>
</template>
<script>
import SideInfo from "./SideInfo";

export default {
  name: "side",
  components: {
    SideInfo
  },
};
</script>

<style lang="less">
.sides {
  background-color: rgb(247, 246, 246);
  border-radius: 10px;
  box-shadow: 0px 5px 3px rgba(245, 245, 245, 0.6);
  margin: 0;
  padding: 0;
  width: 100%;
  display: block;
  flex-direction: column;
  img{
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    margin: 5px;
    border-radius: 7%;
  }
  p{
    text-align:center;
  }
}
</style>