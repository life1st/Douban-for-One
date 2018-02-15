<template>
  <header>
    <div class="nav-wrap">
      <nav class="main-nav">
        <ul>
          <li>
            <router-link to="/broad-cast">广播</router-link>
          </li>
          <li>
            <a href="#">相册</a>
          </li>
          <li>
            <a href="#">日记</a>
          </li>
          <li>
            <a href="#">读书</a>
          </li>
          <li>
            <a href="#">电影</a>
          </li>
        </ul>
      </nav>
      <div class="user-center">
        <div class="login" v-if="isLogin">
          <a href="#">{{user.name}}的个人主页</a>
          <a href="#">注销</a>
        </div>
        <div class="unlogin">
          <a href="#">登录</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'vHead',
    data() {
      return {
        isLogin: false
      }
    },
    props: {
      user: {
        type: Object,
        default() {
          return {
            user: ''
          }
        }
      }
    },
    computed: {
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
      }
    }
  }
</style>

