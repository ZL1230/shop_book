<template>
    <div class="main">
      <nav-bar >
        <template v-slot:left></template>
      </nav-bar>
      <tab-control v-show="isTabFixed" :title="['畅销','流行','精选']" @tabClick="tabClick"></tab-control>
      <!--这是滚动的大盒子部分-->
     <div class="wrapper">
      <div class="content">
      <!--ref用于获取轮播图和banner一起的高度-->
       <div ref="banref">
        <home-swiper :banners="banners" ></home-swiper>
         <recommend-view :recommends="recommends"></recommend-view>
       </div>
        <tab-control  :title="['畅销','流行','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </div>
     </div>
    <back-top v-show="isShowBackTop" @bTop="bTop"></back-top>
    </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import HomeSwiper from "./childrenComps/HomeSwiper";
import RecommendView from "./childrenComps/RecommendView";
import TabControl from "components/content/tabControl/TabControl";
import {getHomeAllData,getHomeGoods} from "network/home";
import {onMounted,ref,reactive,computed,watchEffect,nextTick} from "vue";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from 'components/common/backTop/BackTop'
import BScroll from 'better-scroll'

export default {
  name: "Home",
  setup(){
    const recommends=ref([])  //提前声明异步加载之前为空，否则页面会报错
    //商品列表数据模型
    const goods=reactive({
          sales:{page:1,list:[]},
          recommend:{page:1,list:[]},
          new:{page:1,list:[]},
    })

    //轮播图数据
    const banners=ref([])

    //确定当前点击的是哪个选项卡 ，根据选项卡 向商品列表传递不同的值
    let currentType=ref('sales')

    //通过计算属性，将当前类型的数据传给goods-list组件
    const showGoods=computed(()=>{
      return goods[currentType.value].list
    })

    //定义一个bscroll
    let bscroll=reactive({

    })

    //定义一个控制选项卡 显示隐藏的变量
    let isTabFixed=ref(false)
    let isShowBackTop=ref(false)
    let banref=ref(null)

    onMounted(()=>{
      getHomeAllData().then(res=>{
         recommends.value=res.goods.data
        banners.value=res.slides
      },err=>{})
      getHomeGoods('sales').then(res=>{
        goods.sales.list=res.goods.data
      })
      getHomeGoods('recommend').then(res=>{
        goods.recommend.list=res.goods.data
      })
      getHomeGoods('new').then(res=>{
        goods.new.list=res.goods.data
      })

      //创建BetterScroll对象
       bscroll=new BScroll(document.querySelector('.wrapper'),{
        probeType:3,  //0 1 2 3(只要运动就出发scroll事件)
        click:true,    //滚动是否允许点击
        pullUpLoad:true   //上拉加载更多
      })
      //触发滚动事件
      bscroll.on('scroll',(position)=>{
                 console.log(banref.value.offsetHeight)
        if((-position.y)>banref.value.offsetHeight){
          isTabFixed.value=true
          isShowBackTop.value=true
        }else{
          isTabFixed.value=false
          isShowBackTop.value=false
        }
      })

      //下拉加载更多数据，触发pullUpload
      bscroll.on('pullingUp',()=>{
        console.log('上拉加载更多')
        const  page=goods[currentType.value].page+1
        getHomeGoods(currentType.value,page).then(res=>{
          goods[currentType.value].list.push(...res.goods.data)
          goods[currentType.value].page+=1
        })
        //完成上拉 ，等数据请求完成，要将数据展示出来
        bscroll.finishPullUp()
        // console.log(document.querySelector('.content').clientHeight)
        // console.log(page)
        //重新计算高度
        bscroll.refresh()
      })
    })

    //选项卡的点击事件
    const tabClick=(index)=>{
      //点击切换的时候，
      let types=['sales','new','recommend']
      currentType.value=types[index]
      //点击不同的选项卡 它的高度应该是重新计算新的
      nextTick(()=>{
        //重新计算高度  存在才调用 不存在不调用
        bscroll && bscroll.refresh()
      })
    }
    //界面任何一个变量有变化，都会监听触发
    watchEffect(()=>{
      //数据变化，页面刷新完之后，延迟刷新
        nextTick(()=>{
            //重新计算高度  存在才调用 不存在不调用
          bscroll && bscroll.refresh()
        })
    })

    //点击回到顶部的按钮 ，父接受子传递过来的方法
    const bTop=()=>{
         // console.log(1)
        bscroll.scrollTo(0,0,500)   //自带的api，可以滚动到指定的位置
    }

    return {recommends,tabClick,goods,showGoods,isTabFixed,banref,isShowBackTop,bTop
    ,banners
    }
  },

  components:{
    HomeSwiper,
    GoodsList,
    NavBar,
    RecommendView,
    TabControl,
    BackTop
  }
}
</script>

<style lang="scss" scoped>
.main{
  position: relative;
  height: 100vh;
}
  .banners{
    width: 100%;
    height: auto;
  }
  .wrapper{
    position: absolute;
    top: 45px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .content{

  }
</style>