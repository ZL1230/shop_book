<template>
    <div class="goods-item">
      <img v-lazy="goodsitem.cover_url" alt="">
      <div class="info">
        <p>{{goodsitem.title}}</p>
        <span class="price"><small>￥</small>{{goodsitem.price}}</span>
        <span class="collect">{{goodsitem.collects_count}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .goods-item{
    width: 45%;
    padding-bottom: 40px;
    position: relative;
    img{
      width: 100%;
      border-radius: 5px;
    }
    .info{
      font-size: 14px;
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      text-align: center;
      overflow: hidden;
      p{
          overflow: hidden;
        text-overflow: ellipsis;   //超出部分显示...
        white-space: nowrap;
        margin-bottom: 3px;
      }
      .price{
        color: red;
        margin-right: 20px;
      }
      .collect{
          position: relative;
        &::before{
          content: '';
          position: absolute;
          left: -15px;
          width: 14px;
          height: 14px;
          top: -1px;
          background: url('~assets/images/collect.png') 0px 0/14px ;
        }
      }
    }
  }
</style>