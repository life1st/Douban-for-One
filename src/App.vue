<template>
  <div id="app">
    <head></head>
  </div>
</template>

<script>
import head from './components/head'

export default {
  name: 'app',
  components: {
    head,
  }
}
</script>

<style lang='less'>
@import './assets/css/main.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
