<template>
    <div class="backTop" @click="backtop">
    </div>
</template>

<script>
import {ref} from'vue'
export default {
  name: "BackTop",
  setup(props,{emit}){
    const backtop=()=>{
            emit('bTop')
    }
    return {backtop}
  }
}
</script>

<style scoped lang="scss">
    .backTop{
      width: 40px;
      height: 40px;
      position: fixed;
      bottom: 80px;
      right: 30px;
      z-index: 20;
      box-shadow: 5px 5px 5px #888888;
      border-radius: 50%;
      background: #fcfcfc url("~assets/images/up.png") no-repeat center center;
    }
</style>