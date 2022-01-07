<template>
  <div class="pic">
    <div class="pics">
      <div class="lun">
        <el-carousel indicator-position="outside" height="400px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.idView" alt="#" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="win">
        <div class="gol">
          <a href="#">
            <img src="../../../static/img/plan.png" alt="#" />
          </a>
        </div>
        <div class="daywork">
          <a href="#">
            <img src="../../../static/img/book.png" alt="#" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "advert",
  data() {
    return {
      tip: "满眼皆星河，星河皆是你",
      imgList: [
        {
          id: 0,
          idView: require("../../../static/navimg/bc1.jpg"),
        },

        {
          id: 1,
          name: "详情",
          idView: require("../../../static/navimg/bc1.jpg"),
        },

        {
          id: 2,
          name: "推荐",
          idView: require("../../../static/navimg/bc1.jpg"),
        },

        {
          id: 3,
          idView: require("../../../static/navimg/bc1.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="less">
.pic {
  .pics {
    margin-top: 20px;
    justify-content: space-between;
    display: flex;
    .lun {
      margin: auto 0;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      width: 68%;
      .el-carousel__item img {
        width: 100%;
        height: 100%;
        opacity: 0.75;
      }
    }
    .win {
      width: 28%;
      display: flex;
      flex-direction: column;
      .gol {
        height: 190px;
        a {
          img {
            width: 100%;
            height: 190px;
          }
        }
      }
      .daywork {
        margin-top: 20px;
        background-color: aqua;
        height: 190px;
        a {
          img {
            width: 100%;
            height: 190px;
          }
        }
      }
    }
  }
}
</style>