<template>
  <div class="note-wrapper">
    <div class="note">
      <h1 class="title">
        {{note.title}}
      </h1>
      <div class="info">
        <a class="user-avatar" :href="userLink">
          <img :src="user.avatar" alt="user header">
        </a>
        <a class="user-name" :href="userLink">
          {{user.name}}
        </a>
        <span class="date">
        {{note.date}}
      </span>
      </div>
      <div class="text"
           v-html="note.text">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'note',
    props: {
      note: {
        type: Object,
        default() {
          return {
            title: '测试文章标题',
            text: '<p>测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容</p><img id="imgPicture" src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=a8a1ce19932397ddc274905638ebd9d2/9c16fdfaaf51f3de79164e9a96eef01f3b2979ac.jpg" url="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=a8a1ce19932397ddc274905638ebd9d2/9c16fdfaaf51f3de79164e9a96eef01f3b2979ac.jpg"><p>测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容测试文章内容</p>',
            date: '2018-02-12 00:37:22'
          }
        }
      },
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
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/css/verb.less";

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
    img {
      max-width: 665px !important;
      display: block;
      margin: 0 auto;
      padding-bottom: 8px;
    }
  }

</style>