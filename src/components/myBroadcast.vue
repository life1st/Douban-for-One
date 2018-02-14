<template>
  <div class="broad-cast">
    <ul class="list">
      <li>
        <div class="user-info">
          <div class="avatar">
            <img :src="user.avatar" alt="user-avatar">
          </div>
          <p>{{user.name}}<span>{{operation}}</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'my-broadcast',
    props: {
      user: {
        type: Object,
        default() {
          return {
            name: 'Life_1st',
            avatar: 'https://img3.doubanio.com/icon/u84565043-2.jpg'
          }
        }
      }
    },
    computed: {
      operation() {
        return '看过'
      }
    }
  }
</script>

<style scoped>

</style>