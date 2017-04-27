<template>
  <div class="goods">
    <div class="menu-wrapper"></div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    data() {
      return {
        goods: {}
      };
    },
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if (response.errNo === ERR_OK) {
          this.goods = response.data;
          console.log(this.goods);
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods
    display flex
    width 100%
    position absolute
    top 174px
    bottom 46px
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      /*width是为了兼容安卓设备*/
      width 80px
      background #f3f5f7
    .foods-wrapper
      flex 1
</style>
