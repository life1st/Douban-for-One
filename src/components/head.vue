<template>
  <header>
    <div class="nav-wrap">
        <nav class="main-nav">
            <ul>
                <li>
                    <a href="#">广播</a>
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
            <a href="#">{{user.name}}的个人主页/登录</a>
            <a href="#">注销</a>
        </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'head',
  data() {
      return {

      }
  },
  props: {
      user: {
          type: Object,
          default() {
              return {
                  name: 'user0'
              }
          }
      }
  }
}
</script>
<style lang="less" scoped>
header {
  margin-bottom: 20px;
}
.nav-wrap {
  padding: 0 40px;
  height: 29px;
  background-color: #545652;
  @base-font-size: 12px;
  @base-line-height: 29px;
  @base-color: #d5d5d5;
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
    color: @base-color;
    padding: 0 12px;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
}
</style>

