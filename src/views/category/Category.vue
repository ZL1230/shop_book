<template>
    <div>
      <nav-bar >
        <template v-slot:default>分类商品</template>
      </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
export default {
  name: "Category",
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>