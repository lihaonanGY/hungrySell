<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0" @click="decreaseCount">
      <i class="icon-remove_circle_outline"></i>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">
      <i class="icon-add_circle"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event) {
//        Betterscroll在点击时，PC端会判定为两次，betterscroll一次原生的一次，用如下方法屏蔽掉原生的
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
//          vue不能检测不存在的属性的变化，如果需要添加新属性，需要用如下Vue.set的方法
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      },
      decreaseCount(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
    .cart-decrease, .cart-add
      display inline-block
      padding 6px
      vertical-align top
      font-size 24px
      line-height 24px
      color rgb(0, 160, 220)
    .cart-count
      display inline-block
      width 12px
      vertical-align top
      text-align center
      font-size 13px
      line-height 24px
      padding-top 6px
      color rgb(147, 153, 159)
    .cart-add
      display inline-block

</style>
