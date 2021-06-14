<template>
  <div class="tab-control">
      <div class="tab-control-item" :class="{active:current==index}" v-for="(item,index) in title" :key="index" @click="choose(index)">
        <span>{{item}}</span>
      </div>

  </div>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: "TabControl",
  //第二个参数相当于子传父的发射事件
  setup(props,{emit}){
    let current=ref(0)
    const choose=(index)=>{
        current.value=index
      emit('tabClick',index)
    }
    return {current,choose}
  },
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    background-color: #fff;
    z-index: 9;

    position: sticky;
    top: 44px;
    .tab-control-item{
      flex: 1;
      span{
        padding: 5px;
      }
    }
    .active{
      color: var(--color-high-text);
      span{
        border-bottom: 3px solid var(--color-high-text);
      }
    }
  }
</style>