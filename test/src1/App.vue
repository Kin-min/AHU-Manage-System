<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    
    <secondcomponent></secondcomponent>
    <firstcomponent></firstcomponent>
  
  </div>
</template>
<script>
import secondcomponent from './components/secondcomponent.vue'
import firstcomponent from './components/firstcomponent.vue'

export default {
  name: 'app',
  components: {firstcomponent, secondcomponent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
