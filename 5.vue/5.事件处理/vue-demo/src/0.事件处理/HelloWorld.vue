<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="counter+=1">点击:{{counter}}</button><br>
    <button @:click="counter2+=1">点击:{{counter2}}</button><br>
    <button @:click="clickHandle">按钮</button><br>
    <button @:click="updateMessage">修改message</button><br>
    <p>{{message}}</p>
    <button @:click="sayHello('hello1')">事件参数传递hello1</button><br>
    <button @:click="sayHello('hello2')">事件参数传递hello2</button><br>
    <ul>
      <li v-for="(item,index) in names" @click="clickItemHandle(item)"  :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      counter:1,
      counter2:1,
      message:"消息通知",
      names:["iwen","ime","frank"]
    }
  },
  methods:{
    clickHandle:function (){
      alert("啊哈哈哈")
    },
    updateMessage:function (event){
      this.message="消息被撤回了"
      console.log(event)
    },
    sayHello:function (msg){
      alert(msg)
    },
    clickItemHandle:function (msg){
      alert(msg)
    }
  }
}
</script>
