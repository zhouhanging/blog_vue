<template>
  <div class="pic">
    <div class="pics">
      <div class="lun">
        <el-carousel indicator-position="outside" height="400px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item.url }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="win">
        <div class="gol">
          <a href="#">
            <img src="../../static/navimg/p4.png" alt="#" />
          </a>
        </div>
        <div class="daywork">
          <a href="#">
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2940457600,1737576896&fm=26&gp=0.jpg"
              alt="#"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topic",
  data() {
    return {
      tip: "满眼皆星河，星河皆是你",
      item: [{ url: "../../static/navimg/pi.png" }],
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
      .el-carousel__item h3 {
        color: #70a9f5;
        font-size: 18px;
        opacity: 0.75;
        line-height: 390px;
        margin: 0 0 0 10px;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #9cc5ff;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #70a7e6;
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