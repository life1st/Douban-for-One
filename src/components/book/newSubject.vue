<template>
  <div class="new-subject">
    <div class="douban-id item">
      <label>输入ID补全信息：</label><input type="text" v-model="doubanID">
      <button @click="getInfo">获取信息</button>
    </div>
    <div class="title">
      <label>书名</label><input type="text" v-model="name">
    </div>
    <div class="info">
      <!--<div class="avatar">-->
      <!--<img :src="imgUrl" alt="">-->
      <!--</div>-->
      <div class="item">
        <label>链接</label><input type="text" v-model="link">
      </div>
      <div class="item">
        <label>简评</label><textarea v-model="ratingContent"></textarea>
      </div>
    </div>
    <div class="rating">
      <label>评分</label><input type="number" max="5" min="1" v-model="rating">
    </div>
    <div class="btns">
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script>
  import { getRemoteBook, newBook } from "../../Api/book";

  export default {
    name: "newSubject",
    data() {
      return {
        doubanID: '',
        name: '',
        link: '',
        info: '',
        rating: 5,
        ratingContent: '',
        summary: ''
      }
    },
    methods: {
      getInfo() {
        if (this.doubanID == '') return
        getRemoteBook(this.doubanID).then(res => {
          console.log(res)
          this.name = res.title
          this.link = res.alt
          this.summary = res.summary
        })
      },
      save() {
        newBook({
          id: this.doubanID,
          name: this.name,
          link: this.link,
          info: this.info,
          rating: Number(this.rating),
          ratingContent: this.ratingContent,
          summary: this.summary
        }).then(() => {
          alert('保存成功')
        }).catch(() => {
          alert('保存错误，请稍候重试')
        })
        this.$router.push({path: '/books'})
      }
    }
  }
</script>

<style scoped lang="less">
  .new-subject {
    width: 800px;
    margin: 0 auto;
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    label {
      display: inline-block;
      width: 5em;
    }
    input {
      border: 1px solid #c9c9c9;
      border-radius: 3px;
      width: 200px;
      padding: 5px;
      margin-left: 8px;
      height: 18px;
      font-size: 14px;
      vertical-align: middle;
    }
    textarea {
      margin-left: 8px;
    }
  }
</style>