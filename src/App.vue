<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './components/head'
import vFooter from './components/foot'

export default {
  name: 'app',
  components: {
    vHeader,
    vFooter,
  }
}
</script>

<style lang='less'>
@import './assets/css/main.less';
#app {
  /*position: relative;*/
}
</style>
