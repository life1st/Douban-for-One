<template>
  <div class="broad-cast">
    <ul class="list">
      <li v-for="(item,index) in items" :key="index" class="item">
        <div class="user-info">
          <div class="avatar">
            <img :src="user.avatar" alt="user-avatar">
          </div>
          <div class="user-detail">
            <p>
              <a href="#" class="user-name">{{user.name}}</a><span class="operation">{{operation}}</span>
            </p>
            <blockquote class="content">
              <star></star><span class="text">{{item.text}}</span>
            </blockquote>
            <subject></subject>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import star from '../assets/baseComponents/star'
  import subject from './subject'

  export default {
    name: 'broadcast',
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
    data() {
      return {
        items: [
          {
            rating: 5,
            text: '评价内容',
            type: 'movie',
            id: '1292328'
          }
        ]
      }
    },
    computed: {
      operation() {
        return '看过'
      }
    },
    components: {
      star,
      subject
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/verb.less";

  .broad-cast {
    width: @base-content-width;
    margin: 0 auto;
    .item {
      width: 675px;
      padding: 20px 0;
      border-bottom: 1px solid #e5e5e5 ;
    }
    .user-info {
      .user-detail {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
    .avatar {
      float: left;
      width: 48px;
      height: 48px;
      margin-right: 20px;
    }
    .user-name {
      color: @normal-text-color;
      text-decoration: none;
      margin-right: 4px;
      transition: none;
      &:hover {
        color: #fff;
        background-color: #37a;
      }
    }
    .operation {
      /*color: @base-text-color;*/
      color: #9D9D9D;
    }
    .user-detail {
      .content {
        margin: 10px 0;
      }
    }
  }
</style>