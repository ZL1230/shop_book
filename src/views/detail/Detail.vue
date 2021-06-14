<template>
    <div>
      <nav-bar>
        <template v-slot:default>商品详情:{{id}}</template>
      </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import {useRoute} from 'vue-router'
import {ref,onMounted} from 'vue'
export default {
  name: "Detail",
  setup(){
    //拿到vue的当前路由，可以拿到这个当前路由的参数
    const route=useRoute()
    const id=ref('')
    onMounted(()=>{
      id.value=route.query.id
    })
    return {id}
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>