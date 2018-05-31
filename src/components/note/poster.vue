<template>
  <div class="poster">
    <div class="title">
      <input type="text" placeholder="标题" v-model="title">
    </div>
    <div class="content">
      <textarea cols="30" rows="10" v-model="content" placeholder="你的故事"></textarea>
    </div>
    <div class="btns">
      <button @click="submit" class="publish">发表</button>
    </div>
  </div>
</template>

<script>
  import { newPoster } from "../../Api/poster";

  export default {
    name: "poster",
    data() {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      submit() {
        let id = Math.floor(Math.random() * 1000)
        let now = new Date()
        let time = `${now.getFullYear()} - ${now.getMonth() + 1} - ${now.getDay()}`
        if (this.title === '') {
          alert('至少需要输入标题')
          return
        }
        newPoster({
          title: this.title,
          content: this.content,
          time,
          id
        }).then(() => {
          alert('添加成功')
        }).catch(() => {
          alert('添加失败')
        })
        this.$router.push({path: '/notes'})
      }
    }
  }
</script>

<style scoped lang="less">
  .poster {
    width: 732px;
    margin: 0 auto;
    input,
    textarea {
      border: none;
      resize: none;
      width: 100%;
      height: 100%;
      &:focus {
        outline: none;
      }
    }
    .mg{
      margin: 21px 21px 12px 21px;
    }
    .title {
      .mg;
      input {
        font-size: 32px;
        transition: border-bottom-color 180ms;
        border-bottom: 1px solid transparent;
        padding: 6px 0;
        &:focus {
          border-bottom: 1px solid #999;
        }
      }
    }
    .content {
      .mg;
      height: 600px;
      textarea {
        font-size: 16px;
        line-height: 1.6;
      }
    }
    .btns {
      .mg;
      .publish {
      }
    }
  }
</style>


