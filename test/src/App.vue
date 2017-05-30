<template>
  <div id="app">
    <router-view id="top" name="top"></router-view>
    <router-view id="mid" name="mid"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0px;
}

#mid {
  margin: 50px 17%;
  width: 66%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
