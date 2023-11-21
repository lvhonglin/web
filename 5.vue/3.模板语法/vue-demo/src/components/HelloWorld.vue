<template>
  <div class="hello">
    <h3>学习vue:模板语法</h3>
    <p>{{ message }}</p>
    <div>{{rawHtml}}</div>
    <div v-html="rawHtml"></div>
    <div v-bind:id="dynamicId">1</div>
    <div :id="dynamicId">2</div>
    <p>{{num+10}}</p>
    <p>{{flag?"真猴子":"假猴子"}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      message:"测5试",
      rawHtml:"<a href='http://www.baidu.com'>百战</a>",
      dynamicId:"10001",
      num:10,
      flag:true
    }
  }
}
</script>
