<template>
  <div class="broad-cast">
    <ul class="list">
      <li v-for="item in items" :key="item.id" class="item">
        <div class="user-info">
          <div class="avatar">
            <img :src="user.avatar" alt="user-avatar">
          </div>
          <div class="user-detail">
            <p>
              <a href="#" class="user-name">{{user.name}}</a>
              <span class="operation">{{operation}}</span>
            </p>
            <blockquote class="content">
              <star :rating-point="item.rating"></star>
              <span class="text">{{item.text}}</span>
            </blockquote>
            <subject :subject="item.subject"></subject>
            <div class="actions">
              <span class="time">{{item.time}}</span>
              <a href="#" class="delete" @click="deleteItem(item)">删除</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import star from '../assets/baseComponents/star'
  import subject from './book/card'

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
            time: '2月15日',
            subject: {
              type: 'movie',
              id: '24875534',
              name: '十二公民‎ (2014) 父组件',
              rating: 8.2,
              desc: '某高校模拟法庭，正就社会上不久前发生的一起真实案件展开辩论。案件的嫌疑人是某...',
              info: [
                ['导演', '徐昂 Ang Xu'],
                ['主演', '何冰 Bing He'],
                ['类型', '剧情']
              ],
              img: 'https://img3.doubanio.com/view/status/small/public/17AluJ.webp'
            }
          }
        ]
      }
    },
    computed: {
      operation() {
/*        let type = {
          'movie': '看过',
          'book': '读过'
        }*/

        // return `${type[this.item.type]}`
        return '看过'
      }
    },
    methods: {
      deleteItem(item) {
        console.log(item)
        alert('假的删除')
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
      color: #9D9D9D;
    }
    .user-detail {
      .content {
        margin: 10px 0;
      }
      .actions {
        margin-top: 20px;
        .time {
          color: #999;
          margin-right: 1.5em;
        }
      }
    }
  }
</style>