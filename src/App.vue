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
import vIndex from './components/index'
export default {
  name: 'app',
  components: {
    vHeader,
    vFooter,
    vIndex
  }
}
</script>

<style lang='less'>
@import './assets/css/main.less';

</style>
