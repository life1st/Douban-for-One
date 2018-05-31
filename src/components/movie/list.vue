<template>
  <div class="subject-list">
    <div class="title cl">
      <button @click="newMovie">看了新电影</button>
      <h2>我的电影</h2>
    </div>
    <card v-for="item in list"
          class="card cl"
          :key="item.id"
          :subject="item"/>
  </div>
</template>

<script>
  import card from './card'
  import { getMovie } from "../../Api/movie";

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
      newMovie() {
        this.$router.push({path: '/movie/new'})
      }
    },
    created() {
      console.log('getmovie')
      getMovie().then(res => {
        this.list = res
      }).catch(() => {
        alert('程序错误')
        this.$router.push({path:'/'})
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