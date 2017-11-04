<template>
  <div class="wrap">
    <mhead headTitle="未完成名单">
    </mhead>

    <div class="body">
      <div class="item" v-for="item in 5">
        <div class="item-l">艾迪</div>
        <div class="item-r">23%未完成</div>
      </div>
    </div>
  </div>
</template>

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
      background-color: #fff;
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
<style lang="less">
body{background:rgb(244,244,244);}
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
