<template>
  <div v-show="showFlag" class="food" transition="move" v-el:food>
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image">
        <div class="back" @click="hide">
          <i class="icon-arrow_lift"></i>
        </div>
      </div>
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span><span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
        </div>
      </div>
      <div class="cartcontrol-wrapper">
        <cartcontrol :food="food"></cartcontrol>
      </div>
      <div class="buy" @click="addFirst" v-show="!food.count || food.count===0" transition="fade">加入购物车</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = true;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$els.food, {click: true});
          } else {
            this.scroll.refresh();
          }
        });
      },
      hide() {
        this.showFlag = false;
      },
      addFirst(event) {
//          防止pc多次点击
        if (!event._constructed) {
          return;
        }
//        console.log(event.target);
        this.$dispatch('cart.add', event.target);
        Vue.set(this.food, 'count', 1);
      }
    },
    components: {
      cartcontrol
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position fixed
    left 0
    top 0
    bottom 48px
    z-index 30
    background #fff
    width 100%
    &.move-transition
      transition all 0.2s linear
      transform translate3d(0, 0, 0)
    &.move-enter, &.move-leave
      transform translate3d(100%, 0, 0)
    .food-content
      position relative
    .image-header
      position relative
      width 100%
      height 0
      padding-top 100%
      img
        position absolute
        width 100%
        height: 100%
        left 0
        top 0
      .back
        position absolute
        left 0
        top 10px
        .icon-arrow_lift
          display block
          padding 10px
          font-size 20px
          color #fff
    .cartcontrol-wrapper
      position absolute
      right 12px
      bottom 12px
    .buy
      position absolute
      right 18px
      bottom 18px
      z-index 10
      height 24px
      line-height 24px
      padding 0 12px
      border-radius 12px
      color #fff
      background rgb(0, 160, 220)
      box-sizing border-box
      font-size 10px
      &.move-transition
        transition all 0.2s
        opacity 0
      &.move-enter,&.move-leave
        opacity 1
    .content
      padding 18px
      .title
        line-height 14px
        margin-bottom 8px
        font-size 14px
        font-weight 700
        color rgb(7, 17, 27)
      .detail
        margin-bottom 18px
        height 10px
        line-height 10px
        font-size 0
        .sell-count, .rating
          font-size 10px
          color rgb(147, 153, 159)
        .sell-count
          margin-right 12px

      .price
        font-weight 700
        line-height 24px
        .now
          margin-right 8px
          font-size 14px
          color rgb(240, 20, 20)
        .old
          text-decoration line-through
          font-size 10px
          color rgb(147, 153, 159)
</style>
