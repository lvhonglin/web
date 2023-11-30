<template>
  <p>{{ msg }}</p>
</template>
<script>
import api from "./api/index";
export default {
  name: "helloworld",
  mounted() {
    api.getChengPin().then(res=>{
      console.log(res.data)
    })
  }
}
</script>

<style scoped>

</style>