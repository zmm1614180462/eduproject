<template>
  <header>
    <div class="head-con">
      <div class="con">
        <img class="img" src="../../assets/image/icArrowBackCopy2@3x.png" alt="">
      </div>
      <div class="con">{{headTitle}}</div>
      <div class="con">
      <div style="color:#fff;font-size:16px;" v-if="changeUser" @click="goUrl">切换身份</div>
      <div v-if="showSort"  @click="insort" class="con">
        <img class="img" src="../../assets/image/invalidName@3x.png" alt="">
      </div>
      </div>

    </div>
  </header>
</template>

<style lang="less" scoped>
  @import '../../assets/css/mixin.less';
  header {
    height: 0px;
    padding-top: 46*@rex;
  }
  .head-con {
    position: fixed;
    top: 0;
    width: 100%;
    background: #00c184;
    font-size: 16px;
    height: 46*@rex;
    display: flex;
    align-items: center;
   // justify-content: space-between;
    .con {
      color: #fff;
      height: 16*@rex;
      display: flex;
      align-items: center;
      flex-grow: 1;
      width: 30%;

    }
    .con:nth-child(1) {
      padding-left:16*@rex;
    img {
        width: 16*@rex;
        height: 16*@rex;
      }
    }
    .con:nth-child(2) {
      font-size: 16px;
      align-items: center;
      justify-content: center;

    }
    .con:nth-child(3) {
      text-align: right;
      padding-right: 16*@rex;
      img {
        width: 16*@rex;
        height: 16*@rex;
      }
    }
  }
</style>

<script>


  export default {
    props: ['headTitle','showSort','changeUser'],
    methods:{
      insort(){
        this.$emit("sort")
        console.log("排序事件")
      },
      goUrl(){
        console.log("跳转路由")
      }
    }
  }
</script>
