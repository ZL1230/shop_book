<template>
  <div class="goods">
    <goods-list-item class="goods-item" v-for="(item,index) in goods" :goodsitem="item" :key="item.id"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped lang="scss">
    .goods{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 5px;
    }
</style>