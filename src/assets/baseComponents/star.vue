<template>
  <ul class="star-list">
    <li v-for="i in score" :key="i" class="star">★</li>
  </ul>
</template>

<script>
  export default {
    name: 'star',
    props: {
      score: {
        type: Number,
        default() {
          return 5
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .star-list {
    display: inline-flex;
    flex-direction: row;
    margin-right: 4px;
    .star {
      font-size: 14px;
    }
  }
</style>