<template>
  <footer>
    <p>@fuck it License.</p>
  </footer>
</template>

<script>
  export default {
    name: 'vFoot',
  }
</script>

<style scoped lang="less">
  @import "../assets/css/verb.less";

  footer {
    width: @base-content-width;
    margin: 0 auto;
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    font-size: 12px;
    color: #969696;
  }
</style>