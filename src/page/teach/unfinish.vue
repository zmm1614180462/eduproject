<template>
  <div class="wrap">
    <!-- 头部测试后期需要修改 -->
    <mhead headTitle="消息"/>
    <div class="body" style="width:100%;">

      <ul class="mytab clearfix">
          <li style="float:left;">
            <div @click="changeT" :class="{ isborder:finish }">作业完成</div>
          </li>
          <li style="float:right;">
            <div @click="changeT" :class="{ isborder:!finish }">作业异常</div>
          </li>
        </ul>
    </div>
    <!-- 作业完成的 -->
    <div v-if="finish" class="finish">
      <div v-for="item in 5">
        <div style="color: rgb(155, 155, 155) ;" class="bod-t">
          今日
        </div>
        <div class="bod-con clearfix" v-for="ite in 5">
          <img src="../../assets/image/girlCopy@3x.png" class="con-l" />
          <div class="con-r">
            <ul>
              <li>苏颖欣</li>
              <li>语文作业本</li>
              <li>18:50-19:20 </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 作业异常 -->
    <div v-if="!finish" class="unfinish">
      <div v-for="item in 5">
        <div style="color: rgb(155, 155, 155) ;" class="bod-t">
          09/02
        </div>
        <div class="bod-con clearfix" v-for="ite in 5">
          <img src="../../assets/image/girlCopy@3x.png" class="con-l" />
          <div class="con-r">
            <ul>
              <li>苏颖欣</li>
              <li>错题80%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../assets/css/mixin.less";
  .mytab {
    padding:0 60*@rex;
    background: #fff;
    width: 100%;
    height: 35px;
    color: rgb(155, 155, 155); //justify-content: center;
    li {
      height: 35px;
      border-bottom: 1px solid #fff; //height: 30px;
      div {
        height: 35px;
        font-size: 16px;
        padding-bottom: 7px;
        padding-top: 7px;
        color: rgb(155, 155, 155);
      }

      div.isborder {
        border-bottom: 1px solid #54bd88;
        color: #54bd88;
      }

    }
  }



  .bod-t {
    font-size: 14px;
    height: 25*@rex;
    line-height: 25*@rex;
    background: #f5f5f5;
    padding-left: 19*@rex
  }
  .bod-con {
    height: 56*@rex;
    display: flex;
    align-items: center;
    .con-l {
      width: 34*@rex;
      height: 34*@rex;
      margin-left: 21*@rex;
    }
    .con-r {
      height: 20*@rex;
      min-height: 14px;
      line-height: 20*@rex;
      font-size: 14px;
      ul {
        margin-left: 10*@rex;
        li {
          display: inline-block;
          margin-right: 20*@rex
        }
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
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        finish: true,
        tableData: Array(20).fill(item)
      }
    },
    methods: {
      changeT() {
        this.finish = !this.finish
      }
    }
  };
</script>





