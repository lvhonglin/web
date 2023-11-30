<template>
  <p>{{ chengpin }}</p>
</template>
<script>
import axios from "axios"
import querystring from "querystring"

export default {
  name: "helloworld",
  data() {
    return {
      chengpin: {}
    }
  },
  mounted() {
    axios({
      method: 'get',
      url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
    }).then(res => {
      console.log(res.data)
      this.chengpin = res.data.chengpinDetails[0]
    })
    axios({
      method: "post",
      url: "http://iwenwiki.com/api/blueberrypai/login.php",
      data: querystring.stringify({
        user_id: "iwen@qq.com",
        password: "iwen123",
        "verification_code": "crfvw"
      })
    }).then(res => {
      console.log(res.data)
    })
    axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
        .then(res2 => {
          console.log(res2.data)
        })
    axios.post("http://iwenwiki.com/api/blueberrypai/login.php", querystring.stringify({
      user_id: "iwen@qq.com",
      password: "iwen123",
      "verification_code": "crfvw"
    })).then(res2 => {
      console.log(res2.data)
    })
  }
}
</script>

<style scoped>

</style>