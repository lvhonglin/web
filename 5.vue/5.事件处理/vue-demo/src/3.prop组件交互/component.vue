<template>
  <h3>prop传递数据</h3>
  <p>{{title2}}</p>
  <p>{{age2}}</p>
  <ul>
    <li v-for="(name,index) in names2" >{{index+":"+name}}</li>
  </ul>
</template>

<script>
export default {
  name: "component",
  props:{
    "title2":{
      type:String,
      default:""
    },
    "age2":{
      type:Number,
      default:0
    },
    "names2":{
      type:Array,
      //数组和对象必须使用函数进行返回
      default:function (){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>