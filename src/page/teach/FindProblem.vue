<template>
  <div class="wrap">
    <mhead headTitle="发现问题">
    </mhead>

    <div class="body">
      <div class="f-p" style="font-size:18px;">
        发现问题
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/mixin.less';
  .body {
    display: flex;
    padding-left:14*@rex;padding-right: 15*@rex;
    flex-direction: column; //@rex;
  }
  .f-p{
    font-size:18px;line-height:18px;padding-left:7*@rex; border-left: 3px solid @green;
    margin-top:17*@rex; margin-bottom:10*@rex;
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
