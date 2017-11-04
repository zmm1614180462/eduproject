<template>
  <div class="wrap">
    <!-- 头部测试后期需要修改 -->
    <mhead headTitle="消息"/>

    <tda :events="demoEvents" v-on:handleChangeCurday="cur-day-changed"></tda>

    <div class="body">
      <div class="work">
       作业情况
      </div>
      <div class="workf">
          <div style="" class="aside-left"></div>
          <div class="aside-right"></div>
      </div>
    </div>




  </div>
</template>

<style lang="less" scoped>
@import "../../assets/css/mixin.less";
.body{
  width: 100%;background-color: rgb(247,247,247);
  display: flex;
  flex-direction: column;
  padding-left:16*@rex;padding-right: 13*@rex;
}
.work{
  font-size: 18px;color:rgb(74,74,74);
  height: 18px;line-height: 18px;border-left: 3px solid @green;padding-left:6px;margin-bottom:4*@rex;
}
.workf{
  width:100%;height:200*@rex;background-color: #fff;display: flex;justify-content: center;padding:20*@rex 20*@rex 0 ;
}
</style>

<script>
import Mhead from "components/head/Head.vue";
import Tda from "components/src/vue-event-calendar"
export default {
  components: {
    Mhead,Tda
  },
  data() {
    return {
      demoEvents: [
      ]
    };
  },
  methods: {
    monthChange(month) {

    },

    dayChange(day) {

    }
  }
};
</script>





