<template>
  <div class="wrap">
    <div class="body">

    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/css/mixin.less';
  .body{
    display: flex;
    flex-direction: column;
    //@rex;
    .item{
      width: 100%;
      height:58*@rex;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom:1px solid rgb(213, 213, 213);
      .item-l{
        font-size:17px;
        height: 34*@rex;
        line-height: 34*@rex;
        margin-left:19*@rex;
      }
      .item-r{
        font-size:17px;
        height: 34*@rex;
        line-height: 34*@rex;
        margin-right:19*@rex;
      }
    }
  }
</style>
<script>

export default {

}
</script>
