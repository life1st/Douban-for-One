<template>
  <div class="note-wrapper">
    <div class="btns">
      <button @click="deletePost">删除</button>
    </div>
    <div class="note">
      <h1 class="title">
        {{title}}
      </h1>
      <div class="info">
        <a class="user-avatar" :href="userLink">
          <img :src="user.avatar" alt="user header">
        </a>
        <a class="user-name" :href="userLink">
          {{userInfo.userName}}
        </a>
        <span class="date">
        {{time}}
      </span>
      </div>
      <div class="text"
           v-html="content">
      </div>

    </div>
  </div>
</template>

<script>
  import { getPoster, deletePoster } from "../../Api/poster";

  export default {
    name: 'note',
    props: {
      user: {
        type: Object,
        default() {
          return {
            name: '测试用户',
            avatar: 'https://img3.doubanio.com/icon/u84565043-2.jpg'
          }
        }
      }
    },
    computed: {
      userLink() {
        return 'https://www.douban.com/people/LIFE_1st/'
      },
      userInfo() {
        return this.$store.state.userInfo
      },
      id() {
        return this.$route.params.id
      }
    },
    data() {
      return {
        title: '',
        content: '',
        time: ''
      }
    },
    created() {
      let id = this.$route.params.id
      console.log(id)
      getPoster(id).then(res => {
        console.log(res)
        this.title = res.title
        this.content = res.content
        this.time = res.time
      })
    },
    methods: {
      deletePost() {
        deletePoster(this.id).then(() => {
          alert('删除成功')
          this.$router.push({path: '/notes'})
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/verb.less";

  .note-wrapper {
    width: @base-content-width;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  .note {
    width: 675px;
    margin-right: 40px;
    font-size: 12px;
    .title {
      padding: 0 0 20px 0;
      color: #111;
      line-height: 1.4;
    }
    .info {
      display: flex;
      align-items: center;
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      overflow: hidden;
      display: inline-block;
      img {
        width: 24px;
      }
    }
    .user-name {
      margin: 0 10px 0 7px;
    }
    .date {
      color: #999;
      font-size: 13px;
    }
  }
  .text {
    width: 675px;
    margin-top: 30px;
    overflow: hidden;
    p {
      margin: 0 0 20px 0;
      line-height: 1.8;
      font-size: 1em;
      color: #111;
      font-family: Arial, Helvetica, sans-serif;
      word-wrap: break-word;
      white-space: pre-wrap;
    }
    // 这是控制 note 内容区域的图片大小，防止内容自带样式权重太高所以使用 important
    img {
      max-width: 665px !important;
      display: block;
      margin: 0 auto;
      padding-bottom: 8px;
    }
  }
  .btns {
    float: right;
  }
</style>