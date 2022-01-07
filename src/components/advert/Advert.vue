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
          idView:"https://pic1.zhimg.com/80/v2-80164e3d80a76b0ded0dbc0f8f075ea6_720w.jpg?source=1940ef5c",
        },

        {
          id: 1,
          name: "详情",
          idView:"https://pic1.zhimg.com/80/v2-fd090cbaebfa92bfd607c62b82be11f3_720w.jpg?source=1940ef5c",
        },

        {
          id: 2,
          name: "推荐",
          idView:"https://pic4.zhimg.com/80/v2-05ec551e777b1204077f3e1c8f86a498_720w.jpg?source=1940ef5c",
        },

        {
          id: 3,
          idView:"https://pic4.zhimg.com/80/v2-24167fb0226519f8f8b28df24eb81e8c_720w.jpg?source=1940ef5c",
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