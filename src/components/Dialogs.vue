<template>
    <div class="dialogs"> 
      <el-button type="text" @click="dialogVisible = true"><i class="iconfont icon-qa"></i></el-button>

      <el-dialog
      :center='true'
      :modal-append-to-body='false'
      :append-to-body='true'
      title="欢迎来到问答系统"
      :visible.sync="dialogVisible"
      width="50%"  
      :before-close="handleClose">

      <span> <i class="iconfont icon-girl"></i> 您有什么问题都可以问我哟！</span>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>

       </el-dialog>

    </div>
</template>

<script>
export default {
    name:"dialogs",
      data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>

<style lang="less" scoped>
.dialogs{
    i{
      font-size: 21px;
      color: black;
    }
    .el-dialog  {
      .el-dialog__header{
        flex: 1;
          .el-dialog__title{
            justify-content: center;
          }
      }
      .el-dialog__body{
        span{
          font-size: 26px;
          color: blue;
        }
        flex: 5;
      }
      .el-dialog__footer{
        flex: 1;
      }
    }
}
</style>