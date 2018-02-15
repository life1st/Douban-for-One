<template>
  <div class="subject">
    <div class="pic">
      <a :href="subjectLink">
        <img :src="subject.img" :alt="subject.type">
      </a>
    </div>
    <div class="content">
      <div class="title">
        <a :href="subjectLink">{{subject.name}}</a>
      </div>
      <div class="desc">
        {{subject.desc}}
      </div>
      <ul class="info">
        <li v-for="(item,index) in subject.info" :key="index">
          {{item[0]}}:{{item[1]}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'subject',
    props: {
      subject: {
        type: Object,
        default() {
          return {
            type: 'movie',
            id: '24875534',
            name: '十二公民‎ (2014)',
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
      }
    },
    computed: {
      subjectLink() {
        let baseUrl = {
          'movie': 'https://movie.douban.com/subject/',
          'book': 'https://book.douban.com/subject/'
        }

        return `${baseUrl[this.subject.type]}${this.subject.id}/`
      }
    }
  }
</script>

<style scoped lang="less">
  .subject {
    background-color: #f9f9f9;
    padding: 16px 20px;
    .pic {
      float: right;
      width: 75px;
      height: 100px;
      background-color: #fff;
    }
    .content {
      width: 419px;
      .title {
        font-size: 15px;
        margin-bottom: 4px;
      }
      .info {
        margin-top: 4px;
        padding-left: 7px;
        position: relative;
        &::before {
          content: '';
          height: 90%;
          border-left: 2px solid #ddd;
          position: absolute;
          top: 2px;
          left: 0;
        }
      }
    }
  }
</style>