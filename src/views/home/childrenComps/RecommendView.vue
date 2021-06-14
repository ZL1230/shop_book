<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends.slice(0,4)" :key="item.id">
      <a href="" @click.prevent="goDetail(item.id)">
        <img v-lazy="item.cover_url" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: "RecommendView",
  setup(){
    const router=useRouter()
    const goDetail=(id)=>{
      router.push({path:'/detail',query:{id}})
    }
    return {goDetail}
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 15px 0 20px;
    border-bottom: 8px solid #eee;
    font-size: 12px;
    .recommend-item{
      flex: 1;
      img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
      }
    }
  }
</style>