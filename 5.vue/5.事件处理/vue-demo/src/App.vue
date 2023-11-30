<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld1 />-->
<!--  <HelloWorld2 />-->
<!--  <HelloWorld3 />-->
<!--  <HelloWorld4 />-->
<!--  <HelloWorld5 :title2="title" :age2="age" :names2="names"/>-->
<!--  <HelloWorld6 @onMyEvent="getDataHandle"/>-->
<!--  <p>{{message}}</p>-->
<!--  <hello-world7/>-->
<!--  <hello-world8/>-->
<!--  <hello-world9/>-->
  <hello-world10/>
</template>

<script>
// import HelloWorld1 from './0.事件处理/HelloWorld.vue'
// import HelloWorld2 from './1.表单输入绑定/HelloWorld.vue'
// import HelloWorld3 from './2.组件/MyComponent.vue'
// import HelloWorld4 from './2.组件/MyComponent2.vue'
// import HelloWorld5 from './3.prop组件交互/component.vue'
// import HelloWorld6 from './4.自定义事件-数据反向传递/component.vue'
// import HelloWorld7 from './5.引入第三方组件/component.vue'
// import HelloWorld8 from './6.axios网络请求/helloworld.vue'
// import HelloWorld9 from './7.axios网络请求封装/helloworld.vue'
import HelloWorld10 from './8.跨域解决方案/helloworld.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld1,
    // HelloWorld2,
    // HelloWorld3,
    // HelloWorld4,
    // HelloWorld5,
    // HelloWorld6,
    // HelloWorld7,
    // HelloWorld8,
    // HelloWorld9,
    HelloWorld10,
  },
  data(){
    return {
        message:""
    }
  },
  methods:{
    getDataHandle(data){
      this.message=data
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
