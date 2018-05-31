<template>
  <header>
    <div class="nav-wrap">
      <nav class="main-nav" v-show="isLogin">
        <ul>
          <li>
            <router-link to="/broadcast">广播</router-link>
          </li>
          <!--<li>-->
            <!--<router-link to="/">相册</router-link>-->
          <!--</li>-->
          <li>
            <router-link to="/notes">日记</router-link>
          </li>
          <li>
            <router-link to="/books">读书</router-link>
          </li>
          <li>
            <router-link to="/movies">电影</router-link>
          </li>
          <!--<li>-->
            <!--<a href="#">豆列</a>-->
          <!--</li>-->
        </ul>
      </nav>
      <div class="user-center">
        <div class="login" v-if="isLogin">
          <router-link to="/">{{userName}}的个人主页</router-link>
          <a href="#" @click.stop="logout">注销</a>
        </div>
        <div class="unlogin" v-else>
          <router-link to="/login">登录</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { UPDATE_USERINFO } from "../store/keyMutations";
  import { logout } from "../Api/login";

  export default {
    name: 'vHead',
    data() {
      return {
      }
    },
    computed: {
      isLogin() {
        return !!this.$store.state.userInfo.userName
      },
      userName() {
        return this.$store.state.userInfo.userName
      }
    },
    methods: {
      logout() {

        logout().then(() => {
          alert('已退出')
          this.$store.commit(UPDATE_USERINFO, {})
          this.$router.push('/login')
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/verb.less";

  header {
    margin-bottom: 20px;
  }
  .nav-wrap {
    padding: 0 40px;
    height: 29px;
    background-color: #545652;
    .main-nav {
      float: left;
      li {
        display: inline-block;
        font-size: 0;
      }
    }
    .user-center {
      float: right;
    }
    a {
      font-size: @base-font-size;
      line-height: @base-line-height;
      color: @base-text-color;
      padding: 0 12px;
      text-decoration: none;
      &:hover {
        color: #fff;
        background: none;
      }
    }
  }
</style>

