<template>
  <div>
    <!--使用注册以后的组件-->
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item border-1px">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header.vue';
  import {urlParse} from 'common/js/util';

  const ERR_OK = 0;
  export default{
    data() {
      // data必须是一个函数
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
//            console.log(queryParam);
            return queryParam.id;
          })()
        }
      };
    },
    created() {
      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body;
        if (response.errNo === ERR_OK) {
//          this.seller = response.data;
//          console.log(this.seller);
          this.seller = Object.assign({}, this.seller, response.data);
//          console.log(this.seller);
        }
      });
    },
    components: {
      // 对header进行注册
      // 因为es6支持简写header相当于header：header
      'v-header': header
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    justify-content: space-around
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, .1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
      .active
        color: rgb(240, 20, 20)
</style>
