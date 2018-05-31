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

import { isLogin } from './Api/login'
import { UPDATE_USERINFO } from "./store/keyMutations";

export default {
  name: 'app',
  components: {
    vHeader,
    vFooter,
  },
  computed: {
    isLogin() {
      return this.$store.state.userInfo.userName !== ''
    }
  },
  created() {
    isLogin().then(res => {
      this.$store.commit(UPDATE_USERINFO, {
        userName: res.userName,
        password: res.password
      })
    }).catch(() => {
      alert('请登录')
      this.$router.push({path: '/login'})
    })
  }
}
</script>

<style lang='less'>
@import './assets/css/main.less';
#app {
  /*position: relative;*/
}
</style>
