<template>
  <h3>自定义事件-数据反向传递</h3>
  <button @click="sendClickHandle">点击传递</button>

</template>

<script>
export default {
  name: "component",
  data(){
    return {
      "message":"我是子组件"
    }
  },
  methods:{
    sendClickHandle(){
      //参数1：字符串
      //参数2：传递的数据
      this.$emit("onMyEvent",this.message)
    }
  }
}
</script>

<style scoped>

</style>