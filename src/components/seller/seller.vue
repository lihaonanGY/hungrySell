<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送费</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block not-line">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
      </div>
      <split></split>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  import split from 'components/split/split';
  export default{
    data() {
      return {};
    },
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star,
      split
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .overview
    padding 18px
    .title
      font-size 14px
      color rgb(7, 17, 27)
      line-height 14px
    .desc
      padding 8px 0 18px 0
      font-size 0
      border-bottom 1px solid rgba(7, 17, 27, .1)
      .star
        display inline-block
        vertical-align top
        margin-right 8px
      .text
        display inline-block
        vertical-align top
        margin-right 12px
        font-size 10px
        color rgb(77, 85, 93)
        line-height 18px
    .remark
      display flex
      margin-top 18px
      font-size 0
      .block
        flex 1
        text-align center
        border-right 1px solid rgba(7, 17, 27, .1)
        &.not-line
          border none
        h2
          margin-bottom 4px
          font-size 10px
          line-height 10px
          color rgb(147, 153, 159)
        .content
          font-size 10px
          font-weight 200
          color rgb(7, 17, 27)
          line-height 24px
          .stress
            font-size 24px
</style>
