<template>
    <div class="nav-bar">
        <div class="left" @click="goback">
          <slot name="left" >
          <img src="~assets/images/zuojiantou.png">
          </slot>
        </div>
        <div class="center"><slot >图书商城</slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
import  {useRouter} from 'vue-router'
export default {
  name: "NavBar",
  setup(){
    const router=useRouter()
    const goback=()=>{
      router.go(-1)
    }
    return {goback}
  }
}
</script>

<style lang="scss" scoped>
  .nav-bar{
    display: flex;
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    height: 45px;
    line-height: 45px;
    text-align: center;
    box-shadow: 0 2px 0px rgba(100,100,100,.2);
    .left,
    .right{
        width: 60px;
    }
    img{
      width: 45px;
      padding: 10px;
    }
    .center{
      //让中间的占剩余部分
      flex: 1;
      background-color: var(--color-tint)
    }
  }
</style>