<template>
  <div id="app">
    <!--使用注册以后的组件-->
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      i am content
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default{
    components: {
      // 对header进行注册
      // 因为es6支持简写header相当于header：header
      'v-header': header
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display: flex
      width: 100%
      justify-content: space-around
      height: 40px
      line-height: 40px
      .tab-item
        flex: 1
        text-align: center
</style>
