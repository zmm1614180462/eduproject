<template>
  <div class="wrap">
    <mhead headTitle="学生正确率">
    </mhead>
    <div class="head accuracy">
      <el-input style="height:30px;border-radius:15px;" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21">
      </el-input>
      <img class="img" src="../../assets/image/invalidName@3x.png" alt="">
    </div>
    <div class="body">
      <div class="item" v-for="item in 5">
        <div class="item-l">艾迪</div>
        <div class="item-r">23%</div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import '../../assets/css/mixin.less';
.accuracy{
  display: flex;
  align-items: center;
  img{width: 16*@rex;height:16*@rex;margin-left:14*@rex;}
  .el-input{
  margin-top:10px;
    margin-bottom:14px;
    width: 310*@rex;

  }
  .el-input input{

    width: 310*@rex;
    background: rgb(245,245,245);
    outline: none;border: none;
    height: 30px;
    line-height:30px;
    border-radius:15px;
  }
  .el-input__icon {line-height: 30px!important}
}
</style>

<style lang="less" scoped>
  @import '../../assets/css/mixin.less';
  .head {
    margin-left: 19*@rex;
    display: flex;
  }
  .body {
    display: flex;
    flex-direction: column; //@rex;
    .item {
      color: rgb(66, 66, 66);
      width: 100%;
      height: 58*@rex;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(213, 213, 213);
      .item-l {
        font-size: 17px;
        height: 34*@rex;
        line-height: 34*@rex;
        margin-left: 19*@rex;
      }
      .item-r {
        font-size: 17px;
        height: 34*@rex;
        line-height: 34*@rex;
        margin-right: 19*@rex;
      }
    }
  }
</style>

<script>
  import Mhead from "components/head/Head.vue"
  export default {
    components: {
      Mhead
    },
    methods: {
      sort() {
        console.log("开始排序")
      }
    }
  }
</script>
