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
    border-top: 1px dashed @base-text-color;
    width: @base-content-width;
    margin: 0 auto;
    padding: 4px 0;
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    font-size: 12px;
    color: @base-text-color;
    text-align: center;
  }
</style>