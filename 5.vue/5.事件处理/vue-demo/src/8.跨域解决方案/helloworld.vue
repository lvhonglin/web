<template>
  <p>{{ msg }}</p>
</template>
<script>
//修改vue.config.js
// module.exports = defineConfig({
// transpileDependencies: true,
//     devServer:{
//   proxy:{
//     "/s":{
//       target:"https://www.baidu.com/",
//           changeOrigin:true
//     }
//   }
// }
// })

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