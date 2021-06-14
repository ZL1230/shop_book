<template>
  <div>
    <router-view v-slot="{Component}">
      <transition>
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
    <div id="nav">
      <router-link to="/" class="tab-bar-item " >
       <div class="icon" > <i class="iconfont icon-shouye"></i></div>
        <div>首页</div>
      </router-link>
      <router-link to="/category" class="tab-bar-item">
       <div class="icon"> <i class="iconfont icon-fenlei"></i></div>
        <div>分类</div>
      </router-link>
      <router-link to="/shopcart" class="tab-bar-item">
       <div class="icon">
         <van-badge :content="20" max="9">
           <div class="child" />
         </van-badge>
         <i class="iconfont icon-xingzhuanggongnengtubiao-"></i></div>
        <div>购物车</div>
      </router-link>
      <router-link to="/profile" class="tab-bar-item">
      <div class="icon">  <i class="iconfont icon-yonghu"></i></div>
        <div>个人</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    let state=reactive({
      name:'zzzll'
    })
    return {state}
  },
  components: {

  }
}
</script>

<style lang="scss" >
@import "assets/css/base.css";
@import "assets/css/iconfont.css";
#nav{
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100,100,100,.1);
a{
  color: #2c3e50;
  &.router-link-active{
    color: var(--color-high-text);
  }
}
  .tab-bar-item{
    flex: 1;
    height: 49px;
    width: 49px;
    font-size: 14px;
    padding-top:3px ;
    .icon{
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      line-height: 24px;
    }
  }
}
</style>
