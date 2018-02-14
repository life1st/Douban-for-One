<template>
  <div class="daily">
    <p>日记</p>
  </div>
</template>

<script>
  export default {
    name: 'daily',
    beforeCreate() {
      window.title = `${this.user.name}的日记`
    }
  }
</script>

<style scoped lang="less">
  .daily {
    font-size: 12px;
  }
</style>