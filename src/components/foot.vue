<template>
  <footer>
    <p>2018 Yang Jiao.</p>
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
    border-top: 1px dashed @base-text-color;
    width: @base-content-width;
    margin: 0 auto;
    padding: 4px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 12px;
    color: @base-text-color;
    text-align: center;
    background-color: #fff;
  }
</style>