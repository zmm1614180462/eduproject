<template>
  <div class="wrap">
    <!-- 头部测试后期需要修改 -->
    <mhead headTitle="数学作业本" />
    <div class="body">
      <div class="workT">
        <p>五年级二班</p>
        <p>数学（上册）</p>
      </div>
      <div class="process">
        <el-progress type="circle" :percentage="25" width="100">
          作业本进度
        </el-progress>
      </div>
    </div>
    <div class="bodT">
      <div class="count">
        <p  class="cT" style="font-size:20px;">今日批改题目总数</p>
        <p style="font-size:64px;">283</p>
      </div>

      <div class="ufinsh">
        <img class="w-icon" src="../../assets/image/editicon@3x.png" alt="">
        <p >待批改题目</p>
        <p class="r" style="">20 ></p>
      </div>
      <div class="ufinsh error">
        <img class="w-icon" src="../../assets/image/erricon@3x.png" alt="">
        <p >错题记录</p>
        <p class="r" style="">240 ></p>
      </div>

    </div>
  </div>
</template>

<style lang="less">
  body {
    background: rgb(245, 245, 245)
  }
</style>

<style lang="less" scoped>
  @import "../../assets/css/mixin.less";
  .body {
    width: 100%;
    background-color: @green;
    display: flex;
    justify-content: space-between;
    padding-left: 24*@rex;
    padding-right: 40*@rex;
    padding-bottom: 21*@rex;
    padding-top: 218@rex;
  }
  .workT {
    font-size: 30*@rex;
    font-weight: inherit;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center; //align-items: center;
    p {
      color: #fff
    } // margin-right:17*@rex;
  }
  .work {
    font-size: 18px;
    color: rgb(74, 74, 74);
    height: 18px;
    line-height: 18px;
    border-left: 3px solid @green;
    padding-left: 6px;
    margin-bottom: 4*@rex;
  }
  .bodT {

    height: 100%;
    display: flex;
    padding-left: 15*@rex;
    padding-right: 15*@rex;
    flex-direction: column;
    .count {
    margin-top:10*@rex;
    border-radius:4px;
       background:#fff;
      padding-top: 37*@rex;
      padding-bottom: 40*@rex;
      p {
        text-align: center;
      }
      .cT {
        margin-bottom: 20*@rex;
      }
    }
  }
  .ufinsh{
    border-left:5*@rex solid @green;
    border-radius:4px;
    display: flex;
    height: 60*@rex;
    background:#fff;margin-top:20px;
    //justify-content: center;
    align-items:center;
    .w-icon{
      width:28*@rex;height:25*@rex;margin-left:19*@rex;margin-right:19*@rex;
    }
    p{font-size:18px;line-height:18px;white-space:nowrap;}
    .r{
      width:100%;
      color:@green;
      text-align:right;
      padding-right:14*@rex;
    }
  }
</style>

<script>
  import Mhead from "components/head/Head.vue";
  import Tda from "components/src/vue-event-calendar"
  export default {
    components: {
      Mhead,
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>





