<template>
  <div>
    <!--使用注册以后的组件-->
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header.vue';
  export default{
    components: {
      // 对header进行注册
      // 因为es6支持简写header相当于header：header
      'v-header': header
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
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
