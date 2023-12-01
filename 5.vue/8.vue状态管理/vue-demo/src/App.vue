<template>
  <nav>
    <h3>读取vuex的counter:{{$store.state.counter}}</h3>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/news">news</router-link>
  </nav>
  <router-view/>
</template>
<script>
import NewView from './views/NewView.vue'
export default {
  name: 'App',
  components: {

    NewView,
  }
}
</script>

<style>
/*对应的是这个目录下的appid的div元素：public/index.html*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
