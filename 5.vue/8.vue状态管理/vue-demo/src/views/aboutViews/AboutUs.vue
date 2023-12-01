<template>
  <h3>关于我们</h3>
  <h3>读取vuex的counter:{{counter}}</h3>
</template>
<script>
import {mapState} from "vuex"
export default {
  name: "AboutUs",
  computed:{
    ...mapState(["counter"])
  }
}
</script>

<style scoped>

</style>