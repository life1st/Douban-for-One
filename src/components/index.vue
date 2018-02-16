<template>
  <div class="index">
    <div class="left-aside">
      <user-banner :user="user"></user-banner>
      <div class="like-content-wrap">
        <div class="content-title">
          <h2>我喜欢</h2>
          <div class="all">
            (<a href="#">全部</a>)
          </div>
        </div>
        <div class="content">
          <ul>
            <li>
              <a href="#">{{content.title</a>
              <span>{{content.time</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <aside>
      <div class="profile">
        <div class="base-info">
          <div class="header-wrap">
            <img src="https://img3.doubanio.com/icon/ul84565043-2.jpg" alt="user-header">
          </div>
          <div class="user-info">
            常居:&nbsp;<a href="https://www.douban.com/location/chongqing/">重庆</a><br>
            <div class="pl">LIFE_1st <br> 2014-03-08 加入</div>
          </div>
        </div>
        <div class="user-intro">
          <div class="display-msg" v-show="!editMsg">
            <p>
              <span>{{user.introMsg}}</span>
              <span>(<a href="#" @click="editUserIntro">编辑</a>)</span>
            </p>
          </div>
          <div class="edit-msg" v-show="editMsg">
            <form action="#">
              <textarea v-model="user.introMsg"></textarea>
              <input type="submit" class="submit" value="提交"
                     @click.prevent.stop="updateUserIntroMsg">
              <input type="button" class="cancel" value="取消"
                     @click.prevent.stop="cancelUpdateUserIntroMsg">
            </form>
          </div>
        </div>
      </div>
      <div class="radio-content-warp">
        <div class="content-title">
          <h2>我的广播</h2>
          <div class="all">
            (<a href="#">全部</a>)
          </div>
        </div>
        <ul class="radio-list">
          <li v-for="radio in radioList" :key="radio.id">
            <div class="item-title">
              <!--{{item.type}}看过/读过-->
              <p>看过
                <a :href="radioLink" target="_blank">{{radio.name}}</a>
                <star
                    :rating-point="radio.rating"
                    :action="action"
                ></star>
              </p>
            </div>
            <p class="item-content">{{item.content</p>
            <p class="item-info">
              {{item.markTime
              <a href="#">删除</a>
            </p>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
  import star from '../assets/baseComponents/star'
  import userBanner from '../assets/baseComponents/user-banner'

  export default {
    name: 'vIndex',
    data() {
      return {
        editMsg: false,
        user: {
          name: '测试用户名',
          avatar: 'https://img3.doubanio.com/icon/ul84565043-2.jpg',
          desc: '测试描述',
          introMsg: '测试intro信息'
        },
        radioList: [
          {
            name: '九品芝麻官 (1994)',
            id: 1297518,
            rating: 3
          }
        ],
        action: {
          type: 'gold',
        }
      }
    },
    methods: {
      editUserIntro() {
        this.editMsg = true
      },
      updateUserIntroMsg() {
        this.editMsg = false
        let introMsg = this.user.introMsg
        console.log(introMsg)
      },
      cancelUpdateUserIntroMsg() {
        this.editMsg = false
      },
      radioLink(radio) {
        let baseURL = {
          'movie': 'https://movie.douban.com/',
          'book': 'https://book.douban.com/'
        }

        return `${baseURL[radio.type]}${radio.id}`
      },
    },
    computed: {

    },
    components: {
      star,
      userBanner
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/verb.less";

  .index {
    @base-right-width: 300px;
    width: @base-content-width;
    margin: 0 auto;
    &::after {
      content: ' ';
      clear: both;
      display: block;
    }
    aside {
      float: right;
      width: @base-right-width;
    }
    .left-aside {
      @margin-width: 60px;
      float: left;
      width: @base-content-width - @base-right-width - @margin-width;
      margin-right: @margin-width;
    }
    .profile {
      background-color: #FFF6ED;
      border: 1px solid #faefe3;
      border-radius: 4px;
      overflow: hidden;
      padding: 8px;
      margin-bottom: 12px;
      .base-info {
        &::after {
          content: ' ';
          clear: both;
          display: block;
          border-bottom: 1px solid #f5e9db;
        }
      }
      .header-wrap {
        float: left;
        margin: 0 10px 8px 0;
        border-radius: 2px;
        overflow: hidden;
        width: 160px;
        height: 160px;
      }
      .user-info {
        color: #666;
        font-size: 13px;
        .pl {
          margin-top: 6px;
        }
      }
      .user-intro {
        padding: 5px 0;
        font-size: 13px;
        p {
          line-height: 19px;
        }
      }
      .edit-msg {
        textarea {
          width: 100%;
          height: 3.5em;
          resize: none;
        }
      }
    }
    .radio-content-warp {
      .radio-list {
        list-style: none;
      }
      .item-title {
        margin-bottom: 6px;
        a {
          margin: 0 8px;
        }
      }
      .item-content {
        margin-bottom: 6px;
      }
      .item-info {
        margin-bottom: 16px;
      }
      li {
        margin-top: 4px;
        border-bottom: 1px solid #ddd;
      }
    }
    .content-title {
      line-height: 150%;
      margin-bottom: 16px;
      &:hover {
        background-color: #f2fbf2;
      }
      h2 {
        font-size: 16px;
        display: inline-block;
        color: #072;
        font-weight: 500;
        &::after {
          content: ' · · · · · '
        }
      }
      .all {
        display: inline-block;
      }
    }
    .like-content-wrap {
      .content {
        ul {
          list-style: none;
          padding: 4px 2px;
          &:after {
            content: ' ';
            display: block;
            clear: both;
          }
          border-bottom: 1px dashed #ddd;
        }
        a,
        span {
          font-size: 13px;
          line-height: 19px;
        }
        a {
          float: left;
          text-decoration: none;
        }
        span {
          float: right;
        }
      }
    }
  }
</style>