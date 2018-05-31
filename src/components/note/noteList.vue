<template>
  <div class="note-list">
    <div class="title cl">
      <button @click="poster" class="new-poster">新日记</button>

      <h2>我的日记</h2>
    </div>
    <ul class="list" v-if="list.length !== 0">
      <li v-for="(item, key) in list" :key="key" class="item cl">
        <router-link :to="`/note/${key}`" class="title">
          {{item.title}}
        </router-link>
        <span class="time">{{item.time}}</span>
        <p class="summary" v-html="summary(item.content)"></p>
      </li>
    </ul>
    <div class="else" v-else>
      <p>暂无日记</p>
    </div>
  </div>
</template>

<script>
  import { getPoster } from "../../Api/poster";

  export default {
    name: "noteList",
    data() {
      return {
        list: {}
      }
    },
    created() {
      getPoster().then(res => {
        this.list = res
      })
    },
    filters: {

    },
    methods: {
      poster() {
        this.$router.push({path: '/poster'})
      },
      summary(text) {
        if (text.length > 20) {
          return text.slice(0, 20) + '...'
        } else {
          return text
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .note-list {
    width: 800px;
    margin: 0 auto;
    .new-poster {
      float: right;
    }
    .item {
      padding-bottom: 8px;
      margin-top: 4px;
      border-bottom: 1px dotted #666;
      .time {
        float: right;
      }
    }
    .summary {
      margin-top: 2px;
      color: #999;
    }
  }
</style>