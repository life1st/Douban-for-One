<template>
  <div class="subject-list">
    <div class="title cl">
      <button @click="newBook">看了新书</button>
      <h2 >我的阅读</h2>
    </div>
    <card v-for="item in list"
          class="card cl"
          :key="item.id"
          :subject="item"/>  </div>
</template>

<script>
  import card from './card'
  import { getBook } from "../../Api/book";

  export default {
    name: "subjectList",
    components: {
      card
    },
    data() {
      return {
        list: {}
      }
    },
    computed: {
      routerPath() {
        return this.$route.path
      },
      isBooks() {
        return this.routerPath.indexOf('books') !== -1
      }
    },
    methods: {
      newBook() {
        this.$router.push({path: '/book/new'})
      }
    },
    created() {
      console.log('getbook')
      getBook().then(res => {
        this.list = res
        console.log(this.list)
      }).catch(() => {
        alert('程序错误')
        this.$router.push({path: '/'})
      })
    }
  }
</script>

<style scoped lang="less">
  .subject-list {
    width: 800px;
    margin: 0 auto;
    button {
      float: right;
    }
    .card {
      margin-bottom: 12px;
    }
  }
</style>