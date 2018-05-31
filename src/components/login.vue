<template>
  <div class="login">
    <h1>登录</h1>
    <div class="form" >
      <div class="err" v-show="showErr">
        {{errMsg}}
      </div>
      <div class="item">
        <label>账号</label><input type="text" v-model="userName">
      </div>
      <div class="item">
        <label>密码</label><input type="password" v-model="password">
      </div>
      <div class="item">
        <label> </label>
        <button @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { login as verifyLogin } from '../Api/login'
  import { UPDATE_USERINFO } from "../store/keyMutations";

  export default {
    name: "login",
    data() {
      return {
        userName: '',
        password: '',
        showErr: false,
        errMsg: '请输入正确的用户名或密码'
      }
    },
    computed: {
      ...mapGetters({

      })
    },
    watch: {
      userName(value) {
        if (value === '') {
          this.showErr = false
        }
      }
    },
    methods: {
      login() {
        verifyLogin({userName: this.userName, password: this.password}).then(() => {
          this.$store.commit(UPDATE_USERINFO, {
            userName: this.userName, password: this.password
          })
          this.$router.push({path: '/'})
        }).catch(() => {
          this.showErr = true
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .login {
    width: 950px;
    margin: 0 auto;
    .err {
      color: #fe2617;
    }
    h1 {
      padding-bottom: 30px;
    }
    .item {
      margin-bottom: 15px;
    }
    label {
      display: inline-block;
      width: 3em;
    }
    input {
      border: 1px solid #c9c9c9;
      border-radius: 3px;
      width: 200px;
      padding: 5px;
      margin-left: 8px;
      height: 18px;
      font-size: 14px;
      vertical-align: middle;
    }
  }
</style>